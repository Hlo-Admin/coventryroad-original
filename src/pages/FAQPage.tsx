import { useState } from "react";
import { Phone, HelpCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "Can I visit the practice before I make an appointment?",
      answer:
        "Yes, it's common for patients – particularly those who are anxious about visiting the dentist– to come for a look around to get a feel for our practice and team before they commit to joining. We'd be delighted to welcome you and show you around. Just call or email us on 02476 312256 or reception@deoldental.co.uk",
    },
    {
      question: "Are you taking on new NHS patients?",
      answer:
        "Yes, we are a dedicated NHS practice and would welcome your patronage as an NHS patient. We provide a wide range of both NHS and private dental treatments so you can choose what is best for you on a case-by-case basis. All you need to do is call us on 02476 312256 or email us at reception@deoldental.co.uk we can guide you through the options and make an appointment for you",
    },
    {
      question: "Do you offer an extensive range of services?",
      answer:
        "Yes, we offer patients a full range of treatments from preventive dentistry to help you maintain healthy teeth and gums, to cosmetic dentistry to enhance your smile. Patients can access dental treatments on the NHS or privately.",
    },
    {
      question: "What is preventative care?",
      answer:
        "Regular dental examinations enable us to keep a close eye on your teeth and gums and spot potential problems early – such as gum disease – in order to save you time and expense. By visiting the dentist as regularly as recommended and maintaining a healthy oral hygiene regime at home, together we can prevent the onset of costly and painful dental disease.",
    },
    {
      question: "Can I walk in for an appointment?",
      answer:
        "To guarantee an appointment, it's really best for you to make one in advance by calling us or emailing us. If it's an emergency, however, we will try to find a slot (we keep slots every day for this purpose) so you can see us as soon as possible.",
    },
    {
      question: "Do you offer convenient dental appointments?",
      answer:
        "Coventry Road Dental Care is open 8.00am – 6.00pm Monday to Friday and 8.00am – 1pm on Saturdays. In addition to convenient opening hours, our twelve dental surgeries mean we can accommodate you after work or your children after school. Call us to make an appointment that fits in with your busy schedule.",
    },
    {
      question: "What's the difference between NHS and private treatment?",
      answer:
        "NHS dentistry offers great value for money and provides for most of your routine dental needs. All our NHS patients receive a very high level of dental care and are very happy with the service they receive. Private patients enjoy a wider choice of treatments and materials. NHS patients are offered the option to access private care should they wish, on a treatment-by-treatment basis.",
    },
  ];

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
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#6a3870]">Frequently Asked</span>
                <br />
                <span className="text-3xl text-gray-700">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your Questions, Our Answers
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Choosing a new dentist can be a daunting proposition. You want a
                practice that is conveniently located, provides good
                availability of appointments, offers a comprehensive range of
                treatments at great value and most importantly, whose team is
                friendly, gentle and welcoming. Welcome to Coventry Road Dental
                Care.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Here are the answers to some of the most common questions we are
                asked but if you would like to chat with us, please just call.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 text-left font-bold text-lg text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors">
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

        {/* Callback CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Have More Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our friendly team is ready to help you with any additional
              questions or concerns you may have.
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

export default FAQPage;
