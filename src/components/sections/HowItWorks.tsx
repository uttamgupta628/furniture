import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Home, Key } from 'lucide-react';

export const HowItWorks: React.FC = () => {
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

  const steps = [
    {
      icon: MapPin,
      title: "Find Home",
      description: "Our properties are located at prime areas where by there won't be problem with transportation"
    },
    {
      icon: Home,
      title: "Make a Deal",
      description: "Our properties are located at prime areas where by there won't be problem with transportation"
    },
    {
      icon: Key,
      title: "Get Your Keys",
      description: "Our properties are located at prime areas where by there won't be problem with transportation"
    }
  ];

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-[#EDE5D8] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className={`text-4xl md:text-5xl font-serif mb-3 text-[#76604B] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          How it works
        </h2>
        <p className={`text-gray-600 mb-16 text-base transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          This is how our products works
        </p>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className={`bg-[#BCAA94] p-10 rounded-2xl hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Icon Circle with pulse animation */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:animate-none" 
                       style={{ animationDuration: '2s', animationDelay: `${index * 0.3}s` }} />
                  <IconComponent className="w-10 h-10 text-[#7A6854] relative z-10 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-[#3A2F25] group-hover:text-[#76604B] transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#5A4A3A] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
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
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};