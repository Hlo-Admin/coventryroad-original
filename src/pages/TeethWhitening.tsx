import {
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle,
  Sparkles,
  Smile,
  Shield,
  DollarSign,
  Syringe,
  Heart,
  HomeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceTiles from "../components/ServiceTiles";
import FloatingBubble from "../components/FloatingBubble";
import ExploreServicesCarousel from "../components/Marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TeethWhitening = () => {
  useEffect(() => {
    document.title =
      "Professional Veneers - Restore Your Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Initial appointments are carried out by trained professionals.",
    "Treatment is safe, quick, and comfortable.",
    "Treatment is pain free.",
    "Whitening makes a real difference to your appearance/self-confidence.",
    "Whitening kits are used in the comfort of your own home.",
    "Creates a more youthful and refreshed smile.",
    "Brightens stained and aging teeth.",
    "Top ups can be carried out at home when needed.",
  ];

  const faqs = [
    {
      question: "Is teeth whitening for me?",
      answer:
        "We are passionate our patients have smiles they feel proud of – if you look good, you feel good. If you think your teeth have become dull over time and could benefit from being brighter, home whitening is an easy, great value and pain free way of brightening up your smile.",
    },
    {
      question: "How long will treatment take?",
      answer:
        "For particularly stained teeth, we recommend a hygiene treatment to ensure the cleanest base for applying whitening. We then ask you to join us to have a scan taken of your teeth and return later to collect your specially made trays and gels. Your teeth will gradually whiten as you use the whitening gels provided but the degree is dependent on your starting position, diet, age, and lifestyle.",
    },
    {
      question: "Does teeth whitening hurt?",
      answer:
        "Tooth whitening is a safe, painless procedure, that is why an initial appointment with a dental professional is imperative before you begin using any tooth whitening products.",
    },
    {
      question: "What if my teeth need whitening again?",
      answer:
        "Once you have your trays you can whiten your teeth for years to come by simply purchasing additional whitening gel from Coventry Road Dental Care.",
    },
    {
      question:
        "What can you do about stained veneers, crowns or dentures to make sure they match my natural teeth?",
      answer:
        "The colour of crowns, veneers and dentures is not affected by tooth whitening. Old or dark crowns may need replacing to ensure they match your natural teeth. That is why an initial appointment with a dental professional is imperative before you begin using any tooth whitening products.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded"
        >
          Skip to content
        </a>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
                Restore Your Smile with{" "}
                <span className="text-[#63316b]">
                  <br />
                  Teeth Whitening
                </span>{" "}
                <br /> in Coventry
              </h1>

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
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Teeth Whitening
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Teeth whitening is one the easiest, most cost effective and
                    long-lasting ways of giving your smile – and your confidence
                    – a real lift. Here at Coventry Road Dental Care, we offer
                    two brands of whitening, complete with custom-made whitening
                    trays and gels that can be used in the comfort of your own
                    home. Following a consultation with one of our dentists, you
                    will be advised which system is best for you based on the
                    existing shade of your teeth, your desired level of
                    whiteness and brightness, and your budget.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/Teeth whitening/about.jpg"
                  alt="Professional Teeth Whitening treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Have This Treatment Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Tooth Whitening Can Give Your Smile And Confidence A Boost{" "}
                <br /> - Teeth Whitening
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We want our patients to look and feel their absolute best and
                boast a smile they deserve. It gives us real pleasure to offer
                two brands of whitening kit depending on your desires, both of
                which can be used in the comfort of your own home.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-[#63316b] hover:text-white group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#63316b] group-hover:text-white" />
                    </div>
                    <p className="text-gray-700 group-hover:text-white">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="text-[#63316b]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about teeth whitening
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src="/services/faq.jpg"
                  alt="Dentures Example"
                  className="w-full max-w-md rounded-2xl shadow-xl object-cover"
                />
              </div>
              {/* Right FAQ Accordion */}
              <div>
                <Accordion type="single" collapsible className="space-y-6">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-gray-50 rounded-2xl shadow-sm border-0 overflow-hidden"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left font-bold text-lg text-gray-900 hover:no-underline hover:bg-gray-100 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-700 text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Services Carousel */}
        <ExploreServicesCarousel />

        {/* Final CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                We would love to help you achieve your perfect smile as
                discreetly as possible. Book your free consultation and let's
                discuss your options for a straight smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                  target="_blank"
                >
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                  </button>
                </a>
                <Link
                  to="/"
                  className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Back to Home</span>
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

export default TeethWhitening;
