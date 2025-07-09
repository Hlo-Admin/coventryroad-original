
import {
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";
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

const DentalImplants = () => {
  useEffect(() => {
    document.title =
      "Dental Implants - Permanent Tooth Replacement | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Replace a missing tooth or teeth.",
    "Restore the mouth's function.",
    "Provide a secure anchor for dentures & bridges.",
    "Highly qualified implant dentist.",
    "Prevent that caved in look often seen with missing teeth.",
    "The most cost-effective, long-lasting solution to missing teeth.",
    "Prevent bone loss."
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
                Dental Implants
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Restore Your Smile with Dental Implants in Coventry
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
                  Dental Implants
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    We understand that losing a tooth or teeth, living with uncomfortable 
                    or loose-fitting dentures can have a massive effect on your self-esteem 
                    and your life. Dental implants are a long-lasting solution to a missing 
                    tooth or teeth – they look and feel just like your own original teeth 
                    and allow you to smile, eat and chew with confidence.
                  </p>
                  <p>
                    An implant is an artificial root made from titanium that replaces the 
                    root of a missing tooth. It can be placed in either the upper or lower 
                    jaw and, in time, your jawbone will fuse around it to create a firm 
                    foundation to which a replacement false tooth is fixed. Implants can 
                    also be used to provide a secure foundation for replacing multiple teeth, 
                    bridges, and dentures.
                  </p>
                </div>
              </div>
              <div>
                <img
             src="/common.jpeg"
                  alt="Professional dental implants treatment"
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
                Restore Function And Confidence With Dental Implants
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                You are invited to join us at Coventry Road Dental Care for an initial 
                consultation for FREE to assess your suitability for dental implant treatment. 
                At this consultation we will explain the advantages and disadvantages of 
                dental implant treatment and assess your suitability so that you can make 
                an informed decision about your care.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
                Restore Your Smile with Dental Implants in Coventry
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

export default DentalImplants;
