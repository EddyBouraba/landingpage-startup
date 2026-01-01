import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-gradient from-indigo-600 via-purple-600 to-pink-600">
                StartupLab
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Features
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Pricing
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Features
            </a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Benefits
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Testimonials
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Pricing
            </a>
            <button className="w-full mt-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
