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
import ExploreServicesCarousel from "../components/Marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sleepwell = () => {
  useEffect(() => {
    document.title =
      "Mandibular Advancement Splint (Sleepwell) - Stop Snoring | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Clinically proven treatment for snoring and mild to moderate Obstructive Sleep Apnoea (OSA)",
    "Custom-made, comfortable mandibular advancement splint",
    "Non-invasive solution to improve sleep quality",
    "Reduces the risk of relationship issues caused by loud snoring",
    "Helps alleviate daytime sleepiness and stress",
    "Improves overall health and well-being",
    "Easy to use and maintain",
    "Personalized fitting by dental professionals",
  ];

  const faqs = [
    {
      question: "What is a Mandibular Advancement Splint (MAS)?",
      answer:
        "A Mandibular Advancement Splint is a custom-made device that gently moves the lower jaw forward during sleep. This helps keep the airway open, reducing or eliminating snoring and mild to moderate sleep apnoea.",
    },
    {
      question: "How does the Sleepwell MAS work?",
      answer:
        "The Sleepwell MAS works by slightly advancing the lower jaw, which prevents the soft tissues in the throat from collapsing and blocking the airway. This helps maintain an open airway, reducing snoring and improving breathing during sleep.",
    },
    {
      question: "Is the Sleepwell MAS comfortable to wear?",
      answer:
        "Yes, the Sleepwell MAS is custom-made to fit your mouth precisely. It is designed to be comfortable and minimally intrusive, allowing you to sleep naturally while effectively addressing snoring and sleep apnoea.",
    },
    {
      question: "Who can benefit from a Mandibular Advancement Splint?",
      answer:
        "Individuals who snore loudly or suffer from mild to moderate obstructive sleep apnoea can benefit from a Mandibular Advancement Splint. It is particularly helpful for those who find CPAP machines uncomfortable or inconvenient.",
    },
    {
      question: "How long does a Sleepwell MAS last?",
      answer:
        "With proper care and maintenance, a Sleepwell MAS can last several years. Regular check-ups with your dentist will help ensure the device continues to fit correctly and remains effective.",
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
          <div className="absolute inset-0 bg-[url('/home/services/sleepwell.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
                Transform Your Sleep with{" "}
                <span className="text-[#63316b]">
                  <br />
                  Sleepwell MAS
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
                  Mandibular Advancement Splint (Sleepwell)
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Snoring is more than just a nighttime nuisance. It's
                    estimated that over 45% of the population snores, leading to
                    disrupted sleep for both the snorer and their bed partner.
                    Simple snoring can reach up to 100 decibels – equivalent to
                    a pneumatic drill – and can lead to significant relationship
                    issues, daytime sleepiness, increased stress, and
                    depression.
                  </p>
                  <p>
                    At Coventry Road Dental Care, we offer the Sleepwell
                    Mandibular Advancement Splint (MAS), the most clinically
                    proven treatment to stop snoring and address mild to
                    moderate Obstructive Sleep Apnoea (OSA). Our custom-made
                    device provides a non-invasive solution to improve your
                    sleep quality and overall well-being.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/home/services/sleepwell.jpg"
                  alt="Sleepwell Mandibular Advancement Splint"
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
                Transform Your Sleep and Health <br /> with Sleepwell MAS
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our Sleepwell Mandibular Advancement Splint is designed to
                provide a comfortable, effective solution to snoring and mild
                sleep apnoea. By gently repositioning your jaw, we help you and
                your partner enjoy a peaceful, restful night's sleep.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-[#63316b] hover:text-white group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#63316b] group-hover:text-white" />
                    </div>
                    <p className="text-gray-700 group-hover:text-white">
                      {benefit}
                    </p>
                  </div>
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
                Get answers to common questions about Sleepwell MAS
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src="/services/faq.jpg"
                  alt="Sleepwell MAS FAQ"
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
                Ready to Improve Your Sleep?
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                Don't let snoring disrupt your life and health. Book a free
                consultation to learn how Sleepwell MAS can transform your sleep
                and well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                  target="_blank"
                >
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                  </button>
                </a>
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

export default Sleepwell;
