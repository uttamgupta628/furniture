import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

// Types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isVisible: boolean;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// TestimonialCard Component with enhanced animations
export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-700 group hover:-translate-y-4 hover:rotate-1 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient glow background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#C9A86A] via-[#D4C5B3] to-[#BFB0A0] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 -z-10 ${
        isHovered ? 'scale-110' : 'scale-95'
      }`}></div>

      {/* Decorative corner circles */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#C9A86A] to-[#D4C5B3] rounded-full opacity-20 transition-all duration-700 group-hover:scale-125 group-hover:rotate-90 ${
        isVisible ? 'scale-100' : 'scale-0'
      }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}></div>
      
      <div className={`absolute -bottom-3 -left-3 w-16 h-16 bg-[#BFB0A0] rounded-full opacity-30 transition-all duration-700 group-hover:scale-150 group-hover:-rotate-45 ${
        isVisible ? 'scale-100' : 'scale-0'
      }`} style={{ transitionDelay: `${index * 150 + 300}ms` }}></div>

      {/* Top Section with enhanced animations */}
      <div className="bg-gradient-to-br from-[#D6C7B2] to-[#C9A86A] px-6 py-6 flex items-center gap-6 relative overflow-hidden">
        {/* Multiple animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A86A]/0 via-white/10 to-[#C9A86A]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1500"></div>
        
        {/* Floating quote icon */}
        <div className={`absolute top-2 right-2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
        }`}>
          <Quote className="w-5 h-5 text-white" />
        </div>

        {/* Profile Image Container with enhanced effects */}
        <div className={`relative transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          {/* Animated ring */}
          <div className="absolute inset-0 border-2 border-white/50 rounded-xl animate-ping opacity-20 group-hover:animate-none" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-0 border-2 border-white/30 rounded-xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="relative w-24 h-24 rounded-xl object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg ring-2 ring-white/50"
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Shimmer effect on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
          
          {/* Decorative corners */}
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 group-hover:scale-125"></div>
        </div>

        {/* Name and Role with stagger animation */}
        <div className="flex flex-col relative z-10">
          <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
            {testimonial.name}
          </h4>
          <p className="text-lg text-white/90 leading-tight transition-all duration-300 delay-75 group-hover:text-white group-hover:translate-x-1">
            {testimonial.role}
          </p>
          <p className="text-lg text-white/80 transition-all duration-300 delay-100 group-hover:text-white/90 group-hover:translate-x-1">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Stars - with enhanced staggered animation */}
      <div className="flex justify-center -mt-6 relative z-20">
        <div className="bg-white px-6 py-3 rounded-xl shadow-lg flex gap-2 group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
          {/* Animated background for stars container */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/0 via-[#F4C430]/10 to-[#F4C430]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {[...Array(testimonial.rating)].map((_, i) => (
            <div key={i} className="relative">
              {/* Glow effect behind star */}
              <div className={`absolute inset-0 bg-[#F4C430] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-all duration-500 ${
                isVisible ? '' : 'scale-0'
              }`} style={{ transitionDelay: `${index * 150 + 400 + i * 50}ms` }}></div>
              
              <Star
                className={`relative w-5 h-5 fill-[#F4C430] text-[#F4C430] transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 ${
                  isVisible ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`}
                style={{ 
                  transitionDelay: `${index * 150 + 400 + i * 50}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text with enhanced styling */}
      <div className="px-8 py-10 text-center relative">
        {/* Decorative quote marks */}
        <div className={`absolute top-6 left-6 text-6xl text-[#C9A86A]/20 font-serif transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>"</div>
        <div className={`absolute bottom-6 right-6 text-6xl text-[#C9A86A]/20 font-serif rotate-180 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>"</div>
        
        <p className="relative text-lg text-gray-800 leading-relaxed group-hover:text-gray-900 transition-all duration-300 group-hover:scale-105">
          {testimonial.text}
        </p>
      </div>

      {/* Animated bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      
      {/* Additional decorative line with delay */}
      <div className="h-0.5 bg-gradient-to-r from-[#D4C5B3] via-[#C9A86A] to-[#D4C5B3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
    </div>
  );
};

// TestimonialsSection Component with enhanced animations
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDot, setActiveDot] = useState(1);
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

  // Auto-rotate dots for visual interest
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveDot((prev) => (prev % 4) + 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Mock data for demo
  const displayTestimonials = testimonials.length > 0 ? testimonials : [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
      text: "Amazing service! They helped us find the perfect home for our family. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Entrepreneur",
      company: "StartUp Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      text: "Professional and efficient. Made our property search so much easier than expected.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Designer",
      company: "Creative Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
      text: "Outstanding experience from start to finish. The team was incredibly supportive!",
      rating: 5
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Developer",
      company: "Dev Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      text: "Found my dream apartment in no time. Excellent service and great properties!",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="bg-[#F6EFE6] py-20 px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-[#C9A86A] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 10s ease-in-out infinite' : 'none' }}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 bg-[#BFB0A0] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 12s ease-in-out infinite 3s' : 'none' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-[#D4C5B3] rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
        }`} style={{ animation: isVisible ? 'float 15s ease-in-out infinite 5s' : 'none' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with enhanced animations */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6 relative">
          {/* Floating decorative elements */}
          <div className={`absolute -top-6 left-1/4 w-3 h-3 bg-[#C9A86A] rounded-full transition-all duration-1000 ${
            isVisible ? 'opacity-60' : 'opacity-0'
          }`} style={{ animation: isVisible ? 'float 4s ease-in-out infinite' : 'none' }}></div>
          <div className={`absolute -top-4 right-1/3 w-2 h-2 bg-[#BFB0A0] rounded-full transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-60' : 'opacity-0'
          }`} style={{ animation: isVisible ? 'float 5s ease-in-out infinite 1s' : 'none' }}></div>

          <div className={`text-center md:text-left transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
          }`}>
            <h2 className="text-4xl md:text-5xl font-serif text-[#6B5843] mb-2 relative inline-block">
              Testimonials
              <div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#C9A86A] to-transparent transition-all duration-1000 delay-200 ${
                isVisible ? 'w-32' : 'w-0'
              }`}></div>
            </h2>
            <p className="text-gray-700 mt-3">
              This is what our client are saying
            </p>
          </div>

          <button className={`bg-gradient-to-r from-[#8B7355] to-[#7A6347] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <span className="relative z-10">View more</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7A6347] to-[#6B5843] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10 inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>

        {/* Enhanced decorative line */}
        <div className="flex justify-center mb-12">
          <div className={`h-1 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent transition-all duration-1000 delay-300 ${
            isVisible ? 'w-64 opacity-100' : 'w-0 opacity-0'
          }`}>
            <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Enhanced pagination dots with animation */}
        <div className={`flex justify-center gap-3 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer hover:scale-110 relative overflow-hidden ${
                dot === activeDot 
                  ? 'w-12 bg-gradient-to-r from-[#8B7355] to-[#C9A86A]' 
                  : 'w-10 bg-[#E2D5C3] hover:bg-[#C9A86A]'
              }`}
              onClick={() => setActiveDot(dot)}
            >
              {/* Animated shine effect on active dot */}
              {dot === activeDot && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom floating decorative elements */}
        <div className="relative mt-16 h-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`absolute w-20 h-20 rounded-full bg-[#C9A86A] opacity-15 blur-2xl transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-15' : 'scale-0 opacity-0'
              }`} 
              style={{ 
                left: `${20 + i * 30}%`,
                transitionDelay: `${800 + i * 200}ms`,
                animation: isVisible ? `float ${6 + i}s ease-in-out infinite ${i}s` : 'none'
              }}
            />
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
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
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
          <p className="text-xl mb-8">Scroll down to see testimonials</p>
          <div className="animate-bounce text-4xl">↓</div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={[]} />
      
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