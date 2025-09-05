import React from 'react';
import { Award, Heart, Utensils } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-900">Story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2015, Zapnix has been a beacon of culinary excellence in the heart of the city. 
              Our passion for creating extraordinary dining experiences drives everything we do, 
              from sourcing the finest ingredients to crafting innovative dishes that honor both 
              tradition and creativity.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Led by our award-winning culinary team, we believe that every meal should be a 
              celebration. Our commitment to quality, sustainability, and exceptional service 
              has made Zapnix a destination for food enthusiasts worldwide.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-red-900 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Award-Winning Cuisine</h3>
                  <p className="text-gray-600">Recognized by Michelin and James Beard</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-red-900 p-3 rounded-full mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sustainable Sourcing</h3>
                  <p className="text-gray-600">Local, organic, and ethically sourced ingredients</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-red-900 p-3 rounded-full mr-4">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovative Techniques</h3>
                  <p className="text-gray-600">Modern culinary methods with classic foundations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Chef preparing food"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Restaurant interior"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">9</div>
                <div className="text-sm text-white">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;