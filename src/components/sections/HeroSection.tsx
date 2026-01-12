import React from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useCarousel } from "../../hooks/useCarousel";
import bg from "../../assets/herobg.png";
import logo from '../../assets/logo.png';

interface HeroSectionProps {
  images: string[];
}

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logo}
            alt="ASR Tech Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-semibold text-gray-800">ASR Tech</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#" className="bg-[#7A6854] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#6B5945] transition">
            Home
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            About
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            Listing
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            Services
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            Blogs
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
          <a href="#" className="bg-[#7A6854] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#6B5945] transition">
            Home
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            About
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            Listing
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            Services
          </a>
          <a href="#" className="text-gray-700 px-4 py-2 text-sm hover:text-gray-900 transition">
            Blogs
          </a>
        </div>
      )}
    </nav>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ images }) => {
  const { currentSlide, next, prev, goTo } = useCarousel(images.length);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 mb-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "right -50px center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SECTION */}
        <div className="relative ml-6 sm:ml-12 md:ml-16 lg:ml-20">
          <p className="text-sm text-gray-700 mb-3 tracking-widest uppercase font-medium">
            ASR Tech
          </p>

         <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-serif text-white leading-tight tracking-wide mb-12 max-w-2xl animate-slide-in-left"
            style={{ fontFamily: "Georgia, serif", textTransform: "uppercase" }}
          >
            Find a perfect
            <br />
            home you love...!
          </h1>

          <style>{`
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-100px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            .animate-slide-in-left {
              animation: slideInLeft 0.8s ease-out;
            }
          `}</style>


          {/* CAROUSEL */}
          <div className="relative w-full max-w-xl">
            <div className="overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] ">
              <img
                src={images[currentSlide]}
                alt="Luxury Home"
                className="w-full h-[300px] object-cover rounded-[26px] transition-all duration-500"
              />
            </div>

            {/* PREV */}
            <button
              onClick={prev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 
                         bg-white w-11 h-11 rounded-full flex items-center 
                         justify-center shadow-lg hover:scale-110 transition"
            >
              <ChevronLeft size={22} className="text-gray-700" />
            </button>

            {/* NEXT */}
            <button
              onClick={next}
              className="absolute -right-5 top-1/2 -translate-y-1/2 
                         bg-white w-11 h-11 rounded-full flex items-center 
                         justify-center shadow-lg hover:scale-110 transition"
            >
              <ChevronRight size={22} className="text-gray-700" />
            </button>

            {/* INDICATORS */}
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-full bg-[#c9a86a]"
                      : "w-8 bg-gray-400/50 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex flex-col items-center justify-center text-center min-h-[500px]">
          
          {/* DECORATIVE CIRCLES */}
          <div className="absolute top-12 right-12 w-32 h-32 rounded-full border-2 border-[#d4c5b3] opacity-40" />
          <div className="absolute bottom-32 left-8 w-40 h-40 rounded-full bg-[#e8dfd5] opacity-30" />

          {/* CONTENT */}
          <div className="relative z-10">
            <p className="text-base text-gray-900 mb-6 font-normal">
              Join us for your perfect <span className="font-semibold">Home</span>...
            </p>
            <button
              className="bg-white text-gray-900 px-12 py-3 rounded-full 
                         font-medium shadow-md
                         hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Join Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};