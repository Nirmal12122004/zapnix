import React, { useState } from 'react';
import {Clock, IndianRupee, Rupee } from "lucide-react";

const menuCategories = {
  appetizers: [
  {
    name: "Paneer Tikka",
    description: "Char-grilled cottage cheese cubes marinated in spiced yogurt",
    price: "₹280",
    image: "https://carveyourcraving.com/wp-content/uploads/2021/10/paneer-tikka-skewers.jpg"
  },
  {
    name: "Vegetable Samosa",
    description: "Crispy pastry stuffed with spiced potato and peas",
    price: "₹120",
    image: "https://static.toiimg.com/thumb/52478948.cms?imgsize=273582&width=800&height=800"
  },
  {
    name: "Dahi Puri",
    description: "Crispy puris topped with yogurt, chutneys, and masala",
    price: "₹150",
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/07/dahi-puri-featured.jpg"
  }
],
mains: [
  {
    name: "Paneer Butter Masala",
    description: "Paneer cubes in a rich tomato-butter gravy",
    price: "₹350",
    image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-restaurant-style-paneer-butter-masala-paneer-makhani-video-recipe.jpg"
  },
  {
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with vegetables & spices",
    price: "₹280",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA2Etw1RJ-InCXJa24bxqg8XIIYCpZ1v4QQ&s"
  },
  {
    name: "Dal Tadka",
    description: "Yellow lentils tempered with ghee, cumin, and garlic",
    price: "₹220",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka.jpg"
  }
],
desserts: [
  {
    name: "Gulab Jamun",
    description: "Soft khoya dumplings soaked in sugar syrup",
    price: "₹120",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp"
  },
  {
    name: "Rasgulla",
    description: "Spongy cottage cheese balls in light sugar syrup",
    price: "₹140",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3EerZuChoGLlNXmz5-YZSC4-W-fmFxXSA&s"
  },
  {
    name: "Kesar Kulfi",
    description: "Traditional saffron-flavored frozen dessert",
    price: "₹70",
    image: "https://images.news18.com/webstories/uploads/2024/06/istockphoto-657070302-612x612-2024-06-0b3dbf89a818366f60b9376b831bb1af.jpg"
  }
]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-900">Exquisite</span> Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with passion, served with excellence. Each dish tells a story of culinary artistry.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2 inline-flex">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full capitalize font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-red-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-red-900">{item.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>15-20 min</span>
                  <IndianRupee className="w-5 h-5" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;