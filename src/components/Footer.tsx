import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Zapnix</h3>
            <p className="text-gray-300 mb-6">
              Where culinary artistry meets exceptional service. Experience fine dining at its finest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Private Dining</span></li>
              <li><span className="text-gray-300">Catering</span></li>
              <li><span className="text-gray-300">Wine Tastings</span></li>
              <li><span className="text-gray-300">Cooking Classes</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-gray-300 text-sm">12, Sindhubhavan Road, Ahmedabad</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-gray-300 text-sm">+917861998957, +918238299979</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-gray-300 text-sm">info@zapnix.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Zapnix Restaurant. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;