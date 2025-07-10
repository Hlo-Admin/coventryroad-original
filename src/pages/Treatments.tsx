import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Treatments = () => {
  useEffect(() => {
    document.title = "Services - Coventry Road Dental Care | Premium Dental Services";
  }, []);

  const cosmeticServices = [
    {
      title: "Full Arch Implants",
      image: "/home/services/Full Arch Implants.jpg",
      path: "/full-arch-implants",
      featured: true
    },
    {
      title: "Composite Bonding", 
      image: "/home/services/Composite Bonding.jpg",
      path: "/composite-bonding",
    },
    {
      title: "Invisalign Braces",
      image: "/home/services/Invisalign Braces.webp",
      path: "/invisalign-braces",
      featured: true
    },
    {
      title: "Teeth Whitening",
      image: "/home/services/Teeth Whitening.jpg",
      path: "/teeth-whitening",
    },
    {
      title: "Veneers",
      image: "/home/services/Veneers.jpg", 
      path: "/veneers",
      featured: true
    },
    {
      title: "Dental Implants",
      image: "/home/services/Dental Implants.jpg",
      path: "/dental-implants",
    },
    {
      title: "Dentures",
      image: "/home/services/Dentures.jpg",
      path: "/dentures",
    },
    {
      title: "White Fillings",
      image: "/home/services/White Fillings.jpg",
      path: "/white-fillings",
    },
    {
      title: "Night Guard",
      image: "/home/services/night-guard.png",
      path: "/night-guard"
    },
    {
      title: "Sleepwell Mas",
      image: "/home/services/sleepwell.jpg",
      path: "/sleepwell-mas"
    }
  ];

  const generalServices = [
    {
      title: "Dental Hygiene",
      image: "/home/services/dental-hygiene.jpg",
      path: "/dental-hygiene"
    },
    {
      title: "Fillings",
      image: "/home/services/fillings.jpg",
      path: "/fillings"
    },
    {
      title: "Children's Dentistry",
      image: "/home/services/children-dentistry.jpg",
      path: "/childrens-dentistry"
    },
    {
      title: "Nervous Patients",
      image: "/home/services/nervous-paitents.jpeg",
      path: "/nervous-patients"
    },
    {
      title: "Restorative Treatment",
      image: "/home/services/restorative-treatment.jpg",
      path: "/restorative-treatment"
    },
    {
      title: "Endodontic Treatment",
      image: "/home/services/endodontic-treatment.jpeg",
      path: "/endodontic-treatment"
    },
    {
      title: "Crowns & Bridges",
      image: "/home/services/crowns-bridges.jpg",
      path: "/crowns-bridges"
    },
    {
      title: "Sedation",
      image: "/home/services/sedation.jpg",
      path: "/sedation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#63316b]/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#63316b]/10 to-purple-100/50 text-[#63316b] px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-[#63316b]/20">
                <Sparkles className="w-4 h-4" />
                <span>Premium Dental Care</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#63316b] to-purple-600 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience exceptional dental care with our comprehensive range of premium treatments, 
                delivered by expert professionals in a state-of-the-art facility.
              </p>
            </div>
          </div>
        </section>

        {/* Cosmetic Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cosmetic Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your smile with our advanced cosmetic treatments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cosmeticServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                    service.featured ? 'lg:col-span-1 ring-2 ring-[#63316b]/20' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#63316b] to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#63316b] transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-[#63316b] font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* General Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Essential Care
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive dental treatments for optimal oral health
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-md border border-white/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#63316b] transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-[#63316b] font-medium text-sm">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#63316b] to-purple-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Book your consultation today and discover how our premium dental services 
              can give you the confident smile you deserve.
            </p>
            <a
              href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#63316b] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book Your Appointment
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Treatments;
