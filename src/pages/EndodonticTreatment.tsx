import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ExploreServicesCarousel from "../components/Marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EndodonticTreatment = () => {
  const benefits = [
    "Treatment carried out by trained professionals.",
    "Safe and caring environment.",
    "Nervous patients' needs are prioritised.",
    "Our aim is to save your natural teeth.",
    "We use the latest technology.",
    "We have your best interests at heart.",
  ];
  const faqs = [
    {
      question: "What does this treatment involve?",
      answer:
        "Endodontics involves the removal of pulp tissues from the centre of your tooth in the event that this becomes infected or inflamed. The aim of the treatment is to remove all infection from the root canal. The root is then cleaned and filled to prevent any further infection. A temporary filling is put in place and the tooth is left to settle. The tooth is checked at a later visit and when all the infection has cleared, the tooth is permanently restored.",
    },
    {
      question: "Will this treatment hurt?",
      answer:
        "All root canal treatment is carried out under local anaesthetic, by our caring dentists. We will minimise any discomfort and advise you of how to proceed following treatment.",
    },
    {
      question: "What happens if I'm nervous?",
      answer:
        "If you're a particularly nervous patient, our caring team will do everything we can to put you at ease. We can offer the option of sedation if necessary but generally we find that a considerate approach and going at your pace is all that's required.",
    },
    {
      question: "How do I look after my treated tooth?",
      answer:
        "A root canal treated tooth can function normally and can be maintained with routine dental care and good oral hygiene.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
              Restore Your Teeth with{" "}
              <span className="text-[#63316b]">
                <br />
                Root Canal Treatment{" "}
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

      {/* About Fillings Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Endodontic Treatment
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  There is nothing better than your natural teeth, which is why
                  wherever possible we will always try to save a tooth rather
                  than extract it – even when the pulp of the tooth has become
                  infected.
                </p>
                <p>
                  The chances are that if your tooth has become infected right
                  at its very core, you will be in pain, so contact us
                  immediately so that we can help. The danger of not doing so
                  could lead to the infection travelling down the root and
                  forming an abscess and this can be extremely painful.
                </p>
                <p>
                  Endodontic or root canal treatment prevents the tooth from
                  having to be taken out – even when the nerve of the tooth has
                  become infected.
                </p>
              </div>
            </div>

            {/* Doctor Image */}
            <div>
              <img
                src="/services/root canal/about.jpg"
                alt="Composite bonding treatment"
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
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Have This Treatment With Us​?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand that root canal treatment can strike fear into many
              people but our gentle dentists will quickly and effectively
              alleviate your pain – and aim to save your tooth.
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
              Frequently Asked <span className="text-[#63316b]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Fillings
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

      <Footer />
    </div>
  );
};

export default EndodonticTreatment;
