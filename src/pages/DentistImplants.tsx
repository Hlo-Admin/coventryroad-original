import { Phone, Calendar, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";

const DentistImplants = () => {
  useEffect(() => {
    document.title = "Dental Implants for Dentists | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const downloadReferralForm = () => {
    // Placeholder for download functionality
    alert("Referral form download functionality to be implemented");
  };

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
                  Implants
                </span>{" "}
                in Coventry
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Expert Dental Implant Solutions for Referring Dentists
              </p>
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
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book My Free Consultation</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Implants – Why{" "}
                  <span className="text-[#63316b]">Choose Us?</span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Here at Coventry Road Dental Care, we have the expertise and
                    experience when it comes to dental implants having placed a
                    significant amount of them. Your patient will receive a
                    complimentary consultation with our treatment coordinator
                    first followed on by a visit with our implantologist where a
                    comprehensive and clear treatment plan outlining the
                    options, risks, and fees will be provided to them.
                  </p>
                  <p>
                    Our implantologists have the expertise to provide not only
                    single implants but also all-on-4 and all-on-6 dental
                    implant systems.
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    onClick={downloadReferralForm}
                    className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Dentist Referral Form</span>
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="/dentist/dentist-images/implants.JPG"
                  alt="Dr. Taran Shergill"
                  className="w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is a Dental Implant Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Is A{" "}
                <span className="text-[#63316b]">Dental Implant?</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700">
                A dental implant is an artificial root made from titanium that
                replaces the root of a missing tooth. It can be placed in either
                the upper or lower jaw and, in time will bond with your jawbone
                to create a firm foundation to which a replacement false tooth
                is fixed. Implants can also be used to provide a secure
                foundation for replacing multiple teeth, failing bridges and
                poor fitting dentures.
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Taran Shergill Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Our{" "}
                <span className="text-[#63316b]">Expert Implantologist</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
              <div className="flex flex-col items-center mb-8">
                <img
                  src="/dentist/Dr-Taran-Shergill.jpg"
                  alt="Dr. Taran Shergill"
                  className="w-48 h-48 rounded-xl object-cover border-4 border-[#63316b] shadow-md"
                />
                <h3 className="text-2xl font-bold pt-4 text-gray-900 mb-2">
                  Dr. Taran Shergill
                </h3>
                <p className="text-gray-600 mb-6">
                  Senior Resident Implant Clinician
                </p>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Dr. Taran Shergill is a prominent implant dentist practicing
                  at Coventry Road Dental Care. In addition to his role in
                  Coventry, he also holds a position as a senior resident
                  implant clinician treating patients in several private
                  implants clinics across the country.
                </p>
                <p>
                  Dr. Shergill has successfully placed over 750 implants and has
                  expertly performed more than 100 full arches surgeries.
                  Including the use of highly advanced procedures such as guided
                  implant surgery All-on-4 and All-on-6, which has included the
                  utilisation of pterygoid implants. Dr. Shergill possesses
                  substantial experience in immediate placement and immediate
                  loading in both full arch and single/sectional implants.
                  Showcasing a high proficiency in the use of GBR.
                </p>
                <p>
                  Dr. Shergill's journey into the world of dentistry began at
                  the European University of Madrid (Spain), obtaining his BDS.
                  Building upon this he pursued further education, earning his
                  certificate in clinical implantology from the University of
                  Central Lancashire. Along with his ability to carry out IV
                  sedation.
                </p>
                <p>
                  In his spare time, Dr. Shergill enjoys spending time with
                  friends and family, seeing the world and visiting new places,
                  and is a huge Manchester United fan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
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
                  Treatment will be carried out and correspondence will be sent
                  to the referring dentist.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Request a Callback</span>
                  </button>
                </Link>
                <Link
                  to="/for-dentists"
                  className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Back to For Dentists</span>
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

export default DentistImplants;
