
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Full Arch Implants', path: '/full-arch-implants' },
    { name: 'Composite Bonding', path: '/composite-bonding' },
    { name: 'Invisalign Braces', path: '/invisalign-braces' },
    { name: 'Teeth Whitening', path: '/teeth-whitening' },
    { name: 'Veneers', path: '/veneers' },
    { name: 'Dental Implants', path: '/dental-implants' },
    { name: 'Dentures', path: '/dentures' },
    { name: 'White Fillings', path: '/white-fillings' },
    { name: 'Fillings', path: '/fillings' },
    { name: 'Night Guard', path: '/night-guard' },
    { name: 'Dental Hygiene', path: '/dental-hygiene' },
    { name: "Children's Dentistry", path: '/childrens-dentistry' },
    { name: 'Nervous Patients', path: '/nervous-patients' },
    { name: 'Restorative Treatment', path: '/restorative-treatment' },
    { name: 'Endodontic Treatment', path: '/endodontic-treatment' },
    { name: 'Crowns & Bridges', path: '/crowns-bridges' },
    { name: 'Sedation', path: '/sedation' }
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <nav className="backdrop-blur-xl bg-white/95 border border-white/40 rounded-3xl px-6 lg:px-8 shadow-2xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/a149de9b-ffc7-4ccb-89c6-45a712d8505a.png" 
                  alt="Coventry Road Dentalcare" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-[#63316b] font-semibold transition-colors">Home</Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-800 hover:text-[#63316b] font-semibold transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Treatments</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl transition-all duration-200 z-50 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <Link
                      to="/treatments"
                      className="block px-4 py-3 text-sm text-gray-800 hover:bg-[#63316b]/10 hover:text-[#63316b] transition-colors rounded-xl mx-2 font-medium border-b border-gray-200 mb-2"
                    >
                      All Treatments
                    </Link>
                    <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-3 text-sm text-gray-800 hover:bg-[#63316b]/10 hover:text-[#63316b] transition-colors rounded-xl mx-2 font-medium"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="text-gray-800 hover:text-[#63316b] font-semibold transition-colors">About</Link>
              <Link to="/#contact" className="text-gray-800 hover:text-[#63316b] font-semibold transition-colors">Contact</Link>
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                <Phone className="w-4 h-4" />
                <span>024 76 31 2256</span>
              </div>
              <button className="bg-[#63316b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 mt-4 pt-4 pb-6">
              <div className="space-y-4">
                <Link to="/" className="block text-gray-800 hover:text-[#63316b] font-semibold py-2">Home</Link>
                
                {/* Mobile Services */}
                <div className="space-y-2">
                  <div className="text-gray-900 font-bold py-2 border-b border-gray-200">Treatments</div>
                  <Link to="/treatments" className="block text-gray-800 hover:text-[#63316b] font-medium py-2 pl-4 border-b border-gray-100">
                    All Treatments
                  </Link>
                  <div className="max-h-60 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-800 hover:text-[#63316b] font-medium py-2 pl-4"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link to="/about" className="block text-gray-800 hover:text-[#63316b] font-semibold py-2">About</Link>
                <Link to="/#contact" className="block text-gray-800 hover:text-[#63316b] font-semibold py-2">Contact</Link>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium mb-4">
                    <Phone className="w-4 h-4" />
                    <span>024 76 31 2256</span>
                  </div>
                  <button className="w-full bg-[#63316b] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
