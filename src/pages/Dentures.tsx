
import {
  Phone,
  ArrowRight,
  Calendar,
  CheckCircle,
  Users,
  Award,
  Star,
  Shield,
  Heart,
  Wrench,
  Clock,
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

const Dentures = () => {
  useEffect(() => {
    document.title =
      "Dentures - Comfortable Tooth Replacement | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Denture solutions that suit your budget",
      description: "Affordable options for everyone.",
    },
    {
      icon: <Star className="w-6 h-6 text-[#63316b]" />,
      title: "Natural-looking dentures that do not give anything away",
      description: "Realistic appearance that blends seamlessly.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#63316b]" />,
      title: "Skilled technicians who craft realistic-looking dentures",
      description: "Expert craftsmanship for superior results.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Comfortable and flexible denture solutions",
      description: "Designed for maximum comfort and ease.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Expertise to provide a fixed solution with implant-supported dentures",
      description: "Advanced solutions for permanent results.",
    },
  ];

  const faqs = [
    {
      question: "What is a denture?",
      answer:
        "Dentures are removable acrylic, chrome or flexible appliances with teeth attached to them, which when worn give the appearance of natural teeth.",
    },
    {
      question: "What are the benefits of dentures?",
      answer:
        "Modern knowledge and techniques will ensure that your new dentures from Coventry Road Dental Care look great and feel comfortable, allowing our patients to eat and smile with confidence. We offer a range of metal, acrylic and soft dentures to suit most budgets and advances in denture technology mean that some foods that were off limits to denture wearers in the past, can now be eaten more easily.",
    },
    {
      question: "Can I remove my denture?",
      answer:
        "Yes, dentures should be removed daily (usually at night) to clean and maintain them in the same way you would your natural teeth.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section with 3D Model - Visible on all devices */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Restore Your Smile with{" "}
                  <span className="text-[#63316b]">Dentures</span> in Coventry
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  There is no substitute for your own teeth for both appearance and function and making dentures that perform as well as natural teeth is one of the most difficult challenges of modern dentistry. Ill-fitting dentures that are loose or painful can be most debilitating and a cause of lost confidence in social situations. We provide full and partial dentures in metal, acrylic, and soft flexible dentures, which can be very comfortable. Advances in denture teeth and bases mean we can now offer more natural-looking teeth, to include tooth shades that look realistic. If you would prefer not to wear dentures because they undermine your confidence, are uncomfortable, or restrictive in what you can eat and taste, or if you would prefer a more permanent solution, implant-supported dentures might be the solution you are looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#63316b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Request a Callback</span>
                  </button>
                </div>
              </div>

              {/* Right 3D Object - Visible on all devices */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <img
                  src="/services/dentures/hero.jpg"
                  alt="Dentures hero"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border border-white/20 bg-gradient-to-br from-[#63316b]/10 to-purple-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Have This Treatment With Us Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Have This Treatment With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our range of NHS and private denture treatment ensures you can achieve the solution that suits your budget and your lifestyle.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                FAQs
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
                Restore Your Smile with Dentures in Coventry
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                Book your consultation today and discover how dentures can restore your confidence and smile.
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

export default Dentures;
