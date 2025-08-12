import { useEffect } from "react";
import { Phone, UserPlus, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";

const NewPatients = () => {
  useEffect(() => {
    document.title =
      "New Patients - Coventry Road Dental Care | Welcome to Our Practice";
    window.scrollTo(0, 0);
  }, []);

  const welcomeHighlights = [
    "Family friendly practice",
    "Team dedicated to caring for your children's dental needs",
    "Twelve dental surgeries",
    "NHS and private treatments for great value and choice",
    "Reassuring regular care that focuses on your health",
    "A talented team of dental professionals",
    "New NHS and private patients are welcome",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-100 via-white to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#63316b]/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#63316b]/10 to-purple-100/50 text-[#63316b] px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-[#63316b]/20">
                <UserPlus className="w-4 h-4" />
                <span>Welcome to Our Practice</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#6a3870]">Everyone Is Welcome</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Caring for the health and appearance of your teeth and smile
              </p>
            </div>
          </div>
        </section>

        {/* Practice Hours and Services */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We are conveniently open from 8.00am – 6.00pm Monday to Friday
                and 8.00am – 1pm on Saturdays, allowing greater and more
                flexible access to our services at a time better suited to you
                and your family.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We provide a much-appreciated NHS dental service to residents of
                the local Coventry and Warwickshire community and affordable
                private dental treatments for when you want something more or
                different.
              </p>
            </div>
          </div>
        </section>

        {/* First Appointment Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#6a3870] mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3 text-[#63316b]" />
                  Your First Appointment
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your first appointment is a comprehensive examination, which
                  also includes mouth cancer screening, which takes around 20
                  minutes, giving us plenty of time to get to know you, your
                  dental history and desires.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Following your dental examination we will provide an estimate
                  of proposed treatments giving you complete visibility and
                  choice. We look forward to meeting you and your family and
                  assisting you to achieve good dental health.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-[#63316b] mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#63316b] rounded-full mr-3"></span>
                    Comprehensive dental examination
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#63316b] rounded-full mr-3"></span>
                    Mouth cancer screening
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#63316b] rounded-full mr-3"></span>
                    Discussion of dental history
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#63316b] rounded-full mr-3"></span>
                    Treatment plan estimation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-8 text-center">
              We Welcome New NHS And Private Patients
            </h2>
            <p className="text-gray-700 text-lg text-center mb-12">
              Our everyday care provides a full range of services from
              preventive dentistry to help you maintain healthy teeth and gums,
              to cosmetic dentistry to enhance your smile. Whatever your dental
              needs we are here to help.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {welcomeHighlights.map((highlight, index) => {
                const isLast = index === welcomeHighlights.length - 1;
                return (
                  <div
                    key={index}
                    className={`bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300 ${
                      isLast
                        ? "mx-auto col-span-full md:col-span-2 lg:col-span-1"
                        : ""
                    }`}
                  >
                    <div className="w-16 h-16 bg-[#63316b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#63316b]" />
                    </div>
                    <p className="text-gray-700 font-semibold">{highlight}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Callback CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're excited to welcome you to our practice and help you achieve
              optimal dental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Schedule A Visit</span>
              </a>
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Request a Callback</span>
              </a>
            </div>
          </div>
        </section>

        <Marquee />
        <Footer />
      </main>
    </div>
  );
};

export default NewPatients;
