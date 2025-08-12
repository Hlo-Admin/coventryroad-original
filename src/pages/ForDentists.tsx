import { useState } from "react";
import {
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Microscope,
  Printer,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";

const ForDentists = () => {
  useEffect(() => {
    document.title =
      "For Dentists - Referral Services | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Implants",
      description: "Advanced dental implant solutions",
      image: "dentist/1.jpg",
      path: "/for-dentists/implants",
    },
    {
      title: "Endodontics",
      description: "Specialized root canal treatments",
      image: "dentist/2.jpg",
      path: "/for-dentists/endodontics",
    },
    {
      title: "Sedation",
      description: "Comprehensive sedation dentistry",
      image: "dentist/3.jpg",
      path: "/for-dentists/sedation",
    },
    {
      title: "MOS",
      description: "Minimally Invasive Surgical Techniques",
      image: "dentist/4.jpg",
      path: "/for-dentists/mos",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
                Restore Your Smile{" "}
                <span className="text-[#63316b]">
                  <br />
                  in Coventry
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Seamless patient referrals with advanced dental solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
              <Link to="/contact">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
              </Link>
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
              >
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book My Free Consultation</span>
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Referral Services Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Referral{" "}
                <span className="text-[#63316b]">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive treatment options for your patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="p-6 text-center">
                    <img
                      src={service.image}
                      alt={`${service.title} service`}
                      className="w-full h-48 object-cover mb-6 rounded-xl"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Process Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Refer to{" "}
                  <span className="text-[#63316b]">Coventry Road Dental</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Referring a patient for any of our treatments is
                    straightforward. Our team can accept direct referrals.
                  </p>
                  <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                    <Printer className="w-10 h-10 text-[#63316b]" />
                    <div>
                      <h4 className="font-bold text-lg">Referral Form</h4>
                      <p>Simply print out our referral form</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                    <Mail className="w-10 h-10 text-[#63316b]" />
                    <div>
                      <h4 className="font-bold text-lg">Secure Submission</h4>
                      <p>
                        Email to covrd.dental@nhs.net or post to our address
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#63316b] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">NHS Email</h4>
                    <p className="text-gray-700">covrd.dental@nhs.net</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">
                      94 Coventry Road, Bedworth, Warwickshire CV12 8NW
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Contact Number
                    </h4>
                    <p className="text-gray-700">02476312256</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-End Equipment Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                High-End <span className="text-[#63316b]">Equipment</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                State-of-the-art technology for precise and advanced treatments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "CBCT Scanner",
                  description: "Advanced 3D imaging for precise diagnostics",
                },
                {
                  icon: Stethoscope,
                  title: "iTero Digital Scanners",
                  description: "Cutting-edge digital scanning technology",
                },
                {
                  icon: Calendar,
                  title: "Digital Radiography",
                  description: "Advanced digital X-ray imaging",
                },
                {
                  icon: ArrowRight,
                  title: "Digital Workflow",
                  description: "Streamlined, efficient treatment process",
                },
                {
                  icon: Printer,
                  title: "Sprintray 3D Printing",
                  description: "Precision 3D printing for dental solutions",
                },
                {
                  icon: Phone,
                  title: "Specialized Microscopes",
                  description: "Carl Zeiss Endodontic and Surgical Microscopes",
                },
              ].map((equipment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <equipment.icon className="w-10 h-10 text-[#63316b] mr-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {equipment.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{equipment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
                Our Promise to Referring Dentists
              </h3>
              <div className="text-lg mb-6 text-gray-700 space-y-4">
                <p>
                  Your patient will be sent back to you after the treatment is
                  completed.
                </p>
                <p>
                  Treatment will be carried out and comprehensive correspondence
                  will be sent to the referring dentist.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Request a Callback</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default ForDentists;
