import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, MapPin, Home, DollarSign } from "lucide-react";

interface SearchBarProps {
  location?: string;
  propertyType?: string;
  maxPrice?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  location: initialLocation = "India",
  propertyType: initialPropertyType = "Duplex",
  maxPrice: initialMaxPrice = "$10,000",
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [propertyType, setPropertyType] = useState(initialPropertyType);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const locations = ["India", "USA", "UK", "Canada", "Australia"];
  const propertyTypes = ["Duplex", "Apartment", "Villa", "House", "Condo"];
  const prices = ["$5,000", "$10,000", "$20,000", "$50,000", "$100,000"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 50);
        } else {
          setIsVisible(false);
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

  return (
    <section ref={sectionRef} className="relative px-6 pb-20 bg-gradient-to-b from-[#EDE5D8] to-[#F6EFE6] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 right-20 w-64 h-64 bg-[#C9A86A] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 8s ease-in-out infinite' : 'none' }}></div>
        <div className={`absolute bottom-10 left-20 w-80 h-80 bg-[#BFB0A0] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 10s ease-in-out infinite 2s' : 'none' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title Section */}
        <div className={`text-center mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif text-[#5A4A3A] mb-2">
            Find Your <span className="text-transparent bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] bg-clip-text">Dream Property</span>
          </h2>
          <p className="text-gray-600 text-sm">Search from thousands of properties</p>
          
          {/* Animated divider */}
          <div className="flex justify-center mt-4">
            <div className={`h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}></div>
          </div>
        </div>

        {/* Search Bar Container */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] opacity-20 blur-2xl rounded-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-[#CEBFAC] to-[#C4B49C] rounded-3xl shadow-2xl px-8 py-8 backdrop-blur-sm border border-white/20">
            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-[#C9A86A] to-transparent rounded-full opacity-30"></div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-tl from-[#D4C5B3] to-transparent rounded-full opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end relative z-10">
              
              {/* Location */}
              <div className={`group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '400ms' }}>
                <label className="flex items-center gap-2 text-sm font-semibold text-white mb-3 group-hover:text-[#F5EFE7] transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 ${
                  focusedField === 'location' ? 'ring-2 ring-white/50 bg-white/20' : 'hover:bg-white/15'
                }`}>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setFocusedField('location')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent text-sm font-medium text-white border-none outline-none appearance-none cursor-pointer pr-8"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#76604B] text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none transition-transform duration-300 ${
                    focusedField === 'location' ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>

              {/* Property Type */}
              <div className={`group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '500ms' }}>
                <label className="flex items-center gap-2 text-sm font-semibold text-white mb-3 group-hover:text-[#F5EFE7] transition-colors duration-300">
                  <Home className="w-4 h-4" />
                  Property Type
                </label>
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 ${
                  focusedField === 'property' ? 'ring-2 ring-white/50 bg-white/20' : 'hover:bg-white/15'
                }`}>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    onFocus={() => setFocusedField('property')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent text-sm font-medium text-white border-none outline-none appearance-none cursor-pointer pr-8"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#76604B] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none transition-transform duration-300 ${
                    focusedField === 'property' ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>

              {/* Max Price */}
              <div className={`group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '600ms' }}>
                <label className="flex items-center gap-2 text-sm font-semibold text-white mb-3 group-hover:text-[#F5EFE7] transition-colors duration-300">
                  <DollarSign className="w-4 h-4" />
                  Max Price
                </label>
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 ${
                  focusedField === 'price' ? 'ring-2 ring-white/50 bg-white/20' : 'hover:bg-white/15'
                }`}>
                  <select
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    onFocus={() => setFocusedField('price')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent text-sm font-medium text-white border-none outline-none appearance-none cursor-pointer pr-8"
                  >
                    {prices.map((price) => (
                      <option key={price} value={price} className="bg-[#76604B] text-white">
                        {price}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none transition-transform duration-300 ${
                    focusedField === 'price' ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>

              {/* Search Button */}
              <div className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '700ms' }}>
                <label className="block text-sm font-semibold text-transparent mb-3 select-none">
                  Search
                </label>
                <button 
                  onClick={() => {
                    console.log("Searching:", { location, propertyType, maxPrice });
                  }}
                  className="w-full h-[52px] bg-gradient-to-r from-[#76604B] to-[#6B5945] text-white rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:from-[#6B5945] hover:to-[#5A4A3A] transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Search
                  </span>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6B5945] to-[#5A4A3A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </button>
              </div>
            </div>

            {/* Quick filters - Optional enhancement */}
            <div className={`mt-6 flex flex-wrap gap-2 justify-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {['New Listings', 'Price: Low to High', 'Popular', 'Near Me'].map((filter, index) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/20"
                  style={{ transitionDelay: `${800 + index * 50}ms` }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Properties', value: '5000+' },
            { label: 'Cities', value: '50+' },
            { label: 'Happy Clients', value: '10K+' },
            { label: 'Expert Agents', value: '200+' }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/70 transition-all duration-300 hover:scale-105 group"
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-[#C9A86A] mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }
      `}</style>
    </section>
  );
};

// Demo component
export default function App() {
  return (
    <div className="min-h-screen">
      {/* Add some content before to enable scrolling */}
      <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-xl mb-8">Scroll down to see the search bar</p>
          <div className="animate-bounce text-4xl">↓</div>
        </div>
      </div>
      
      {/* Search Bar Section */}
      <SearchBar />
      
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