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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TeethWhitening = () => {
  useEffect(() => {
    document.title =
      "Professional Teeth Whitening - Brighter Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Initial appointments by professionals",
      description:
        "Initial appointments are carried out by trained professionals.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Safe, quick, and comfortable",
      description: "Treatment is safe, quick, and comfortable.",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Pain free treatment",
      description: "Treatment is pain free.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Boosts appearance, confidence, and self-esteem",
      description:
        "Whitening makes a real difference to your appearance, self-confidence, and self-esteem.",
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-[#63316b]" />,
      title: "Home whitening kits",
      description: "Whitening kits are used in the comfort of your own home.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Brightens stained and aging teeth",
      description: "Brightens stained and aging teeth.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#63316b]" />,
      title: "Easy top ups at home",
      description: "Top ups can be carried out at home when needed.",
    },
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
        "Tooth whitening is a safe, painless procedure when carried out by a trained dental professional. The treatment can result in short term sensitivity for some people, but do not worry we have products that can help with this.",
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
        "Depending on the degree of staining, you may need a thorough clean and polish before you have whitening treatment, to remove any discolouration caused by stains. The colour of crowns, veneers and dentures is not affected by tooth whitening. Old or dark crowns may need replacing to ensure they match your natural teeth. That is why an initial appointment with a dental professional is imperative before you begin using any tooth whitening products.",
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
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Professional{" "}
                <span className="text-[#63316b]">Teeth Whitening</span>
                <br /> in Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Achieve a brilliantly white smile with our safe, effective
                professional teeth whitening treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Teeth Whitening */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                  What is{" "}
                  <span className="text-[#63316b]">Teeth Whitening ?</span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Teeth whitening is one the easiest, most cost effective and
                    long-lasting ways of giving your smile – and your confidence
                    – a real lift.
                  </p>
                  <p>
                    Here at Coventry Road Dental Care, we offer two brands of
                    whitening, complete with custom-made whitening trays and
                    gels that can be used in the comfort of your own home.
                  </p>
                  <p>
                    Following a consultation with one of our dentists, you will
                    be advised which system is best for you based on the
                    existing shade of your teeth, your desired level of
                    whiteness and brightness, and your budget.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/Teeth whitening/teeth.jpg"
                  alt="Professional teeth whitening treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                The <span className="text-[#63316b]">Benefits</span> of Teeth
                Whitening
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                We want our patients to look and feel their best with a smile
                they love. We're pleased to offer two at-home whitening kits to
                suit your needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const isLast = index === benefits.length - 1;
                const needsCenter = benefits.length % 3 !== 0 && isLast;
                return (
                  <div
                    key={index}
                    className={
                      `bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300` +
                      (needsCenter
                        ? " lg:col-span-3 flex flex-col items-center justify-center"
                        : "")
                    }
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                <span className="text-[#63316b]">Frequently Asked</span>{" "}
                Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Service Tiles */}
        <ServiceTiles />

        {/* Final CTA Section */}
         <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                Book your free consultation today and discover how composite
                bonding can enhance your smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
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
