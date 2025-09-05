import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit <span className="text-yellow-400">Zapnix</span>
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to serve you an unforgettable dining experience. Reserve your table today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-yellow-400 p-4 rounded-full inline-block mb-4">
              <MapPin className="w-6 h-6 text-red-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="opacity-90">12, Sindhubhavan Road<br />Ahmedabad District<br />Ahmedabad , 380026</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-400 p-4 rounded-full inline-block mb-4">
              <Phone className="w-6 h-6 text-red-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="opacity-90">+917861998957<br />Reservations<br />+918238299979</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-400 p-4 rounded-full inline-block mb-4">
              <Clock className="w-6 h-6 text-red-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="opacity-90">Mon-Thu: 5:00 PM - 11:00 PM<br />Fri-Sat: 5:00 PM - 12:00 AM<br />Sun: 4:00 PM - 10:00 PM</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-400 p-4 rounded-full inline-block mb-4">
              <Mail className="w-6 h-6 text-red-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="opacity-90">info@zapnix.com<br />reservations@zapnix.com<br />events@zapnix.com</p>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Make a Reservation</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="time"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>
            <textarea
              placeholder="Special Requests (Optional)"
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              Reserve Your Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;