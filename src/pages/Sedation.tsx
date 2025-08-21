import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, Phone,  ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExploreServicesCarousel from "../components/Marquee";


const Sedation = () => {
  const faqs = [
    {
      question: "Can't I just come to the dentist when I have a problem?",
      answer:
        "People with a dental phobia tend to avoid visiting the dentist until they have toothache or a dental problem that can no longer be ignored – but we urge patients, no matter how nervous, not to neglect their teeth. Poor dental health is linked to heart disease, bacterial lung infections, premature births, diabetes and strokes, meaning regular visits are vital to maintaining good general health and wellbeing.",
    },
    {
      question:
        "I'm worried the dentist will be shocked at the state of my mouth. Will I be told off?",
      answer:
        "No, we never tell our patients off! Dentists are trained medical professionals who will have seen many people with poor oral health. Even if your mouth is in a bad condition, your dentist will know the best ways to help you and will carry out your treatment in a professional manner.",
    },
    {
      question: "Won't my dental problem go away on its own?",
      answer:
        "No, we are afraid not. If you experience a problem with your dental health, trying to ignore it or taking painkillers to mask the pain will only help in the short term. Please visit us to help get to the bottom of the problem, as addressing the issue as soon as possible can mean your treatment is less costly, less painful and will take less time to put right.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
                Dental Sedation{" "}
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
                Stay Relaxed During Your Treatment with Dental Sedation
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  At Coventry Road Dental our aim is to make your dental visits
                  as calm and stress-free as possible. We do this in a number of
                  ways: by being patient and understanding, by taking things at
                  your pace and by being genuinely empathic. But for patients,
                  who are extremely phobic, sometimes that isn't enough and
                  that's when our investment in techniques that help relieve
                  anxiety, such as oral and IV sedation prove beneficial.
                </p>
              </div>
            </div>

            {/* Doctor Image */}
            <div>
                <img
                  src="/services/sedation/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Treatment With Sedation Is Comfortable Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Conquer Dental Anxiety with dental sedation
          </h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              You will feel very relaxed but fully co-operative. You may not
              remember anything about your treatment. Oral sedation involves
              taking a sedative one hour before any dental treatment and IV
              sedation involves receiving a small injection in the back of your
              hand/arm. Both methods will help you to relax and you will feel
              that treatment has only taken a short amount of time. Afterwards
              you will need somebody to drive you home and you should not drink
              any alcohol or go back to work.
            </p>


            <p className="text-gray-700 leading-relaxed text-lg">
              Dr Deol has been providing intravenous (IV) sedation to nervous
              patients for nearly 20 years, both in general practice and Guy's
              Hospital, London. As this is her particular area of interest she
              has achieved a Post Graduate Diploma in Sedation, so please rest
              assured you will be in safe and gentle hands. Please don't neglect
              your dental wellbeing because of severe anxiety – speak to us, we
              can help.
            </p>
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
                Get answers to common questions about Sedation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src="/services/faq1.jpg"
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

export default Sedation;
