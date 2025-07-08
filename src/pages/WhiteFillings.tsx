import { Phone, Calendar, Shield, Heart, CheckCircle, Palette, Sparkles, User, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WhiteFillings = () => {
  useEffect(() => {
    document.title = "White Fillings - Mercury-Free Dental Fillings | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Palette className="w-6 h-6 text-[#63316b]" />,
      title: "Matched exactly to your tooth colour",
      description: "Perfectly blended with your natural teeth"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Mercury-free and safe",
      description: "Biocompatible materials for your health"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Hard-wearing and long-lasting",
      description: "Durable restoration that stands the test of time"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Seamless appearance, no dark spots",
      description: "Natural-looking results that won't show"
    },
    {
      icon: <User className="w-6 h-6 text-[#63316b]" />,
      title: "Placed by highly skilled cosmetic dentists",
      description: "Expert care from experienced professionals"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Ideal for front or back teeth",
      description: "Versatile solution for any location"
    }
  ];

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
        {/* Hero Section - Unified with image */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Content - Left Side */}
              <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Restore Your Smile with{" "}
                  <span className="text-[#63316b]">White Filling</span> <br /> in Coventry
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  A mercury-free solution that blends beautifully with your natural teeth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
                    <Phone className="w-5 h-5" />
                    <span>Request a Callback</span>
                  </button>
                  <button className="glass bg-white/80 backdrop-blur-sm border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book a Free Consultation</span>
                  </button>
                </div>
              </div>
              
              {/* Hero Image - Right Side - Optimized for mobile */}
              <div className="relative">
             <div className="flex justify-center items-center order-1 lg:order-2">
                <img
                  src="/services/white filling/hero.jpg"
                  alt="Dentures hero"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border border-white/20 bg-gradient-to-br from-[#63316b]/10 to-purple-100"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are White Fillings Section - with optimized image */}
       <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What are White Filling?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                In the past, fillings were made of silver-coloured amalgam, but this material offers one big disadvantage – it doesn’t resemble your natural teeth in appearance, which might cause you to feel self-conscious when smiling or laughing.
                  </p>
                  <p>
                 Tooth-coloured composite fillings are a fast and simple way of restoring your teeth and giving them a more natural look. Composite fillings are more difficult to place than silver fillings so may take your dentist slightly longer to complete.
                  </p>
                
                </div>
              </div>
              <div>
                <img
                  src="/services/white filling/filling.jpg"
                  alt="Dental implant procedure"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose White Fillings?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-2">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient-Centered Highlight Section */}
        <section className="py-16 bg-gradient-to-r from-[#63316b] to-[#63316b]/90 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 glass bg-white/5"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-6">
              "We believe that beautiful smiles should look natural and healthy — and you shouldn't have to hide yours because of a silver spot when you laugh."
            </blockquote>
            <cite className="text-lg opacity-90">— Coventry Road Dental Care Team</cite>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                White Filling FAQs
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
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

        {/* Service Tiles */}
        <ServiceTiles />

        {/* Closing Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              A small fix can make a big difference.
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let your smile shine again — naturally and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                <span>Request Callback</span>
              </button>
              <Link to="/" className="glass bg-white/80 backdrop-blur-sm border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book My Consultation</span>
              </Link>
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
