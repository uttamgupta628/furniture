import React from "react";
import { Navbar, Footer } from "../components/layout";
import {
  HeroSection,
  SearchBar,
  HowItWorks,
  WhyChooseUs,
  FeaturedProperties,
  TestimonialsSection,
} from "../components/sections";
import { useMobileMenu } from "../hooks";
import { heroImages, properties, testimonials } from "../data";

export const Home: React.FC = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4EDE4] to-[#E8DCC8] overflow-x-hidden">
      {/* Navbar */}
      <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      {/* Hero */}
      <HeroSection images={heroImages} />
      
      {/* Search Bar (FLOATING under Hero) */}
      <div className="relative -mt-24 z-30 px-6">
        <div className="max-w-5xl mx-auto">
          <SearchBar
            location="India"
            propertyType="Duplex"
            maxPrice="$10,000"
          />
        </div>
      </div>
      
      {/* Sections with proper spacing */}
      <div className="mt-16">
        <HowItWorks />
      </div>
      
      <div className="mt-20">
        <WhyChooseUs />
      </div>
      
      <div className="mt-20">
        <FeaturedProperties properties={properties} />
      </div>
      
      <div className="mt-20">
        <TestimonialsSection testimonials={testimonials} />
      </div>
      
      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};