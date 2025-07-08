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
  Wrench,
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

const DentalImplants = () => {
  useEffect(() => {
    document.title =
      "Dental Implants - Permanent Tooth Replacement | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Permanent solution",
      description: "Long-lasting tooth replacement that can last a lifetime",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Natural look and feel",
      description: "Functions just like your natural teeth",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Preserves jawbone",
      description: "Prevents bone loss and maintains facial structure",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "No damage to adjacent teeth",
      description: "Unlike bridges, implants don't affect neighboring teeth",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Cost-effective long-term",
      description: "Investment that pays off over decades",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Improved confidence",
      description: "Eat, speak, and smile with complete confidence",
    },
  ];

  const faqs = [
    {
      question: "Are dental implants for me?",
      answer:
        "Here at Coventry Road, we want to see our patients smiling confidently. If you are worried about missing teeth or want to return to a life before dentures, join us for a free consultation to see if you are a candidate for dental implant treatment.",
    },
    {
      question: "What is a dental implant?",
      answer:
        "Dental implants replace the entire missing tooth and come in two parts: the dental implant screw that replaces the tooth root to provide a stable foundation for the second part, a replacement crown that is carefully crafted to blend in seamlessly with your remaining teeth. The bone forms a bond with the new root giving your new crown the same secure foundation as a natural tooth.",
    },
    {
      question: "How long do implants last?",
      answer:
        "In a healthy person with a healthy mouth and bone, implant roots (the metal part) should last as long as your natural teeth. They need caring for as natural teeth do. The crowns or bridges supported by the implants can last a decade or more.",
    },
    {
      question: "Will treatment hurt?",
      answer:
        "All treatment is carried out under a local anaesthetic – so no pain! Dental implant treatment is a minor surgical procedure that has been performed for many years, with excellent success rates.",
    },
    {
      question: "Am I suitable for implants?",
      answer:
        "Everyone is different and if you are not suitable for implants, we promise to do all we can to find an alternative treatment to restore your smile.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section with 3D Model */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Restore Your Smile with{" "}
                  <span className="text-[#63316b] block">Dental Implants</span>
                  in Coventry
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Replace missing teeth with permanent, natural-looking dental
                  implants that function just like your own teeth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#63316b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Request a Callback</span>
                  </button>
                  <button className="border-2 border-[#63316b] text-[#63316b] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book Free Consultation</span>
                  </button>
                </div>
              </div>

              {/* Right Image - Visible on all devices */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <img
                  src="services/dental implant/hero.png"
                  alt="Dental implant illustration"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain rounded-3xl shadow-2xl border border-white/20 bg-gradient-to-br from-[#63316b]/10 to-purple-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What are Dental Implants */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What are Dental Implants?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Dental implants are titanium posts that are surgically
                    placed into the jawbone to replace the roots of missing
                    teeth.
                  </p>
                  <p>
                    Once the implant integrates with your bone, a
                    natural-looking crown is attached, giving you a permanent
                    replacement that looks, feels, and functions like a natural
                    tooth.
                  </p>
                  <p>
                    Implants can replace single teeth, multiple teeth, or even
                    support full dentures for a complete smile restoration.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="services/dental implant/dental-implant.jpg"
                  alt="Dental implant procedure"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Dental Implants?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
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

export default DentalImplants;
