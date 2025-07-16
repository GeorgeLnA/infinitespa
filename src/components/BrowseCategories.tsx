import React from 'react';
import { Home, Building, Building2, Warehouse, Car } from 'lucide-react';

const BrowseCategories = () => {
  const categories = [
    {
      icon: Home,
      title: 'Spa Units',
      active: true
    },
    {
      icon: Building2,
      title: 'Mobile Saunas',
      active: false
    }
  ];

  const products = [
    {
      image: '/6_Photo - 1 (2).jpg',
      title: 'Infinite 177E',
      price: '£ 333,500',
      specs: '2,028 ft² (188.41 m²)',
      features: '4 2 1',
      badge: 'Today'
    },
    {
      image: '/6_Photo - 2 (2).jpg',
      title: 'Perfect 155E',
      price: '£ 283,800',
      specs: '1,759 ft² (163.42 m²)',
      features: '3 2 1',
      badge: 'Today'
    },
    {
      image: '/6_Photo - 3 (2).jpg',
      title: 'Perfect 101E',
      price: '£ 191,400',
      specs: '1,161 ft² (107.86 m²)',
      features: '3 1',
      badge: 'Today'
    },
    {
      image: '/6_Photo - 4 (1).jpg',
      title: 'Luxury Spa',
      price: '£ 499,000',
      specs: '2,500 ft² (232.25 m²)',
      features: '5 3 2',
      badge: 'Today'
    }
  ];

  return (
    <section id="spa-designs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-medium text-gray-800 mb-12">Browse categories</h2>
        
        {/* Category Pills */}
        <div className="flex gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-md focus:outline-none ${
                category.active 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => {/* Add your click handler logic here if needed */}}
            >
              <category.icon className="w-8 h-8 text-gray-600 mb-3" strokeWidth={1.5} />
              <span className="text-sm text-gray-700 font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
              <div className="relative mb-4 rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {product.badge}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 p-4">
                <h3 className="text-xl font-medium text-gray-900">{product.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{product.specs}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{product.features.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      <span>{product.features.split(' ')[1]}</span>
                    </div>
                    {product.features.split(' ')[2] && (
                      <div className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        <span>{product.features.split(' ')[2]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors hover:shadow-md">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;