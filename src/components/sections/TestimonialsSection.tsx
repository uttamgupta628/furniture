import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

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

// TestimonialCard Component with animations
export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top Section */}
      <div className="bg-[#D6C7B2] px-6 py-6 flex items-center gap-6 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A86A]/0 via-[#C9A86A]/20 to-[#C9A86A]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <div className={`relative transition-all duration-500 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-xl object-cover group-hover:scale-110 transition-transform duration-500 shadow-lg"
            onLoad={() => setImageLoaded(true)}
          />
          {/* Decorative corner */}
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex flex-col relative z-10">
          <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-[#5A4A3A] transition-colors duration-300">
            {testimonial.name}
          </h4>
          <p className="text-lg text-white leading-tight">
            {testimonial.role}
          </p>
          <p className="text-lg text-white">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Stars - with staggered animation */}
      <div className="flex justify-center -mt-6">
        <div className="bg-white px-6 py-3 rounded-xl shadow flex gap-2 group-hover:shadow-lg transition-shadow duration-300">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 fill-[#F4C430] text-[#F4C430] transition-all duration-300 group-hover:scale-125 ${
                isVisible ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`}
              style={{ 
                transitionDelay: `${index * 100 + 300 + i * 50}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="px-8 py-10 text-center">
        <p className="text-lg text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
          {testimonial.text}
        </p>
      </div>

      {/* Bottom decorative line that appears on hover */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

// TestimonialsSection Component
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDot, setActiveDot] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="bg-[#F6EFE6] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          <div className={`text-center md:text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl font-serif text-[#6B5843] mb-2">
              Testimonials
            </h2>
            <p className="text-gray-700">
              This is what our client are saying
            </p>
          </div>

          <button className={`bg-[#8B7355] text-white px-8 py-3 rounded-lg shadow hover:bg-[#7A6347] transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <span className="relative z-10">View more</span>
            <div className="absolute inset-0 bg-[#7A6347] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Decorative line */}
        <div className="flex justify-center mb-12">
          <div className={`h-1 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent transition-all duration-1000 delay-300 ${
            isVisible ? 'w-64 opacity-100' : 'w-0 opacity-0'
          }`}></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Pagination dots with animation */}
        <div className={`flex justify-center gap-3 mt-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-1 rounded transition-all duration-500 cursor-pointer hover:bg-[#8B7355] ${
                dot === activeDot 
                  ? 'w-10 bg-[#8B7355]' 
                  : 'w-10 bg-[#E2D5C3] hover:w-12'
              }`}
              onClick={() => setActiveDot(dot)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};