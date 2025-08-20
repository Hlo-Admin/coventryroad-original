import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const treatments = [
    { name: "Full Arch Implants", path: "/full-arch-implants" },
    { name: "Composite Bonding", path: "/composite-bonding" },
    { name: "Invisalign Braces", path: "/invisalign-braces" },
    { name: "Teeth Whitening", path: "/teeth-whitening" },
    { name: "Veneers", path: "/veneers" },
    { name: "Dental Implants", path: "/dental-implants" },
    { name: "Dentures", path: "/dentures" },
    { name: "White Fillings", path: "/white-fillings" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Finance Options", path: "/finance-options" },
    { name: "Pricing", path: "/pricing" },
    { name: "Team", path: "/team" },
    { name: "Kids Zone", path: "/kids-zone" },
    { name: "Feedback & Complaints", path: "/feedback" },
  ];

  return (
    <footer className="relative bg-[#63316b] text-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/6835c5cd-d5a1-4f43-bdd2-b4f8e4281f53.png"
                alt="Coventry Road Dentalcare"
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-white/80 leading-relaxed">
              For appointments please call us on 024 76 31 2256
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/coventryroaddentalcare"
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/coventryroaddentalcare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">
              Quick Links
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-white/80 hover:text-white transition-colours duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Treatments */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">
              Cosmetic Excellence
            </h4>
            <div className="space-y-4">
              {treatments.map((treatment, index) => (
                <Link
                  key={index}
                  to={treatment.path}
                  className="block text-white/80 hover:text-white transition-colours duration-300 hover:translate-x-2 transform"
                >
                  {treatment.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">
              Contact Information
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-medium text-white mb-1">
                    Visit Our Clinic
                  </p>
                  <p className="text-sm leading-relaxed">
                    94 Coventry Rd
                    <br />
                    Bedworth, Coventry
                    <br />
                    CV12 8NW
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-medium text-white mb-1">Call Us Today</p>
                  <p className="text-sm">024 76 31 2256</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <p className="text-sm">reception@deoldental.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/20">
              <h5 className="font-medium text-white mb-3">Opening Hours</h5>
              <div className="text-sm text-white/80 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>© 2025 Coventry Road Dentalcare. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Developer Logo */}
              <span className="text-white/80 text-sm">Developed by</span>
              <a
                href="https://v5digital.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/v5.png"
                  alt="Developer Logo"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            <div className="flex flex-wrap justify-centre lg:justify-end space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-white/80 hover:text-white transition-colours duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-white/80 hover:text-white transition-colours duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-white/80 hover:text-white transition-colours duration-300"
              >
                Cookie Policy
              </Link>
              <Link
                to="https://www.gdc-uk.org/"
                target="_blank"
                className="text-white/80 hover:text-white transition-colours duration-300"
              >
                GD
              </Link>
              <Link
                to="/sitemap"
                className="text-white/80 hover:text-white transition-colours duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
