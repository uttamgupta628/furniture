import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Home, Key } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset and trigger animation every time section comes into view
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

  const steps = [
    {
      icon: MapPin,
      title: "Find Home",
      description: "Our properties are located at prime areas where by there won't be problem with transportation",
      color: "from-[#C9A86A] to-[#D4C5B3]",
      iconBg: "bg-gradient-to-br from-[#C9A86A] to-[#D4C5B3]"
    },
    {
      icon: Home,
      title: "Make a Deal",
      description: "Our properties are located at prime areas where by there won't be problem with transportation",
      color: "from-[#BFB0A0] to-[#BCAA94]",
      iconBg: "bg-gradient-to-br from-[#BFB0A0] to-[#BCAA94]"
    },
    {
      icon: Key,
      title: "Get Your Keys",
      description: "Our properties are located at prime areas where by there won't be problem with transportation",
      color: "from-[#D4C5B3] to-[#C9A86A]",
      iconBg: "bg-gradient-to-br from-[#D4C5B3] to-[#C9A86A]"
    }
  ];

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-[#EDE5D8] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-64 h-64 bg-[#C9A86A] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 8s ease-in-out infinite' : 'none' }}></div>
        <div className={`absolute bottom-20 right-10 w-80 h-80 bg-[#BFB0A0] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 10s ease-in-out infinite 2s' : 'none' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-48 h-48 bg-[#D4C5B3] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 12s ease-in-out infinite 4s' : 'none' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header with enhanced animation */}
        <div className="mb-16 relative">
          {/* Floating decorative elements around title */}
          <div className={`absolute -top-6 left-1/4 w-3 h-3 bg-[#C9A86A] rounded-full transition-all duration-1000 ${
            isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 -translate-y-10'
          }`} style={{ animation: isVisible ? 'float 4s ease-in-out infinite' : 'none' }}></div>
          <div className={`absolute -top-4 right-1/3 w-2 h-2 bg-[#BFB0A0] rounded-full transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 -translate-y-10'
          }`} style={{ animation: isVisible ? 'float 5s ease-in-out infinite 1s' : 'none' }}></div>
          
          <h2 className={`text-4xl md:text-5xl font-serif mb-3 text-[#76604B] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'
          }`}>
            How it works
          </h2>
          <p className={`text-gray-600 mb-6 text-base transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            This is how our products works
          </p>

          {/* Animated decorative line */}
          <div className="flex justify-center">
            <div className={`h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}>
              <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines between cards */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#C9A86A]/30 to-transparent"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div 
                key={index} 
                className={`relative bg-[#BCAA94] p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-2 group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`}></div>
                
                {/* Decorative circles */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-90 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: `${300 + index * 150}ms` }}></div>
                
                <div className={`absolute -bottom-3 -left-3 w-16 h-16 bg-[#D4C5B3] rounded-full opacity-40 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-45 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: `${400 + index * 150}ms` }}></div>

                {/* Number badge */}
                <div className={`absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} style={{ transitionDelay: `${250 + index * 150}ms` }}>
                  {index + 1}
                </div>
                
                {/* Icon Circle with enhanced animations */}
                <div className="relative w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  {/* Multiple pulse rings */}
                  <div className={`absolute inset-0 ${step.iconBg} rounded-full animate-ping opacity-20 ${
                    isHovered ? '' : 'group-hover:animate-none'
                  }`} style={{ animationDuration: '2s', animationDelay: `${index * 0.3}s` }} />
                  <div className={`absolute inset-0 ${step.iconBg} rounded-full animate-ping opacity-10 ${
                    isHovered ? '' : 'group-hover:animate-none'
                  }`} style={{ animationDuration: '2.5s', animationDelay: `${index * 0.3 + 0.5}s` }} />
                  
                  {/* Main icon container */}
                  <div className={`relative w-full h-full ${step.iconBg} rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl`}>
                    <IconComponent className="w-12 h-12 text-white relative z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" strokeWidth={2} />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
                  </div>
                </div>
                
                {/* Title with gradient on hover */}
                <h3 className="text-xl font-semibold mb-4 text-[#3A2F25] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: isHovered ? `linear-gradient(to right, #C9A86A, #D4C5B3)` : 'none' }}>
                  {step.title}
                </h3>
                
                {/* Description with slide animation */}
                <p className="text-[#5A4A3A] text-sm leading-relaxed transition-all duration-300 group-hover:text-[#3A2F25]">
                  {step.description}
                </p>

                {/* Animated divider */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#C9A86A] to-transparent group-hover:w-full transition-all duration-500 mt-4 mx-auto"></div>

                {/* Learn more button that appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 mt-4">
                  <button className={`w-full bg-gradient-to-r ${step.color} text-white py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
                    <span className="relative z-10">Learn More →</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Decorative corner accent with animation */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                
                {/* Bottom corner glow */}
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${step.color} rounded-tr-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`} />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative elements */}
        <div className="relative mt-20 h-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`absolute w-20 h-20 rounded-full bg-[#C9A86A] opacity-15 blur-2xl transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-15' : 'scale-0 opacity-0'
              }`} 
              style={{ 
                left: `${20 + i * 30}%`,
                transitionDelay: `${600 + i * 200}ms`,
                animation: isVisible ? `float ${6 + i}s ease-in-out infinite ${i}s` : 'none'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
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
          <p className="text-xl mb-8">Scroll down to see how it works</p>
          <div className="animate-bounce text-4xl">↓</div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <HowItWorks />
      
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