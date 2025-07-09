
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
      image: "/lovable-uploads/b3719a1c-237e-40d0-9e7a-b224c1dcd1d6.png",
      path: "/full-arch-implants"
    },
    {
      title: "Composite Bonding", 
      image: "/lovable-uploads/9ca20df0-a984-4c24-bec5-dfa24a26b9ff.png",
      path: "/composite-bonding"
    },
    {
      title: "Invisalign Braces",
      image: "/lovable-uploads/299453f5-63b1-4193-8164-955b3504b4b8.png", 
      path: "/invisalign-braces"
    },
    {
      title: "Teeth Whitening",
      image: "/lovable-uploads/6835c5cd-d5a1-4f43-bdd2-b4f8e4281f53.png",
      path: "/teeth-whitening"
    },
    {
      title: "Veneers",
      image: "/lovable-uploads/b36a9abe-94d8-4d84-bfc4-8cfa96f50a54.png",
      path: "/veneers"
    },
    {
      title: "Dental Implants", 
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/dental-implants"
    },
    {
      title: "Dentures",
      image: "/lovable-uploads/f5f56c66-3af5-4799-8c25-992c6ef7417c.png",
      path: "/dentures"
    },
    {
      title: "White Fillings",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/white-fillings"
    },
    {
      title: "Night Guard",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/night-guard"
    }
  ];

  const generalServices = [
    {
      title: "Dental Hygiene",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/dental-hygiene"
    },
    {
      title: "Fillings",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/fillings"
    },
    {
      title: "Children's Dentistry",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/childrens-dentistry"
    },
    {
      title: "Nervous Patients",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/nervous-patients"
    },
    {
      title: "Restorative Treatment",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/restorative-treatment"
    },
    {
      title: "Endodontic Treatment",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/endodontic-treatment"
    },
    {
      title: "Crowns & Bridges",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/crowns-bridges"
    },
    {
      title: "Sedation",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
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
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
