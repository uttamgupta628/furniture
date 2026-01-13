import React, { useState, useEffect, useRef } from 'react';

// Add keyframe animations
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes rotate-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s ease-in-out;
  }
  
  .animate-rotate-slow {
    animation: rotate-slow 20s linear infinite;
  }
`;

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-[#BFB0A0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 p-4 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Decorative Circle */}
      <div className="relative mb-6">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#C9A86A] via-[#D4C5B3] to-[#BFB0A0] rounded-3xl blur-xl transition-all duration-700 ${
          isHovered ? 'opacity-50 scale-105' : 'opacity-0 scale-95'
        }`}></div>
        
        {/* Decorative Circles - Multiple with stagger animation */}
        <div className={`absolute -top-2 -right-2 w-24 h-24 bg-[#D4C5B3] rounded-full z-0 transition-all duration-700 group-hover:scale-125 group-hover:bg-[#C9A86A] group-hover:rotate-90 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}></div>
        
        <div className={`absolute -bottom-3 -left-3 w-16 h-16 bg-[#C9A86A] rounded-full z-0 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-45 ${
          isVisible ? 'scale-100 opacity-60' : 'scale-0 opacity-0'
        }`} style={{ transitionDelay: `${index * 150 + 400}ms` }}></div>
        
        {/* Property Image with zoom effect */}
        <div className="relative z-10 overflow-hidden shadow-md" style={{
          borderTopRightRadius: '40px',
          borderBottomLeftRadius: '40px'
        }}>
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-56 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
          />
          {/* Animated overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated shine effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
            isHovered ? 'animate-shimmer' : ''
          }`}></div>
        </div>

        {/* Featured badge with bounce animation */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#7A6854] px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 scale-75 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 z-20 shadow-lg group-hover:shadow-xl">
          <span className="inline-block group-hover:animate-pulse">✨ Featured</span>
        </div>
        
        {/* Price tag that slides in */}
        <div className="absolute bottom-4 right-4 bg-[#7A6854] text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-20 shadow-lg">
          {property.price}
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-4">
          {/* Left Side - Name and Location with stagger animation */}
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-white mb-1 group-hover:text-[#F5EFE7] transition-all duration-300 group-hover:translate-x-1">
              {property.name}
            </h3>
            <p className="text-sm text-black/90 group-hover:text-black transition-all duration-300 delay-75 group-hover:translate-x-1">
              📍 {property.location}
            </p>
          </div>

          {/* Right Side - Type badge with scale animation */}
          <div className="text-right">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full mb-2 group-hover:bg-white/50 group-hover:scale-110 transition-all duration-300">
              <p className="text-xs text-white/90 font-medium">
                {property.type}
              </p>
            </div>
          </div>
        </div>

        {/* Animated divider */}
        <div className="w-0 h-0.5 bg-gradient-to-r from-[#C9A86A] to-transparent group-hover:w-full transition-all duration-500 mb-4"></div>

        {/* View Details button with multiple animations */}
        <button className="w-full bg-gradient-to-r from-white/80 to-white/90 text-[#7A6854] py-3 rounded-md font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 hover:from-white hover:to-white hover:shadow-xl relative overflow-hidden group/btn">
          <span className="relative z-10 group-hover/btn:tracking-wider transition-all duration-300">View Details →</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A86A]/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
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
    // Inject styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset and trigger animation every time section comes into view
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset first
          setTimeout(() => setIsVisible(true), 50); // Then trigger animation
        } else {
          setIsVisible(false); // Reset when out of view
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
      document.head.querySelectorAll('style').forEach(style => {
        if (style.textContent?.includes('@keyframes float')) {
          style.remove();
        }
      });
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
    <section ref={sectionRef} className="px-6 py-20 bg-[#EDE5D8] overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A86A] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#BFB0A0] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-4 relative">
          {/* Decorative floating elements */}
          <div className={`absolute -top-8 left-1/4 w-3 h-3 bg-[#C9A86A] rounded-full transition-all duration-1000 ${
            isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 -translate-y-10'
          }`} style={{ animation: isVisible ? 'float 3s ease-in-out infinite' : 'none' }}></div>
          <div className={`absolute -top-6 right-1/3 w-2 h-2 bg-[#BFB0A0] rounded-full transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 -translate-y-10'
          }`} style={{ animation: isVisible ? 'float 4s ease-in-out infinite 0.5s' : 'none' }}></div>
          
          <h2 className={`text-4xl md:text-5xl font-serif mb-3 text-[#5A4A3A] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'
          }`}>
            Our Featured Properties
          </h2>
          <p className={`text-gray-600 text-base max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            One of our biggest product to be featured and that has sold out the most
          </p>
        </div>

        {/* Decorative line animation with pulse */}
        <div className="flex justify-center mb-8">
          <div className={`h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent transition-all duration-1000 delay-200 ${
            isVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}>
            <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* View More Button - Enhanced with ripple effect */}
        <div className={`flex justify-end mb-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <button className="bg-[#7A6854] text-white px-8 py-3 rounded-md hover:bg-[#6B5945] transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm font-medium group relative overflow-hidden">
            <span className="relative z-10">View more</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B5945] to-[#5A4A3A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10 inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 rounded-lg transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
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

        {/* Bottom decorative elements with floating animation */}
        <div className="relative mt-16 h-2">
          <div className={`absolute left-0 w-20 h-20 rounded-full bg-[#C9A86A] opacity-20 blur-2xl transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
          }`} style={{ 
            transitionDelay: '600ms',
            animation: isVisible ? 'float 4s ease-in-out infinite' : 'none'
          }}></div>
          <div className={`absolute right-20 w-32 h-32 rounded-full bg-[#BCAA94] opacity-20 blur-2xl transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
          }`} style={{ 
            transitionDelay: '800ms',
            animation: isVisible ? 'float 5s ease-in-out infinite 1s' : 'none'
          }}></div>
          <div className={`absolute left-1/2 w-24 h-24 rounded-full bg-[#D4C5B3] opacity-15 blur-2xl transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-15' : 'scale-0 opacity-0'
          }`} style={{ 
            transitionDelay: '1000ms',
            animation: isVisible ? 'float 6s ease-in-out infinite 0.5s' : 'none'
          }}></div>
        </div>
      </div>
    </section>
  );
};

// Default export for demo
export default function App() {
  return (
    <div className="min-h-screen">
      {/* Add some content before to enable scrolling */}
      <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Properties</h1>
          <p className="text-xl mb-8">Scroll down to see our featured properties</p>
          <div className="animate-bounce text-4xl">↓</div>
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <FeaturedProperties properties={[]} />
      
      {/* Add content after to enable scrolling back up */}
      <div className="h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Scroll back up to see the animation again!</h2>
          <div className="animate-bounce text-4xl rotate-180">↓</div>
        </div>
      </div>
    </div>
  );
}