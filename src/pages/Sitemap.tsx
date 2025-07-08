
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingBubble from '../components/FloatingBubble';

const Sitemap = () => {
  useEffect(() => {
    document.title = "Sitemap - Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Full Arch Implants', path: '/full-arch-implants' },
    { name: 'Composite Bonding', path: '/composite-bonding' },
    { name: 'Invisalign Braces', path: '/invisalign-braces' },
    { name: 'Teeth Whitening', path: '/teeth-whitening' },
    { name: 'Veneers', path: '/veneers' },
    { name: 'Dental Implants', path: '/dental-implants' },
    { name: 'Dentures', path: '/dentures' },
    { name: 'White Fillings', path: '/white-fillings' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-[#63316b]/20"
              >
                <span className="text-[#63316b] font-medium hover:text-[#63316b]/80">
                  {page.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <FloatingBubble />
    </div>
  );
};

export default Sitemap;
