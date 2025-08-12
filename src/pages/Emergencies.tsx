import { useEffect, useState } from "react";
import { Phone, AlertTriangle, HelpCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Emergencies = () => {
  useEffect(() => {
    document.title =
      "Emergency Dental Care - Coventry Road Dental Care | Urgent Dental Help";
    window.scrollTo(0, 0);
  }, []);

  const emergencyTips = [
    "Work is undertaken by our gentle, dedicated dentists",
    "Read our FAQs below for advice on the more common causes of toothache",
    "Visit us as regular as recommended to avoid painful problems arising",
    "Maintain your teeth and gums thoroughly between dental visits",
  ];

  const faqs = [
    {
      question: "What should I do to cure a toothache?",
      answer:
        "If you are suffering from toothache this will require attention. Contact us immediately to organise an appointment as quickly and conveniently as possible for you. Painkillers such as paracetamol are recommended to tackle the pain, although please do not exceed the maximum dose and seek advice if you are unsure.",
    },
    {
      question: "What should I do if I have a swelling?",
      answer:
        "Swellings are normally caused by an infection. Contact us immediately to receive treatment or advice.",
    },
    {
      question: "What should I do if I have fractured my tooth?",
      answer:
        "Fractured teeth can usually be restored. If the tooth is painful, avoid hot or cold and try not to eat or bite on that side i.e. relieve the tooth from extreme temperatures and pressure. Painkillers such as paracetamol may assist with the pain. Contact us to arrange an appointment, where we'll aim to fix the tooth or make it comfortable until a permanent repair can be conducted.",
    },
    {
      question: "What if one of my crowns has fallen off or is loose?",
      answer:
        "Please contact us immediately and wherever possible keep the crown safe. It may be re-applied by a dentist.",
    },
    {
      question: "What if I have broken my denture?",
      answer:
        "Broken dentures can usually be repaired relatively easily. Please do not try and repair it yourself. Contact us to organise a professional repair.",
    },
  ];

  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <AlertTriangle className="w-4 h-4" />
                <span>Urgent Dental Care</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#6a3870]">Emergency Dental Care</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We understand the pain that toothache can cause
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Wherever possible, please contact us about your dental emergency
                during our surgery hours. If you need to be seen on the same
                day, please get in touch as early in the day as you can.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We offer convenient opening hours and always aim to see patients
                in pain on the same day. If your emergency is out of surgery
                hours, please call 02476 312256 and listen to the answer machine
                to hear details of our on-call dentist.
              </p>
              <div className="bg-[#63316b]/10 border border-[#63316b]/20 rounded-2xl p-6 mb-8">
                <p className="text-[#63316b] font-semibold text-lg">
                  If you have a dental emergency out of our opening hours,
                  please call 111.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Early */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-8 text-center">
              Get In Touch Early If You Have A Dental Emergency
            </h2>
            <p className="text-gray-700 text-lg text-center mb-8">
              Toothache is one of the most miserable and debilitating types of
              pain and it doesn't generally go away without a visit to the
              dentist for treatment. Don't suffer the pain of toothache; let us
              help you back to health.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="w-16 h-16 bg-[#63316b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#63316b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#6a3870] text-center mb-4">
                  Our Friendly Reception
                </h3>
                <p className="text-gray-700 text-center">
                  Our friendly reception team will aim to accommodate you as
                  early as possible.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="w-16 h-16 bg-[#63316b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-[#63316b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#6a3870] text-center mb-4">
                  Emergency Tips
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {emergencyTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#63316b] rounded-full mr-3 mt-2"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section with Left image and Right FAQ dropdowns */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="text-[#63316b]">Questions</span>
              </h2>
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

        {/* Callback CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Need Immediate Dental Help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let dental pain wait. Our team is ready to provide urgent
              care and relief.
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

export default Emergencies;
