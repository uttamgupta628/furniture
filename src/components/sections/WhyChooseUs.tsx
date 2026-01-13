import React, { useState, useEffect, useRef } from 'react';
import { Check, Award, Shield, TrendingUp, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    { text: 'World class', icon: Award, color: 'from-[#C9A86A] to-[#D4C5B3]' },
    { text: 'Affordable', icon: TrendingUp, color: 'from-[#BFB0A0] to-[#BCAA94]' },
    { text: 'Trusted', icon: Shield, color: 'from-[#D4C5B3] to-[#C9A86A]' },
    { text: 'Amenities', icon: Users, color: 'from-[#BCAA94] to-[#BFB0A0]' }
  ];

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-[#EDE5D8] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 bg-[#C9A86A] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 10s ease-in-out infinite' : 'none' }}></div>
        <div className={`absolute bottom-32 left-20 w-80 h-80 bg-[#BFB0A0] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 12s ease-in-out infinite 3s' : 'none' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {/* Multiple decorative circles with different animations */}
            <div className={`w-80 h-80 rounded-full bg-gradient-to-br from-[#D4C5B3] to-[#C9A86A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-1000 ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
            }`} style={{ animation: isVisible ? 'spin-slow 20s linear infinite' : 'none' }}></div>
            
            <div className={`w-72 h-72 rounded-full bg-[#BFB0A0] opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-1000 delay-100 ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
            }`} style={{ animation: isVisible ? 'spin-slow 15s linear infinite reverse' : 'none' }}></div>

            {/* Decorative corner elements */}
            <div className={`absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#C9A86A] to-transparent rounded-full opacity-50 transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-50' : 'scale-0 opacity-0'
            }`} style={{ animation: isVisible ? 'float 5s ease-in-out infinite' : 'none' }}></div>
            
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-[#D4C5B3] to-transparent rounded-full opacity-40 transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-100 opacity-40' : 'scale-0 opacity-0'
            }`} style={{ animation: isVisible ? 'float 6s ease-in-out infinite 2s' : 'none' }}></div>
            
            {/* Floating animation wrapper with enhanced effects */}
            <div className={`relative group ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                 style={{ animation: imageLoaded ? 'float 6s ease-in-out infinite' : 'none' }}>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A] to-[#D4C5B3] opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 -z-10 scale-95 group-hover:scale-105"></div>
              
              {/* House Image with enhanced hover effects */}
              <div className="relative overflow-hidden" style={{
                borderTopRightRadius: '80px',
                borderBottomLeftRadius: '80px'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" 
                  alt="Modern House" 
                  className="relative z-10 shadow-2xl w-full object-cover group-hover:shadow-3xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  style={{
                    borderTopRightRadius: '80px',
                    borderBottomLeftRadius: '80px'
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" 
                     style={{
                       borderTopRightRadius: '80px',
                       borderBottomLeftRadius: '80px'
                     }}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"
                     style={{
                       borderTopRightRadius: '80px',
                       borderBottomLeftRadius: '80px'
                     }}></div>
              </div>

              {/* Floating badge */}
              <div className={`absolute -top-4 -right-4 bg-gradient-to-br from-[#C9A86A] to-[#D4C5B3] text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
              }`} style={{ 
                transitionDelay: '600ms',
                animation: isVisible ? 'float 4s ease-in-out infinite 1s' : 'none'
              }}>
                Premium ✨
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {/* Decorative elements near title */}
            <div className="relative mb-8">
              <div className={`absolute -top-4 -left-4 w-3 h-3 bg-[#C9A86A] rounded-full transition-all duration-1000 ${
                isVisible ? 'opacity-60' : 'opacity-0'
              }`} style={{ animation: isVisible ? 'float 3s ease-in-out infinite' : 'none' }}></div>
              
              <h2 className={`text-4xl md:text-5xl font-serif mb-4 text-[#5A4A3A] transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'
              }`}>
                Why you should <span className="text-transparent bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] bg-clip-text">choose us</span>
              </h2>
              
              <p className={`text-gray-600 mb-3 text-base leading-relaxed transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}>
                Creating quality urban lifestyles, building stronger communities
              </p>

              {/* Animated divider */}
              <div className={`h-1 bg-gradient-to-r from-[#C9A86A] to-transparent transition-all duration-1000 delay-500 ${
                isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </div>

            {/* Benefits Grid with enhanced cards */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const isHovered = hoveredBenefit === index;
                
                return (
                  <div 
                    key={index} 
                    className={`relative bg-white/50 backdrop-blur-sm p-5 rounded-2xl group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
                    
                    {/* Decorative corner */}
                    <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-100 transition-all duration-500 blur-xl`}></div>
                    
                    <div className="relative z-10 flex items-center gap-3">
                      {/* Icon with animation */}
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md group-hover:shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white transition-transform duration-300" />
                      </div>
                      
                      {/* Check icon */}
                      <div className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center transform transition-all duration-500 ${
                        isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}>
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      
                      {/* Benefit Text */}
                      <div className="flex-1">
                        <span className="font-semibold text-[#5A4A3A] text-base block group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" 
                              style={{ backgroundImage: isHovered ? `linear-gradient(to right, #C9A86A, #D4C5B3)` : 'none' }}>
                          {benefit.text}
                        </span>
                      </div>
                    </div>

                    {/* Animated bottom line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} transition-all duration-500 ${
                      isHovered ? 'w-full' : 'w-0'
                    } rounded-b-2xl`}></div>
                  </div>
                );
              })}
            </div>

            {/* Stats Section */}
            <div className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                { label: 'Projects', value: '250+' },
                { label: 'Happy Clients', value: '1000+' },
                { label: 'Awards', value: '15+' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/50 transition-all duration-300 hover:scale-105 group">
                  <div className="text-2xl font-bold text-[#C9A86A] mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA button with enhanced effects */}
            <button className={`relative px-8 py-3 bg-gradient-to-r from-[#7A6854] to-[#6B5945] text-white rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '900ms' }}>
              <span className="relative z-10">Learn More →</span>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B5945] to-[#5A4A3A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
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
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
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

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
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
          <p className="text-xl mb-8">Scroll down to see why choose us</p>
          <div className="animate-bounce text-4xl">↓</div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
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