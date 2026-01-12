import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white">

      {/* Top Section */}
      <div className="bg-[#D6C7B2] px-6 py-6 flex items-center gap-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-xl object-cover"
        />

        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold text-gray-900">
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

      {/* Stars */}
      <div className="flex justify-center -mt-6">
        <div className="bg-white px-6 py-3 rounded-xl shadow flex gap-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-[#F4C430] text-[#F4C430]"
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="px-8 py-10 text-center">
        <p className="text-lg text-gray-800 leading-relaxed">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
};
