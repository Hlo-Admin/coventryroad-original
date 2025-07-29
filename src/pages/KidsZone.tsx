import { useEffect } from "react";
import { Phone, Gamepad2, Smile, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";

const KidsZone = () => {
  useEffect(() => {
    document.title =
      "Kids Zone - Coventry Road Dental Care | Fun Dental Care for Children";
    window.scrollTo(0, 0);
  }, []);

  const whyItMatters = [
    "Fewer problems later in life",
    "Encourages regular dental visits",
    "Builds healthy habits",
  ];

  const funGames = [
    {
      name: "Children's Doctor – Dentist",
      platform: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.gameiva.kidsdoctor",
    },
    {
      name: "Fun Mouth Doctor",
      platform: "App Store",
      link: "https://apps.apple.com/app/fun-mouth-doctor/id1386687528",
    },
  ];

  const kidsOffers = [
    "Child-focused dental approach",
    "Tips and tricks for home care",
    "Appointments tailored for kids",
    "Welcoming children from birth",
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
                <Smile className="w-4 h-4" />
                <span>Kids Dental Care</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#6a3870]">Welcome to Our Kids Zone</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Making Dentistry Fun and Educational for Children
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Teaching children about dental health early sets them up for
                life. We aim to make dental visits fun and engaging for our
                younger patients.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#6a3870] mb-6 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-[#63316b]" />
                  Why It Matters
                </h2>
                <ul className="space-y-4">
                  {whyItMatters.map((matter, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 text-lg"
                    >
                      <span className="w-3 h-3 bg-[#63316b] rounded-full mr-3"></span>
                      {matter}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/kids-zone/kids-zone-1.jpg"
                  alt="Kids Dental Care"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fun & Games */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/kids-zone/kids-zone-2.jpg"
                  alt="Fun Dental Games"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#6a3870] mb-6 flex items-center">
                  <Gamepad2 className="w-8 h-8 mr-3 text-[#63316b]" />
                  Fun & Games
                </h2>
                <p className="text-gray-700 mb-6">
                  We love using interactive tools like games and puzzles to make
                  oral care exciting. Try these kid-friendly dentist games:
                </p>
                <div className="space-y-4">
                  {funGames.map((game, index) => (
                    <a
                      key={index}
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-[#63316b]/10 hover:bg-[#63316b]/20 rounded-xl p-4 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-[#63316b]">
                            {game.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {game.platform}
                          </p>
                        </div>
                        <span className="text-[#63316b] hover:underline">
                          Play Now
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kidsOffers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#63316b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="w-8 h-8 text-[#63316b]" />
                  </div>
                  <p className="text-gray-700 font-semibold">{offer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dental Education Commitment */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-8 text-center">
              Our Commitment to Children's Dental Health
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#63316b]/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#6a3870] mb-4">
                  Early Education Matters
                </h3>
                <p className="text-gray-700">
                  We are passionate about helping children understand dental
                  health from birth. By educating children early, we set the
                  foundation for lifelong oral wellness and help prevent dental
                  issues in adulthood.
                </p>
              </div>
              <div className="bg-[#63316b]/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#6a3870] mb-4">
                  Tailored, Child-Friendly Approach
                </h3>
                <p className="text-gray-700">
                  Our dental approach is specifically designed for children. We
                  offer convenient appointment times, provide home care tips,
                  and create a welcoming environment that makes dental visits
                  fun and educational.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Callback CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Have Questions About Kids' Dental Care?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our friendly team is ready to help you make your child's dental
              experience positive and fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2"
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

export default KidsZone;
