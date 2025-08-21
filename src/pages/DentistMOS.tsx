import { Phone, Calendar, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";

const DentistMOS = () => {
  useEffect(() => {
    document.title =
      "Wisdom Teeth Removal – MOS in Coventry | Coventry Road Dental Care";
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
                Wisdom Teeth Removal{" "}
                <span className="text-[#63316b]">
                  <br />– MOS in Coventry
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Minor Oral Surgery with specialist expertise and gentle care for
                referring dentists
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
                  Minor Oral Surgery (MOS) –{" "}
                  <span className="text-[#63316b]">Why Choose Us?</span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    At Coventry Road Dental Care, we know that with age comes
                    wisdom but unfortunately for some patients the wisdom teeth
                    need to be removed.
                  </p>
                  <p>
                    We have the expertise for wisdom tooth extraction, and with
                    more than 15 years of experience, you can feel at ease
                    knowing your patient is in safe hands.
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
                  src="/dentist/dentist-images/mos.JPG"
                  alt="Dr. Anoop Deol"
                  className="w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Anoop Deol Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet <span className="text-[#63316b]">Dr Anoop Deol</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
              <div className="flex flex-col items-center mb-8">
                <img
                  src="/teams/Dr anoop.jpg"
                  alt="Dr. Anoop Deol"
                  className="w-48 h-48 rounded-xl object-cover border-4 border-[#63316b] shadow-md"
                />
                <h3 className="text-2xl font-bold pt-4 text-gray-900 mb-2">
                  Dr. Anoop Deol
                </h3>
                <p className="text-gray-600 mb-6">
                  Principal Dentist & Minor Oral Surgery Lead
                </p>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Dr Anoop Deol qualified from the University of United Kingdom
                  (UK) in 1998 and thereafter took up an Associate post in
                  Coventry, his hometown, following which he opened his own
                  practice in Bedworth Warwickshire. Having worked to serve the
                  local population, he has continued to expand the practice and
                  is principal to a large team of Dentists, undertaking all
                  aspects of Dentistry. The practice ethos is to give their
                  clients the very best of treatments that are available
                  worldwide and ensure that the team is trained to the highest
                  standards to enable that. He leads a team of approximately 40
                  staff to give their patients the very best.
                </p>
                <p>
                  Anoop has qualified further and obtained his Membership of the
                  Faculty of General Practitioners (Royal College of Surgeons
                  London) qualification in 2006 and the Postgraduate Certificate
                  in Medical Education, returning to University of United
                  Kingdom in 2013. The latter to help train newly qualified
                  Dentists, which Dr Deol has done for several years since
                  2002–2020, successfully being an approved post-graduate
                  trainer for Dentists to help mentor their careers. He has
                  trained and tutored many such Dentists, giving them guidance,
                  and mentoring in clinical restorative procedures after they
                  have qualified. He held the award of Enhanced Trainers in 2005
                  and 2011. As the whole team has a life-long approach to
                  learning and improving their skill set, Dr Deol continued his
                  skill advancement by obtaining the Postgraduate Certificate in
                  Minor Oral Surgery from the Faculty of General Dental Practice
                  (UK) and the Royal College of Surgeons England in London,
                  2016. Then progressed further to the award of Postgraduate
                  Diploma in Oral surgery, from the University of Central
                  Lancashire in 2018.
                </p>
                <p>
                  Dr Deol is an active member of his local Dental Community,
                  serving on the local Committee for Coventry and Warwickshire
                  separately. He has been an elected member of Warwickshire’s.
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
                Our Promise for Referring Dentist
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

export default DentistMOS;
