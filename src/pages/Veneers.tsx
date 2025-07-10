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

const Veneers = () => {
  useEffect(() => {
    document.title =
      "Veneers - Transform Your Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Replace a missing tooth or teeth.",
      description:
        "Restore your smile and confidence by filling gaps with natural-looking replacements.",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Enhance your natural smile line.",
      description:
        "Eat, speak, and smile comfortably with a fully functional set of teeth.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Gives an instant boost to your smile.",
      description:
        "Enjoy a stable, secure fit for dentures and bridges with dental implants.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Improves natural colour of teeth.",
      description:
        "Benefit from the expertise of our experienced implant team for safe, predictable results.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Blends in with your original teeth.",
      description:
        "Maintain your natural facial structure and prevent premature aging.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Pain-free treatment.",
      description:
        "Dental implants are a durable investment that can last a lifetime with proper care.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#63316b]" />,
      title: "Long lasting cosmetic dental treatment.",
      description:
        "Implants stimulate the jawbone, helping to prevent bone loss and preserve oral health.",
    },
  ];

  const recapBenefits = [
    "An instant smile boost",
    "Natural shade correction",
    "Blending with your original teeth",
    "Comfortable, long-lasting results",
  ];

  const imperfections = [
    "Cracks",
    "Discolouration",
    "Small gaps",
    "Irregular shapes",
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Restore Your Smile with{" "}
                <span className="text-[#63316b]">Veneers</span> in Coventry
              </h1>
             
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <Link to="/contact">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button></Link>
                <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book My Free Consultation</span>
                </button></a>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Veneers Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                  What is <span className="text-[#63316b]">Veneers ?</span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    If you've a cracked, discoloured, or unsightly tooth or a
                    niggling gap in your smile line that bothers you, veneers
                    might be the answer.
                  </p>
                  <p>
                    Veneers are sheets of porcelain that are carefully bonded to
                    the surface of a natural tooth to mask imperfections in the
                    enamel or improve the position and appearance.
                  </p>
                  <p>
                    Veneers often require much less preparation of the natural
                    tooth tissue helping preserve much more of what nature gave
                    you.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/common.jpeg"
                  alt="Before and after veneer treatment"
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
                Why Have This Treatment With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                Thin layers of white ceramic or porcelain offer an instant boost to your smile and can dramatically improve the appearance of misaligned or crooked teeth. As a long-lasting, cost-effective cosmetic treatment, veneers are one of the easiest ways to enhance your natural smile, tidy up imperfections and close gaps.

              </p>
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
                Veneers – Your Questions Answered
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
        {/* <ServiceTiles /> */}

        {/* Final CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                Book your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button></a>
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

export default Veneers;
