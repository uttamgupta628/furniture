import React from 'react';
import type { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-[#BFB0A0] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-4">
      {/* Image Container with Decorative Circle */}
      <div className="relative mb-6">
        {/* Decorative Circle - Top Right */}
        <div className="absolute -top-2 -right-2 w-24 h-24 bg-[#D4C5B3] rounded-full z-0"></div>
        
        {/* Property Image */}
        <img 
          src={property.image} 
          alt={property.name}
          className="relative z-10 w-full h-56 object-cover shadow-md"
          style={{
            borderTopRightRadius: '40px',
            borderBottomLeftRadius: '40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-4">
          {/* Left Side - Name and Location */}
          <div>
            <h3 className="font-semibold text-xl text-white mb-1">
              {property.name}
            </h3>
            <p className="text-sm text-black/90">
              {property.location}
            </p>
          </div>

          {/* Right Side - Type and Price */}
          <div className="text-right">
            <p className="text-sm text-white/90 mb-1">
              {property.type}
            </p>
            <p className="font-semibold text-lg text-black">
              {property.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};