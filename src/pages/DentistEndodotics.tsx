import { Phone, Calendar, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";

const DentistEndodontics = () => {
  useEffect(() => {
    document.title = "Endodontics in Coventry | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const downloadReferralForm = () => {
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
                Endodontics <span className="text-[#63316b]"><br />in Coventry</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Expert Endodontic Treatments for Referring Dentists
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
                  Endodontic Treatment at Coventry Road Dental Care – <span className="text-[#63316b]">Why Choose Us?</span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Endodontic treatments can be complex and very time-consuming which in turn creates some difficulty for NHS dentists to fit this treatment into their already extremely busy diaries, which is why we have a dentist here at Coventry Road Dental Care with a special interest in endodontics who is dedicated to these types of cases.
                  </p>
                  <p>
                    Many endodontic cases may require advanced equipment to complete to a satisfactory standard. We have all the latest endodontic equipment and materials. Our fees are competitive and reflect case complexity. We offer a professional but also relaxed and friendly environment to patients.
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
                  src="/dentist/dentist-images/endodontics.JPG"
                  alt="Dr. Jisu Jacob"
                  className="w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

    

        {/* Dr. Jisu Jacob Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet <span className="text-[#63316b]">Dr. Jisu Jacob</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
              <div className="flex flex-col items-center mb-8">
                <img
                  src="/teams/jisu jacob.jpg"
                  alt="Dr. Jisu Jacob"
                  className="w-48 h-48 rounded-xl object-cover border-4 border-[#63316b] shadow-md"
                />
                <h3 className="text-2xl font-bold  pt-4 text-gray-900 mb-2">Dr. Jisu Jacob</h3>
                <p className="text-gray-600 mb-6">Endodontist</p>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  I have an interest in Endodontics. I have finished my PG diploma in Endodontics with distinction. I qualified in 2003 (India) and have been doing general practice.
                </p>
                <p>
                  I finished IQE in 2007 and have been fully registered with GDC since 2007. I work in mixed practice in Bedworth, Warwickshire, which is a foundation practice and British Dental Association (BDA) good practice.
                </p>
                <p>
                  I have done Membership of Joint Dental Faculty (MJDF) with Royal College in 2014 and finished my PG Diploma in Endodontics from Kings College with distinction. I have been providing endodontic treatments since.
                </p>
                <p>
                  I am a tier 2 accredited dentist and have been providing treatments as part of Birmingham Dental hospital from the start of 2022. I am also a member of the British Endodontic Society (BES) and Dental Trauma UK.
                </p>
                <p>
                  Outside of work, I enjoy my time with my family, married with two kids. I enjoy nature photography, travelling, watching movies, and playing the piano.
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
                Our Promise to the Referring Dentist
              </h3>
              <div className="text-lg mb-6 text-gray-700 space-y-4">
                <p>Your patient will be sent back to you after the treatment is completed.</p>
                <p>Treatment will be carried out, and correspondence will be sent to the referring dentist.</p>
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

export default DentistEndodontics;
