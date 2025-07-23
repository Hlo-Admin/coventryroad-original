
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import ExploreServicesCarousel from "../components/Marquee";

const Fillings = () => {
  useEffect(() => {
    document.title = "Fillings - Restore Your Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What are fillings made from?",
      answer: "Traditionally, fillings have been made from amalgam. You will recognise them as the standard silver-coloured ones commonly seen. Alternatively, and becoming much more popular, we use composite resin that can be moulded to the exact shape and colour of your tooth. Composite fillings look more natural and help you to maintain a confident smile."
    },
    {
      question: "Can anybody have white fillings?",
      answer: "Yes, composite fillings are available for everyone but the decision of whether to use amalgam or composite is one that your dentist will discuss with you on a case-by-case basis. It can depend on the size of the filling, where the tooth that needs filling is and more."
    },
    {
      question: "Can I replace my amalgam fillings with white ones?",
      answer: "It is usually recommended to change old silver coloured amalgam fillings only when your dentist decides that an existing filling is in clinical need of replacement. We recommend a discussion with your dentist before any decision is made."
    }
  ];

  const benefits = [
    "Gentle and caring approach",
    "Restore teeth to strength",
    "Minimise pain and discomfort",
    "NHS and private options available",
    "High-quality materials",
    "Highly skilled, experienced dentists"
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
                Restore Your Smile with{" "}
                <span className="text-[#63316b]"><br />Fillings</span> <br /> in Coventry
              </h1>
             
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <Link to="/contact">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button></Link>
                <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book My Free Consultation</span>
                </button></a>
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
                  Fillings
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Most dentists don't enjoy drilling and filling teeth – contrary to what you might think! At Coventry Road, we much prefer to educate our patients so that problems are prevented, and fillings are unnecessary. We do this by promoting the importance of regular dental visits and hygienist appointments, providing brushing tips to keep your teeth and gums in the best of condition.
                  </p>
                  <p>
                    If fillings are required, rest assured that we are gentle and considerate of your needs. Amalgam (silver-coloured) fillings are available on the NHS but our patients can also choose the more natural-looking white fillings, and pay the difference. Options will be presented during your appointment so you can make an informed decision.
                  </p>
                </div>
              </div>
              
              {/* Doctor Image */}
              <div>
                <img
                  src="/services/fillings/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>


         {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Feel Reassured By Our Approach
            </h2>
            <p className=" text-lg text-gray-700 text-center mb-8">
                  If you do require a filling, we provide amalgam (metal) fillings as well as white fillings that are matched exactly to your tooth colour for a more natural look.
                </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              // Center the last card if it's alone in the last row (not a multiple of 3)
              const isLast = index === benefits.length - 1;
              const needsCenter = benefits.length % 3 !== 0 && isLast;
              return (
                <div
                  key={index}
                  className={
                    `bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:bg-[#63316b] hover:text-white` +
                    (needsCenter
                      ? " lg:col-span-3 flex flex-col items-center justify-center"
                      : "")
                  }
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                  
                  </div>
                  <p className="font-medium group-hover:text-white">
                    {benefit}
                  </p>
                </div>
              );
            })}
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

export default Fillings;
