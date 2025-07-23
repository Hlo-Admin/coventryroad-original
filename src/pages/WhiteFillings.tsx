
import { Phone, Calendar, Shield, Heart, CheckCircle, Palette, Sparkles, ArrowRight, User, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ExploreServicesCarousel from "../components/Marquee";

const WhiteFillings = () => {
  useEffect(() => {
    document.title = "White Fillings - Mercury-Free Dental Fillings | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What are white fillings made from?",
      answer: "A material called composite resin that can be moulded to the exact shape and colour of your tooth."
    },
    {
      question: "Are white fillings for me?",
      answer: "If you prefer the natural look of mercury-free fillings, white fillings may be an option for you. Call us on 02476312256 or email us at reception@deoldental.com and our friendly team will be on hand to discuss the options and help you decide what's right for you."
    },
    {
      question: "Can anybody have white fillings?",
      answer: "Yes, composite fillings are available for everyone, depending on your needs, which we can discuss during your appointment."
    },
    {
      question: "Can I replace my amalgam fillings with white ones?",
      answer: "That's something you should discuss with your dentist. It is not always the right decision to remove perfectly good, existing amalgam fillings. We would be happy to discuss your needs and agree solutions that improve the look of your smile."
    }
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
                <span className="text-[#63316b]"><br />White Fillings</span> <br /> in Coventry
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

        {/* About White Fillings Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  White Fillings
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    In the past, fillings were made of silver-coloured amalgam, but this material offers one big disadvantage – it doesn't resemble your natural teeth in appearance, which might cause you to feel self-conscious when smiling or laughing.
                  </p>
                  <p>
                    Tooth-coloured composite fillings are a fast and simple way of restoring your teeth and giving them a more natural look. Composite fillings are more difficult to place than silver fillings so may take your dentist slightly longer to complete.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/white filling/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Have This Treatment Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Have This Treatment with Us?
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="glass bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tooth-coloured composite fillings are a fast and simple way of restoring your teeth and giving them a more natural look. Beautiful smiles should be healthy and look natural, which is why we are excited to offer white fillings matched exactly to your tooth colour. This treatment improves the appearance of your smile; composite fillings are hard wearing, natural looking and blend in with the rest of your teeth. It is a mercury free, private cosmetic treatment option placed by our highly skilled dentists.
                </p>
              </div>
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
                Get answers to common questions about White Fillings
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

export default WhiteFillings;
