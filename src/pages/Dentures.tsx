
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
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
              {/* Left Content */}
              <div className="space-y-8 animate-fadeInUp">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    Restore Your Smile with{" "}
                    <span className="gradient-text">Dentures</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-[#63316b] font-semibold">
                    in Coventry
                  </h2>
                </div>
                
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="text-lg leading-relaxed">
                    There is no substitute for your own teeth for both appearance and function and making dentures that perform as well as natural teeth is one of the most difficult challenges of modern dentistry. Ill-fitting dentures that are loose or painful can be most debilitating and a cause of lost confidence in social situations.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We provide full and partial dentures in metal, acrylic, and soft flexible dentures, which can be very comfortable. Advances in denture teeth and bases mean we can now offer more natural-looking teeth, to include tooth shades that look realistic.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#63316b]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2 group">
                    <Phone className="w-5 h-5" />
                    <span>Request a Callback</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white/80 backdrop-blur-sm text-[#63316b] px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 inline-flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center items-center animate-fadeInUp">
                <div className="relative">
                  <img
                    src="/services/dentures/hero.jpg"
                    alt="Professional dentures treatment"
                    className="w-full max-w-lg h-96 object-cover rounded-3xl shadow-2xl border border-white/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#63316b]/10 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Placeholder */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span className="hover:text-[#63316b] cursor-pointer transition-colors">Previous slide</span>
              <span className="hover:text-[#63316b] cursor-pointer transition-colors">Next slide</span>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Have This Treatment With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our range of NHS and private denture treatment ensures you can achieve the solution that suits your budget and your lifestyle.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="mb-6 p-3 bg-[#63316b]/10 rounded-xl w-fit group-hover:bg-[#63316b]/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold text-[#63316b] mb-6">
                Restore Your Smile with Dentures in Coventry
              </h3>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-[#63316b]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about dentures
              </p>
            </div>
            
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
        </section>

        {/* Service Tiles */}
        <ServiceTiles />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#63316b] to-purple-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Restore Your Smile?
              </h3>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                Book your consultation today and discover how dentures can restore your confidence and smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <button className="bg-white text-[#63316b] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
                <Link
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2"
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
