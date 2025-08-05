import { Phone, Calendar, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";

const DentistSedation = () => {
  useEffect(() => {
    document.title = "Sedation Dentistry for Nervous Patients | Coventry Road Dental Care";
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
                Sedation Dentistry <span className="text-[#63316b]"><br />for Nervous Patients</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Compassionate Dental Sedation Solutions for Referring Dentists
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
                  Sedation – Why <span className="text-[#63316b]">Choose Us?</span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Here at Coventry Road Dental Care, we are a compassionate team, and we understand patients can sometimes have dental anxiety and that fear may prevent them from receiving dental treatment. That is why we offer dental sedation to help nervous patients feel comfortable and stress-free during their dental procedures.
                  </p>
                  <p>
                    For patients who are extremely phobic, we offer techniques that help relieve anxiety, such as oral sedation and intravenous (IV) sedation.
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
                  src="/dentist/dentist-images/sedation.JPG"
                  alt="Dr. Manni Deol"
                  className="w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
      
        
        {/* Dr. Manni Deol Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet <span className="text-[#63316b]">Dr Manni Deol</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
              <div className="flex flex-col items-center mb-8">
                <img
                  src="/teams/deol.jpg"
                  alt="Dr. Manni Deol"
                  className="w-48 h-48 rounded-xl object-cover border-4 border-[#63316b] shadow-md"
                />
                <h3 className="text-2xl font-bold pt-4 text-gray-900 mb-2">Dr. Manni Deol</h3>
                <p className="text-gray-600 mb-6">IV Sedation Dentist</p>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  BDS (University of London UK), MJDF (Royal College of Surgeons, London UK),<br/>
                  PGC Health Ed for Health Professionals (University of B'ham UK),<br/>
                  PGDip. Conscious Sedation (Kings College London UK)
                </p>
                <p>
                  Manni has been a general dental practitioner for 26 years working in NHS and private practice, based in the West Midlands. Her interests include sedation and teaching. She provides intravenous sedation here at Coventry Road Dental Care and has worked in the Department of Sedation and Special Care Dentistry at Guy’s Hospital in the past.
                </p>
                <p>
                  Manni’s other roles include Honorary Secretary and Clinical Adviser for the Society for Advancement of Anaesthesia in Dentistry (SAAD) and being an elected member of the Local Dental Committee in Coventry. Dr Deol’s passion for treating nervous patients has led her to complete a formal qualification in sedation. She has 26 years of experience in this field.
                </p>
                <p>
                  Manni has also taught sedation to undergraduate and postgraduate professionals at King College London and through her role in SAAD. In addition to her dental work, Dr Deol is a devoted family person who has raised three children and enjoys caring for her energetic dog. She enjoys reading, spin cycling, weight training, yoga, going to the gym, traveling, cooking, and has recently taken on the physical challenge of HYROX.
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
                <p>Your patient will be sent back to you after the treatment is completed.</p>
                <p>Treatment will be carried out and correspondence will be sent to the referring dentist.</p>
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

export default DentistSedation;
