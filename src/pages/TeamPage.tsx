import { useEffect } from "react";
import { Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";

const TeamPage = () => {
  useEffect(() => {
    document.title =
      "Meet the Team - Coventry Road Dental Care | Our Expert Dental Professionals";
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Anoop Deol",
      role: "Practice Principal",
      image: null, // Placeholder for future image
    },
    {
      name: "Dr. Jaskaran Cheema",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Kalveen Manak",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Satbir Birdi",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Gutaran Shergill",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Raj Pagudala",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Jisu Jacob",
      role: "Associate Dentist",
      image: null,
    },
    {
      name: "Chinwe Joy Okorie",
      role: "Dental Hygienist",
      image: null,
    },
    {
      name: "Dr. Keval Rathod",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Waddah Salman",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Manni Deol",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Megha Mamadapurmath",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Jaskern Chana",
      role: "Dentist",
      image: null,
    },
    {
      name: "Gurchetan Shergill",
      role: "Clinical Dental Technician",
      image: null,
    },
    {
      name: "Dr. Amit Bansil",
      role: "Dentist",
      image: null,
    },
    {
      name: "Dr. Shaniece Sahunta",
      role: "Dental Hygienist",
      image: null,
    },
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
                <span>Our Expert Team</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#6a3870]">Meet Our Coventry Road</span>
                <br />
                <span className="text-3xl text-gray-700">Dental Care Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dedicated professionals committed to providing exceptional
                dental care
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Photo Coming Soon
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#63316b] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Callback CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Meet Our Team in Person
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a consultation to meet our experienced dental professionals
              and discuss your dental care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Consultation</span>
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

export default TeamPage;
