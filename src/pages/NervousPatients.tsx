import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import ExploreServicesCarousel from "../components/Marquee";

const NervousPatients = () => {
  const benefits = [
    "Guide you through the treatment process",
    "Go at your pace",
    "Hold your hand",
    "Comforting surroundings",
    "Sympathetic and supporting dental team",
    "Sedation is an option",
  ];

  const faqs = [
    {
      question: "What happens at my first appointment?",
      answer:
        "Our new patient appointments are unhurried giving us time to put you at ease and go at your pace. We like to get to know you, give your mouth a thorough examination and understand how we can help you achieve better dental health.",
    },
    {
      question: "Do I have to commit to treatment immediately?",
      answer:
        "Sometimes all we will do at your first appointment is talk. This is especially helpful for nervous patients who want to have a look around, find out more about our approach and get a feel for our practice without the worry of having an examination – or even sitting in the dental chair if you do not want to.",
    },
    {
      question: "Can I come in to look around the practice?",
      answer:
        "Yes, we invite all new patients to come and get a feel for what we are about before committing to joining our practice for treatment, so you feel as comfortable as possible and can rest assured you've made the right choice.",
    },
    {
      question: "Is sedation an option?",
      answer:
        "Yes, we can refer you to our sister practice if you simply cannot face the thought of having treatment. Rest assured, we will do everything we can to make you feel comfortable and to meet your specific needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nervous Patients
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Restore Your Smile with Coventry Road Dental Care
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Stay Relaxed During Your Treatment
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Around 50 per cent of the population does not visit the
                  dentist – and a quarter of those fail to do so because they
                  are too afraid. These statistics cause us great concern here
                  at Coventry Road Dental Care and we do everything we can to
                  ensure that our patients look forward to coming to see us,
                  whatever their age.
                </p>
                <p>
                  Being frightened of the dentist can mean you avoid your
                  essential examinations, and only visit when you are in pain or
                  have a dental emergency. We understand this and will not judge
                  you. There isn't anything that will shock or surprise us and
                  we will do all we can to help put nervous patients at ease, so
                  that eventually you may even look forward to your appointments
                  with us.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/services/nervous/about.jpg"
                alt="Composite bonding treatment"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Let Us Help Put You At Ease
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All our dentists and dental nurses have an excellent chairside
              manner and offer unhurried appointments taken at a pace you are
              comfortable with. If you still feel too nervous to undergo
              treatment and would prefer sedation, we can refer you to our
              sister practice.
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
                Get answers to common questions about Nervous Patients
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
    

      {/* Final CTA */}

      <Footer />
    </div>
  );
};

export default NervousPatients;
