import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExploreServicesCarousel from "../components/Marquee";


const CrownsBridges = () => {
  const benefits = [
    "Work is undertaken by skilled and dedicated dentists.",
    "Treatment is tailored to your needs.",
    "A treatment plan with options that reflect your budget is discussed.",
    "Restore your mouth's function.",
    "Transform your smile.",
    "Protect and strengthen filled teeth.",
    "Repair broken teeth.",
    "Boost your self esteem.",
  ];

  const faqs = [
    {
      question: "What are crowns made from?",
      answer:
        "Crowns, or caps as they are sometimes known, are covers for damaged or unsightly teeth. They can be made from gold, porcelain or a combination of both, and more recently ceramic. Ceramic crowns are carefully crafted to look more natural and blend in with the rest of your teeth and can eliminate dark metallic lines around the gums.",
    },
    {
      question: "What is a bridge?",
      answer:
        "Bridges work by filling (or bridging) the gap created by one or more missing teeth, and are made up of two or more crowns on either side of the gap. They work and feel like real teeth.",
    },
    {
      question: "How long do dental bridges last?",
      answer:
        "A dental bridge is designed to last for many years, so it's important to look after the bridge in the same way as natural teeth, by sticking to a good daily oral routine and attending regular hygiene visits.",
    },
    {
      question: "What if one of my crowns has fallen off or is loose?",
      answer:
        "Keep your crown safe so it can be re-cemented as soon as possible to avoid damage. If it is loose – the same advice applies. Please contact us immediately.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
              Restore Your Smile with{" "}
              <span className="text-[#63316b]">
                <br />
                Crowns & Bridges
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

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Crowns & Bridges
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Crown and bridge treatment is a reliable solution to replace
                  broken, damaged or missing teeth. It is the treatment for
                  restoring our mouth’s function.
                </p>
                <p>
                  Crowns can be used to strengthen teeth that have been weakened
                  by decay or a large filling, to protect fractured, cracked and
                  worn teeth, to improve the shape, alignment and shade of a
                  tooth and to help strengthen the tooth after root canal
                  treatment.
                </p>
                <p>
                  Bridges can be used to permanently fit a replacement tooth or
                  teeth by being carefully attached to adjacent teeth and
                  replace missing ones.
                </p>
              </div>
            </div>

            {/* Doctor Image */}
            <div>
                <img
                  src="/services/crown bridges/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Why should you choose Coventry Road Dental Care for your treatment
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Our dentists work hard to ensure your teeth remain fit for purpose
            so you can eat, chew, smile and do all the other things you expect,
            without experiencing pain or feeling self-conscious.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
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
                Get answers to common questions about Crowns and bridges
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

      <Footer />
    </div>
  );
};

export default CrownsBridges;
