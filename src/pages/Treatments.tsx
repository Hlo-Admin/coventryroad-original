
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Treatments = () => {
  useEffect(() => {
    document.title = "Treatments - Coventry Road Dental Care | All Dental Services";
  }, []);

  const cosmeticServices = [
     {
      title: "Full Arch Implants",
      image: "/home/services/Full Arch Implants.jpg",
      path: "/full-arch-implants",
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Coventry Road Dental</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to Coventry Road Dental Care
            </p>
          </div>
        </section>

        {/* Cosmetic Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Cosmetic Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cosmeticServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-fit mx-auto"
                >
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#63316b] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-600">
              Welcome to Coventry Road Dental Care
            </p>
          </div>
        </section>

        {/* General Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              General Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-fit mx-auto"
                >
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#63316b] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Treatments;
