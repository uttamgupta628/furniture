import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

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

  const locations = ["India", "USA", "UK", "Canada", "Australia"];
  const propertyTypes = ["Duplex", "Apartment", "Villa", "House", "Condo"];
  const prices = ["$5,000", "$10,000", "$20,000", "$50,000", "$100,000"];

  return (
    <section className="relative px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#CEBFAC] rounded-2xl shadow-lg px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            
            {/* Location */}
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-white mb-2">
                Location
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm font-normal text-white border-none outline-none appearance-none cursor-pointer pr-6"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#C4B49C] text-white">
                      {loc}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
              </div>
            </div>

            {/* Property */}
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-white mb-2">
                Property
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-sm font-normal text-white border-none outline-none appearance-none cursor-pointer pr-6"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#C4B49C] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
              </div>
            </div>

            {/* Max Price */}
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-white mb-2">
                Max Price
              </label>
              <div className="relative">
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-transparent text-sm font-normal text-white border-none outline-none appearance-none cursor-pointer pr-6"
                >
                  {prices.map((price) => (
                    <option key={price} value={price} className="bg-[#C4B49C] text-white">
                      {price}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <button 
              onClick={() => {
                console.log("Searching:", { location, propertyType, maxPrice });
              }}
              className="w-full h-[48px] bg-[#76604B] text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#6B5945] transition-all duration-300 hover:scale-105"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};