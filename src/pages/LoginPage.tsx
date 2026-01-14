import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Home, Sparkles, Check, Phone } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isLogin && (!name || !phone)) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate phone number (basic validation)
    if (!isLogin && phone) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(phone)) {
        setError('Please enter a valid phone number');
        return;
      }
    }

    setError('');
    setIsSubmitting(true);

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const apiUrl = 'https://realstateasr1.onrender.com'; 

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          isLogin 
            ? { email, password }
            : { name, email, phone, password }
        ),
      });

      const data = await response.json();
console.log('Response:', data); 
      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Store token in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Call login from AuthContext if needed
      if (login) {
        await login(email, password);
      }
      
      navigate('/home');
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE5D8] via-[#F6EFE6] to-[#E8DFD5] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A86A] rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#BFB0A0] rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4C5B3] rounded-full opacity-15 blur-3xl animate-pulse"></div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#C9A86A] rounded-full opacity-40 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`
          }}
        />
      ))}

      {/* Main Container */}
      <div className={`relative w-full max-w-5xl grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        
        {/* Left Side - Branding */}
        <div className="relative bg-gradient-to-br from-[#7A6854] to-[#6B5945] p-12 flex flex-col justify-between text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-spin-slow-reverse"></div>
          </div>

          <div className="relative z-10">
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl">
                <Home className="w-8 h-8 text-[#7A6854]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ASR Tech</h1>
                <p className="text-sm text-white/80">Real Estate Solutions</p>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Find Your Dream Home Today
              </h2>
              <p className="text-white/90 text-lg">
                Join thousands of happy homeowners who found their perfect property with us.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Access to 5000+ Premium Properties',
                  'Expert Real Estate Consultants',
                  'Secure & Trusted Platform',
                  'Exclusive Property Deals'
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C9A86A] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative z-10 transition-all duration-700 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ users worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 flex flex-col justify-center relative bg-gradient-to-br from-white to-gray-50 overflow-y-auto max-h-screen">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C9A86A]/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#D4C5B3]/20 to-transparent rounded-tr-full"></div>

          <div className="relative z-10">
            {/* Toggle Buttons */}
            <div className={`flex gap-2 mb-8 bg-gray-100 p-1.5 rounded-xl transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                }}
                className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isLogin
                    ? 'bg-gradient-to-r from-[#7A6854] to-[#6B5945] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                }}
                className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  !isLogin
                    ? 'bg-gradient-to-r from-[#7A6854] to-[#6B5945] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className={`mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h3>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Enter your credentials to access your account' 
                  : 'Sign up to start your property journey'}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-2" onKeyPress={handleKeyPress}>
              {!isLogin && (
                <>
                  <div className={`transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`} style={{ transitionDelay: '300ms' }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className={`relative group transition-all duration-300 ${
                      focusedField === 'name' ? 'scale-[1.02]' : ''
                    }`}>
                      <div className={`absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] rounded-xl opacity-0 blur transition-opacity duration-300 ${
                        focusedField === 'name' ? 'opacity-20' : 'group-hover:opacity-10'
                      }`}></div>
                      <div className={`relative flex items-center bg-white border-2 rounded-xl transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-[#C9A86A] shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <User className={`ml-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === 'name' ? 'text-[#C9A86A]' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-transparent outline-none text-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`} style={{ transitionDelay: '350ms' }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className={`relative group transition-all duration-300 ${
                      focusedField === 'phone' ? 'scale-[1.02]' : ''
                    }`}>
                      <div className={`absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] rounded-xl opacity-0 blur transition-opacity duration-300 ${
                        focusedField === 'phone' ? 'opacity-20' : 'group-hover:opacity-10'
                      }`}></div>
                      <div className={`relative flex items-center bg-white border-2 rounded-xl transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-[#C9A86A] shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <Phone className={`ml-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === 'phone' ? 'text-[#C9A86A]' : 'text-gray-400'
                        }`} />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-transparent outline-none text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className={`transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '400ms' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className={`relative group transition-all duration-300 ${
                  focusedField === 'email' ? 'scale-[1.02]' : ''
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] rounded-xl opacity-0 blur transition-opacity duration-300 ${
                    focusedField === 'email' ? 'opacity-20' : 'group-hover:opacity-10'
                  }`}></div>
                  <div className={`relative flex items-center bg-white border-2 rounded-xl transition-all duration-300 ${
                    focusedField === 'email' 
                      ? 'border-[#C9A86A] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <Mail className={`ml-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-[#C9A86A]' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '500ms' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className={`relative group transition-all duration-300 ${
                  focusedField === 'password' ? 'scale-[1.02]' : ''
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#D4C5B3] rounded-xl opacity-0 blur transition-opacity duration-300 ${
                    focusedField === 'password' ? 'opacity-20' : 'group-hover:opacity-10'
                  }`}></div>
                  <div className={`relative flex items-center bg-white border-2 rounded-xl transition-all duration-300 ${
                    focusedField === 'password' 
                      ? 'border-[#C9A86A] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <Lock className={`ml-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'password' ? 'text-[#C9A86A]' : 'text-gray-400'
                    }`} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-transparent outline-none text-gray-900"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="mr-4 text-gray-400 hover:text-[#C9A86A] transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {isLogin && (
                <div className={`flex items-center justify-between transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`} style={{ transitionDelay: '600ms' }}>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-[#7A6854] rounded" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      Remember me
                    </span>
                  </label>
                  <a href="#" className="text-sm text-[#7A6854] hover:text-[#C9A86A] font-semibold transition-colors duration-300">
                    Forgot Password?
                  </a>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#7A6854] to-[#6B5945] text-white py-4 rounded-xl font-bold text-lg hover:from-[#6B5945] hover:to-[#5A4A3A] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B5945] to-[#5A4A3A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <div className={`relative transition-all duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className={`grid grid-cols-2 gap-4 transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '900ms' }}>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-[#C9A86A] hover:bg-gray-50 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-[#C9A86A] hover:bg-gray-50 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};