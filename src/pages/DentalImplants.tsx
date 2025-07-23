import { Phone, Calendar, CheckCircle,ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExploreServicesCarousel from "../components/Marquee";
import { Link } from "react-router-dom";

const DentalImplants = () => {
  useEffect(() => {
    document.title = "Dental Implants - Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Replace a missing tooth or teeth.",
    "Restore the mouth's function.",
    "Provide a secure anchor for dentures & bridges.",
    "Highly qualified implant dentist.",
    "Prevent that caved in look often seen with missing teeth.",
    "The most cost-effective, long-lasting solution to missing teeth.",
    "Prevent bone loss.",
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
                  Dental Implant{" "}
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
                  Dental Implants
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    We understand that losing a tooth or teeth, living with
                    uncomfortable or loose-fitting dentures can have a massive
                    effect on your self-esteem and your life. Dental implants
                    are a long-lasting solution to a missing tooth or teeth –
                    they look and feel just like your own original teeth and
                    allow you to smile, eat and chew with confidence.
                  </p>
                  <p>
                    An implant is an artificial root made from titanium that
                    replaces the root of a missing tooth. It can be placed in
                    either the upper or lower jaw and, in time, your jawbone
                    will fuse around it to create a firm foundation to which a
                    replacement false tooth is fixed. Implants can also be used
                    to provide a secure foundation for replacing multiple teeth,
                    bridges, and dentures.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/dental implant/dental-implant.jpg"
                  alt="Professional dental implants treatment"
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
                Restore Function And Confidence With Dental Implants
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You are invited to join us at Coventry Road Dental Care for a
                FREE consultation. At this appointment we will explain the
                advantages and disadvantages of dental implant treatment so that
                you can make an informed decision about your care.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:bg-[#63316b] hover:text-white group transition-colors duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-[#63316b] flex-shrink-0 mt-1 group-hover:text-white transition-colors duration-300" />
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                    {benefit}
                  </p>
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
                Get answers to common questions about dental implants
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

export default DentalImplants;
