import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  // Mobile submenu states
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileQuickLinksOpen, setIsMobileQuickLinksOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);

    // Also close mobile submenus when changing route
    setIsMobileServicesOpen(false);
    setIsMobileQuickLinksOpen(false);
    setIsMobileContactOpen(false);
  }, [location.pathname]);

  // Split services into 2 categories
  const cosmeticServices = [
    { name: "Full Arch Implants", path: "/full-arch-implants" },
    { name: "Composite Bonding", path: "/composite-bonding" },
    { name: "Invisalign Braces", path: "/invisalign-braces" },
    { name: "Teeth Whitening", path: "/teeth-whitening" },
    { name: "Veneers", path: "/veneers" },
    { name: "Dental Implants", path: "/dental-implants" },
    { name: "Dentures", path: "/dentures" },
    { name: "White Fillings", path: "/white-fillings" },
  ];

  const generalServices = [
    { name: "Dental Hygiene", path: "/dental-hygiene" },
    { name: "Fillings", path: "/fillings" },
    { name: "Children's Dentistry", path: "/childrens-dentistry" },
    { name: "Nervous Patients", path: "/nervous-patients" },
    { name: "Restorative Treatment", path: "/restorative-treatment" },
    { name: "Endodontic Treatment", path: "/endodontic-treatment" },
    { name: "Crowns & Bridges", path: "/crowns-bridges" },
    { name: "Sedation", path: "/sedation" },
  ];

  const quickLinks = [
    { name: "Finance Options", path: "/finance-options" },
    { name: "Pricing", path: "/pricing" },
    { name: "Team", path: "/team" },
    { name: "Kids Zone", path: "/kids-zone" },
    { name: "FAQs", path: "/faq" },
    { name: "New Patients", path: "/new-patients" },
    { name: "Feedback & Complaints", path: "/feedback" },
  ];

  const contact = [
    { name: "For Dentists", path: "/for-dentists" },
    { name: "For Patients", path: "/contact" },
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
              <Link
                to="/"
                className="text-gray-800 hover:text-[#63316b] font-semibold transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-800 hover:text-[#63316b] font-semibold transition-colors"
              >
                About
              </Link>

              {/* Services Dropdown - with 2 sections inside */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-800 hover:text-[#63316b] font-semibold transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-[500px] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl transition-all duration-200 z-50 grid grid-cols-2 gap-4 p-4 ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {/* Cosmetic Services */}
                  <div>
                    <h4 className="px-2 py-1 text-xs font-bold text-gray-500 uppercase">
                      Cosmetic Services
                    </h4>
                    {cosmeticServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-3 py-2 text-sm text-gray-800 hover:bg-[#63316b]/10 hover:text-[#63316b] rounded-lg font-medium"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>

                  {/* General Services */}
                  <div>
                    <h4 className="px-2 py-1 text-xs font-bold text-gray-500 uppercase">
                      General Services
                    </h4>
                    {generalServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-3 py-2 text-sm text-gray-800 hover:bg-[#63316b]/10 hover:text-[#63316b] rounded-lg font-medium"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsQuickLinksOpen(true)}
                onMouseLeave={() => setIsQuickLinksOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-800 hover:text-[#63316b] font-semibold transition-colors">
                  <span>Quick Links</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 border rounded-2xl shadow-2xl transition-all duration-200 ${
                    isQuickLinksOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="py-2 max-h-80 overflow-y-auto scrollbar-thin">
                    {quickLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.path}
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-[#63316b]/10 hover:text-[#63316b] rounded-xl font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsContactOpen(true)}
                onMouseLeave={() => setIsContactOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-800 hover:text-[#63316b] font-semibold transition-colors">
                  <span>Contact Us</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 border rounded-2xl shadow-2xl transition-all duration-200 ${
                    isContactOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="py-2">
                    {contact.map((c, idx) => (
                      <Link
                        key={idx}
                        to={c.path}
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-[#63316b]/10 hover:text-[#63316b] rounded-xl font-medium"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                <Phone className="w-4 h-4" />
                <span>024 76 31 2256</span>
              </div>
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all shadow-lg"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/20 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-800" />
              ) : (
                <Menu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 mt-4 pt-4 pb-6">
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-gray-800 hover:text-[#63316b] font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="block text-gray-800 hover:text-[#63316b] font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Services - toggle */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex justify-between items-center text-gray-900 font-bold py-2 border-b border-gray-200"
                  >
                    Services
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileServicesOpen && (
                    <>
                      <div>
                        <h4 className="pl-4 py-1 text-xs font-bold text-gray-500 uppercase">
                          Cosmetic Services
                        </h4>
                        {cosmeticServices.map((service, i) => (
                          <Link
                            key={i}
                            to={service.path}
                            className="block text-gray-800 hover:text-[#63316b] font-medium py-2 pl-8"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h4 className="pl-4 py-1 text-xs font-bold text-gray-500 uppercase">
                          General Services
                        </h4>
                        {generalServices.map((service, i) => (
                          <Link
                            key={i}
                            to={service.path}
                            className="block text-gray-800 hover:text-[#63316b] font-medium py-2 pl-8"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Quick Links - toggle */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileQuickLinksOpen(!isMobileQuickLinksOpen)}
                    className="w-full flex justify-between items-center text-gray-900 font-bold py-2 border-b border-gray-200"
                  >
                    Quick Links
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isMobileQuickLinksOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileQuickLinksOpen && (
                    <>
                      {quickLinks.map((link, i) => (
                        <Link
                          key={i}
                          to={link.path}
                          className="block text-gray-800 hover:text-[#63316b] font-medium py-2 pl-4"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </>
                  )}
                </div>

                {/* Mobile Contact Us - toggle */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileContactOpen(!isMobileContactOpen)}
                    className="w-full flex justify-between items-center text-gray-900 font-bold py-2 border-b border-gray-200"
                  >
                    Contact Us
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isMobileContactOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileContactOpen && (
                    <>
                      {contact.map((c, i) => (
                        <Link
                          key={i}
                          to={c.path}
                          className="block text-gray-800 hover:text-[#63316b] font-medium py-2 pl-4"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium mb-4">
                    <Phone className="w-4 h-4" />
                    <span>024 76 31 2256</span>
                  </div>
                  <a
                    href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#63316b] text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg"
                  >
                    Book Appointment
                  </a>
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
