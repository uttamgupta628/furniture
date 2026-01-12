import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const benefits = [
    { text: 'World class', col: 1 },
    { text: 'Affordable', col: 2 },
    { text: 'Trusted', col: 1 },
    { text: 'Amenities', col: 2 }
  ];

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-[#EDE5D8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {/* Decorative circle background with scale animation */}
            <div className={`w-80 h-80 rounded-full bg-[#D4C5B3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-1000 ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
            }`}></div>
            
            {/* Floating animation wrapper */}
            <div className={`animate-float ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              {/* House Image */}
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" 
                alt="Modern House" 
                className="relative z-10 shadow-2xl w-full object-cover hover:shadow-3xl transition-shadow duration-500"
                style={{
                  borderTopRightRadius: '80px',
                  borderBottomLeftRadius: '80px'
                }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-serif mb-4 text-[#5A4A3A] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              Why you should choose us
            </h2>
            <p className={`text-gray-600 mb-10 text-base leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              Creating quality urban lifestyles, building stronger communities
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 group transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  {/* Golden Check Icon with animation */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-[#C9A86A] rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-500"></div>
                    <Check className="w-6 h-6 text-[#C9A86A] stroke-[3] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Benefit Text */}
                  <span className="font-medium text-[#5A4A3A] text-base group-hover:text-[#76604B] group-hover:translate-x-1 transition-all duration-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional CTA button with pulse */}
            <button className={`mt-10 px-8 py-3 bg-[#7A6854] text-white rounded-full font-medium hover:bg-[#6B5945] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-subtle-pulse ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '900ms' }}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes subtlePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-subtle-pulse {
          animation: subtlePulse 3s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};