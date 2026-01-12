import React from "react";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo.png'

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
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
    </nav>
  );
};