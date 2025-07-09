
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
      "Professional Veneers - Restore Your Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Enhance your natural smile line.",
    "Gives an instant boost to your smile.",
    "Improves natural colour of teeth.",
    "Blends in with your original teeth.",
    "Pain-free treatment.",
    "Long lasting cosmetic dental treatment."
  ];

  const faqs = [
    {
      question: "Are veneers for me?",
      answer:
        "If you would like to restore the appearance of your teeth, then look no further than veneers from Coventry Road Dental Care. Request a FREE consultation appointment with our treatment coordinator to discuss if veneers are the best solution for you.",
    },
    {
      question: "How do veneers work?",
      answer:
        "Veneers are thin shells of ceramic/porcelain for teeth. A veneer is bonded to the front of your existing tooth, with little to no further preparation or treatment needed on the tooth itself, making veneers kinder to teeth than some other cosmetic treatments.",
    },
    {
      question: "Am I suitable for veneers?",
      answer:
        "Everyone is different and if you are not suitable for veneers, we promise to do all we can to find an alternative treatment to restore your smile. We encourage you to come along and visit one of our talented dentists and discover how we can achieve the smile you desire.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Skip to content */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded">
          Skip to content
        </a>

        {/* Hero Section */}
        <section id="main-content" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Coventry Road Dental
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#63316b] mb-6 animate-fadeInUp">
                Veneers
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Restore Your Smile with Veneers in Coventry
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Veneers
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    If you've a cracked, discoloured, or unsightly tooth or a niggling 
                    gap in your smile line that bothers you, veneers might be the answer. 
                    Veneers are sheets of porcelain that are carefully bonded to the 
                    surface of a natural tooth to mask imperfections in the enamel or 
                    improve the position and appearance. Veneers often require much less 
                    preparation of the natural tooth tissue helping preserve much more 
                    of what nature gave you.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/Veneers/veneers.jpg"
                  alt="Professional veneers treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Previous/Next slide placeholders */}
            <div className="flex justify-center space-x-4 mb-8">
              <button className="text-sm text-gray-500">Previous slide</button>
              <button className="text-sm text-gray-500">Next slide</button>
            </div>

            {/* Request callback button */}
            <div className="text-center mb-16">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Request a callback</span>
              </button>
            </div>
          </div>
        </section>

        {/* Why Have This Treatment Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Have This Treatment With Us?
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Thin layers of white ceramic or porcelain offer an instant boost to your smile and can dramatically improve the appearance of misaligned or crooked teeth. As a long-lasting, cost-effective cosmetic treatment, veneers are one of the easiest ways to enhance your natural smile, tidy up imperfections and close gaps.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#63316b]" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-bold text-[#63316b] mb-4">
                Restore Your Smile with Veneers in Coventry
              </h4>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#63316b]">FAQs</span>
              </h3>
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
      </div>
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default TeethWhitening;
