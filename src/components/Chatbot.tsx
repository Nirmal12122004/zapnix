import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Kiara, your personal dining assistant at Zapnix. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

const sendToWebhook = async (userMessage: string): Promise<string> => {
  try {
    const webhookData = {
      timestamp: new Date().toISOString(),
      userMessage,
      sessionId: `zapnix_${Date.now()}`,
      restaurant: 'Zapnix'
    };

    const response = await fetch('https://agentcalloff.app.n8n.cloud/webhook/zapnix-chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData)
    });

    if (response.ok) {
      const data = await response.json();

      // ✅ Extract string safely
      if (typeof data === "string") return data;
      if (data.content) return data.content;
      if (data.response) return data.response;
      if (data.message && typeof data.message === "object" && data.message.content) {
        return data.message.content;
      }

      return getBotResponse(userMessage);
    } else {
      throw new Error('Webhook response not ok');
    }
  } catch (error) {
    console.log('Webhook notification failed:', error);
    // Fallback to local response if webhook fails
    return getBotResponse(userMessage);
  }
};


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('menu') || message.includes('food') || message.includes('dish')) {
      return "Our menu features exquisite appetizers, premium main courses, and delightful desserts. We're particularly famous for our Paneer Tikka, Dahipuri, Paneer Butter Masala and Kesar Kulfi. Would you like me to tell you about any specific category?";
    }
    
    if (message.includes('reservation') || message.includes('book') || message.includes('table')) {
      return "I'd be happy to help you with reservations! You can book a table through our reservation form on this page, or call us at +917861998957. We're open Monday-Thursday 10:00 AM - 10:00 PM, Friday-Saturday 5:00 PM - 12:00 AM, and Sunday 4:00 PM - 10:00 PM.";
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return "We're located at 12, Sindhubhavan Road , Ahmedabad 380026. We're easily accessible by public transport and offer valet parking for your convenience.";
    }
    
    if (message.includes('hours') || message.includes('open') || message.includes('time')) {
      return "Our hours are: Monday-Thursday 10:00 AM - 10:00 PM, Friday-Saturday 5:00 PM - 12:00 AM, and Sunday 4:00 PM - 10:00 PM. We recommend making reservations, especially for weekends!";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return "Our menu offers a range of options. Appetizers start at 200₹, main courses range from 450₹-600₹, and desserts are 200₹-500₹. We also offer tasting menus and wine pairings for special occasions.";
    }
    
    if (message.includes('dietary') || message.includes('allergy') || message.includes('vegan') || message.includes('gluten')) {
      return "We absolutely accommodate dietary restrictions and allergies! Our chefs can prepare vegan, gluten-free, and other specialized dishes. Please inform us of any dietary needs when making your reservation or mention them to your server.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello there! Welcome to Zapnix. I'm here to help you with anything you need - whether it's information about our menu, making a reservation, or answering questions about our restaurant. What would you like to know?";
    }
    
    return "Thank you for your question! I can help you with information about our menu, reservations, location, hours, and dining experience. You can also call us directly at +917861998957 for immediate assistance. Is there something specific you'd like to know about Zapnix?";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Get response from webhook
    sendToWebhook(inputValue).then((responseText) => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    });
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-red-600 rotate-45' : 'bg-red-900 hover:bg-red-800'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white mx-auto" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white mx-auto" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 md:w-96 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-red-900 p-4 text-white">
            <div className="flex items-center">
              <div className="bg-yellow-400 p-2 rounded-full mr-3">
                <Bot className="w-5 h-5 text-red-900" />
              </div>
              <div>
                <h3 className="font-semibold">Kiara</h3>
                <p className="text-sm opacity-90">Zapnix Assistant</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-red-900 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-100 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Kiara anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-900 hover:bg-red-800 text-white p-2 rounded-full transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;