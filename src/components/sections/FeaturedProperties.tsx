import React, { useState, useEffect, useRef } from 'react';

// Types
export interface Property {
  id: number;
  name: string;
  location: string;
  type: string;
  price: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
  index: number;
  isVisible: boolean;
}

interface FeaturedPropertiesProps {
  properties: Property[];
}

// PropertyCard Component with animations
export const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, isVisible }) => {
  return (
    <div 
      className={`bg-[#BFB0A0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-4 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image Container with Decorative Circle */}
      <div className="relative mb-6">
        {/* Decorative Circle - Top Right with scale animation */}
        <div className={`absolute -top-2 -right-2 w-24 h-24 bg-[#D4C5B3] rounded-full z-0 transition-all duration-700 group-hover:scale-110 group-hover:bg-[#C9A86A] ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}></div>
        
        {/* Property Image with zoom effect */}
        <div className="relative z-10 overflow-hidden shadow-md" style={{
          borderTopRightRadius: '40px',
          borderBottomLeftRadius: '40px'
        }}>
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Featured badge that appears on hover */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#7A6854] px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-4">
          {/* Left Side - Name and Location */}
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-white mb-1 group-hover:text-[#F5EFE7] transition-colors duration-300">
              {property.name}
            </h3>
            <p className="text-sm text-black/90 group-hover:text-black transition-colors duration-300">
              {property.location}
            </p>
          </div>

          {/* Right Side - Type and Price */}
          <div className="text-right">
            <p className="text-sm text-white/90 mb-1">
              {property.type}
            </p>
            <p className="font-semibold text-lg text-black group-hover:text-[#5A4A3A] transition-colors duration-300">
              {property.price}
            </p>
          </div>
        </div>

        {/* View Details button that appears on hover */}
        <button className="w-full bg-white/80 text-[#7A6854] py-2 rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
};

// FeaturedProperties Component
export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ properties }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mock data for demo
  const displayProperties = properties.length > 0 ? properties : [
    {
      id: 1,
      name: "Modern Villa",
      location: "Beverly Hills",
      type: "Villa",
      price: "$2.5M",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
    },
    {
      id: 2,
      name: "Luxury Apartment",
      location: "Manhattan",
      type: "Apartment",
      price: "$1.8M",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
    },
    {
      id: 3,
      name: "Beach House",
      location: "Malibu",
      type: "House",
      price: "$3.2M",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-[#EDE5D8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className={`text-4xl md:text-5xl font-serif mb-3 text-[#5A4A3A] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            Our Featured Properties
          </h2>
          <p className={`text-gray-600 text-base max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            One of our biggest product to be featured and that has sold out the most
          </p>
        </div>

        {/* Decorative line animation */}
        <div className="flex justify-center mb-8">
          <div className={`h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent transition-all duration-1000 delay-200 ${
            isVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}></div>
        </div>

        {/* View More Button - Aligned Right with slide animation */}
        <div className={`flex justify-end mb-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <button className="bg-[#7A6854] text-white px-8 py-3 rounded-lg hover:bg-[#6B5945] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium group relative overflow-hidden">
            <span className="relative z-10">View more</span>
            <div className="absolute inset-0 bg-[#6B5945] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Property Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayProperties.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="relative mt-16 h-2">
          <div className={`absolute left-0 w-20 h-20 rounded-full bg-[#C9A86A] opacity-20 blur-2xl transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}></div>
          <div className={`absolute right-20 w-32 h-32 rounded-full bg-[#BCAA94] opacity-20 blur-2xl transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}></div>
        </div>
      </div>
    </section>
  );
};