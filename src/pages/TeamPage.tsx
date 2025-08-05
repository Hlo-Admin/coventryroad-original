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
      image: "/teams/Dr anoop.jpg",
    },
    {
      name: "Dr. Jisu Jacob",
      role: "Associate Dentist",
      image: "/teams/jisu jacob.jpg",
    },
    {
      name: "Dr. Megha Mamadapurmath",
      role: "Dentist",
      image: "/teams/meg.jpg",
    },
    {
      name: "Dr. Jaskaran Cheema",
      role: "Dentist",
      image: "/teams/Dr-Jaskaran-Cheema.jpg",
    },
    {
      name: "Dr. Kalveen Manak",
      role: "Dentist",
      image: "/teams/Dr-Kalveen-Manak.jpg",
    },
    {
      name: "Dr. Satbir Birdi",
      role: "Dentist",
      image: "/teams/Satbir.jpg",
    },
    {
      name: "Dr. Gutaran Shergill",
      role: "Dentist",
      image: "/teams/gutaran .jpg",
    },
    {
      name: "Dr. Raj Pagudala",
      role: "Dentist",
      image: "/teams/raj.jpg",
    },

    {
      name: "Dr. Puja Rathour",
      role: "Dentist",
      image: "/teams/puja.jpg",
    },
    {
      name: "Dr. Waddah Salman",
      role: "Dentist",
      image: "/teams/waddah.jpg",
    },
    {
      name: "Dr. Manni Deol",
      role: "Dentist",
      image: "/teams/deol.jpg",
    },

    {
      name: "Dr. Zahra Mushtaq",
      role: "Dentist",
      image: "/teams/zahra-1.jpg",
    },
    {
      name: "Dr. Jaskern Chana",
      role: "Dentist",
      image: "/teams/Jaskern.jpg",
    },
    {
      name: "Dr. Keval Rathod",
      role: "Dentist",
      image: "/teams/keval-rathode.JPG",
    },
    {
      name: "Dr. Amit Bansil",
      role: "Dentist",
      image: "/teams/1.jpg",
    },
    {
      name: "Dr. Sarika Thakor",
      role: "Dentist",
      image: "/teams/1.jpg",
    },
    {
      name: "Chinwe Joy Okorie",
      role: "Dental Hygienist",
      image: "/teams/joy.jpg",
    },
    {
      name: "Dr. Shaniece sahunta",
      role: "Dental Hygienist",
      image: "/teams/1.jpg",
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
      {/* Team Grid */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {teamMembers.slice(0, 16).map((member, index) => (
        <div
          key={index}
          className="min-h-[400px] bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
        >
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="object-cover h-full w-full"
              />
            ) : (
              <span className="text-gray-400 text-sm">Photo Coming Soon</span>
            )}
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

    {/* Last 2 cards centered below */}
    <div className="mt-12 flex justify-center gap-8">
      {teamMembers.slice(16).map((member, index) => (
        <div
          key={index + 16}
          className="min-h-[400px] w-[280px] bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
        >
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="object-cover h-full w-full"
              />
            ) : (
              <span className="text-gray-400 text-sm">Photo Coming Soon</span>
            )}
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
