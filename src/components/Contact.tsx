import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://coecapstone2.app.n8n.cloud/webhook/reservation", {  // ⬅️ replace with your n8n webhook URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage("✅ Reservation Successful.");
        e.target.reset();
      } else {
        setMessage("❌ Failed to send reservation. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Contact Info Section (unchanged) ... */}

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Make a Reservation</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input type="email" name="email" placeholder="Email Address" required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <input type="date" name="date" required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input type="time" name="time" required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <select name="guests" required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>

            <textarea name="requests" placeholder="Special Requests (Optional)" rows={3}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            ></textarea>

            <button type="submit" disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Reserve Your Table"}
            </button>
          </form>

          {message && (
            <p className="text-center mt-4 font-medium">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
