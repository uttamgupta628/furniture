import React, { useState } from "react";
import { Menu, X, LogOut, User, ChevronDown } from "lucide-react";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  // const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with animation */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* Rotating ring behind logo */}
            <div className="absolute inset-0 w-12 h-12 border-2 border-[#7A6854]/30 rounded-lg -rotate-6 group-hover:rotate-12 transition-all duration-500 group-hover:scale-110"></div>
            
            {/* Logo container */}
            <div className="relative w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 overflow-hidden">
              <img 
                src={logo}
                alt="ASR Tech Logo" 
                className="w-10 h-10 object-contain relative z-10"
              />
            </div>
          </div>
          
          <div className="relative">
            <span className="text-lg font-bold text-gray-800 group-hover:text-[#7A6854] transition-all duration-300 relative">
              ASR Tech
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7A6854] to-[#C9A86A] group-hover:w-full transition-all duration-500"></span>
            </span>
            <div className="text-[10px] text-gray-500 group-hover:text-[#C9A86A] transition-colors duration-300">Real Estate</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="bg-gradient-to-r from-[#7A6854] to-[#6B5945] text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-[#6B5945] hover:to-[#5A4A3A] hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B5945] to-[#5A4A3A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
          
          {["About", "Listing", "Services", "Blogs"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-700 px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-[#7A6854] group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7A6854] to-[#C9A86A] group-hover:w-3/4 transition-all duration-300"></span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A6854]/5 to-[#C9A86A]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          ))}

          {/* User Profile Dropdown */}
          <div className="relative ml-2">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-lg group border border-gray-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#7A6854] to-[#6B5945] rounded-full flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {user?.name || 'User'}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                showUserMenu ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-dropdown">
                {/* User Info */}
                <div className="p-4 bg-gradient-to-br from-[#7A6854] to-[#6B5945] text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{user?.name || 'User'}</p>
                      <p className="text-xs text-white/80">{user?.email || 'user@example.com'}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <User className="w-5 h-5 text-gray-500 group-hover:text-[#7A6854] transition-colors duration-300" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">My Profile</span>
                  </a>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all duration-300 group"
                  >
                    <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors duration-300" />
                    <span className="text-sm text-gray-700 group-hover:text-red-600 transition-colors duration-300 font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gradient-to-br hover:from-[#7A6854]/10 hover:to-[#C9A86A]/10 rounded-lg transition-all duration-300 hover:scale-110 relative group" 
          onClick={toggleMobileMenu}
        >
          <div className="absolute inset-0 bg-[#7A6854]/20 rounded-lg scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          {mobileMenuOpen ? (
            <X className="transition-transform duration-300 rotate-90 relative z-10" />
          ) : (
            <Menu className="transition-transform duration-300 relative z-10 group-hover:rotate-180" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 animate-slide-down">
          <div className="p-4 flex flex-col gap-2">
            {/* User Info Mobile */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#7A6854] to-[#6B5945] rounded-xl mb-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="text-white">
                <p className="font-semibold text-sm">{user?.name || 'User'}</p>
                <p className="text-xs text-white/80">{user?.email || 'user@example.com'}</p>
              </div>
            </div>

            <a
              href="#"
              className="bg-gradient-to-r from-[#7A6854] to-[#6B5945] text-white px-5 py-3 rounded-xl text-sm font-medium hover:from-[#6B5945] hover:to-[#5A4A3A] transition-all duration-300 hover:translate-x-2 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B5945] to-[#5A4A3A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            
            {["About", "Listing", "Services", "Blogs"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-700 px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A6854] scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {item}
                </span>
              </a>
            ))}

            <div className="border-t border-gray-200 my-2"></div>

            {/* Mobile Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-5 py-3 rounded-xl text-sm font-medium hover:bg-red-100 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
            >
              <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Logout</span>
              <div className="absolute inset-0 bg-red-100 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
        .animate-dropdown {
          animation: dropdown 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};