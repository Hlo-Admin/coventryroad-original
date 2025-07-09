
import { Phone, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';

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
        <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-12 lg:py-16">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Restore Your Smile with{" "}
                <span className="text-[#63316b]">Fillings</span> in Coventry
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                    Most dentists don't enjoy drilling and filling teeth – contrary to what you might think! At Coventry Road, we much prefer to educate our patients so that problems are prevented, and tooth fillings are unnecessary. We do this by promoting the importance of regular dental visits and hygienist appointments, providing brushing tips to keep your teeth and gums in the best of condition.
                  </p>
                  <p>
                    If fillings are required, rest assured that we are gentle and considerate of your needs. Amalgam (silver-coloured) fillings are available on the NHS but our patients can also choose the more natural-looking white fillings, and pay the difference. Options will be presented during your appointment so you can make an informed decision.
                  </p>
                </div>
              </div>
              
              {/* Doctor Image */}
              <div className="glass bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                <img 
                  src="/lovable-uploads/6ea5a8aa-7b9b-4b0a-a3ff-ba1823a3dfeb.png" 
                  alt="Professional dentist" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Feel Reassured By Our Approach
              </h2>
              <div className="glass bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 mb-8">
                <p className="text-lg text-gray-700 text-center mb-8">
                  If you do require a filling, we provide amalgam (metal) fillings as well as white fillings that are matched exactly to your tooth colour for a more natural look.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#63316b] rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                FAQs
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#63316b] to-[#63316b]/90 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 glass bg-white/5"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Restore Your Smile?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your consultation today and let us help you choose the perfect filling solution.
            </p>
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              <span>Request a Callback</span>
            </button>
          </div>
        </section>

        {/* Service Tiles */}
        <ServiceTiles />
      </div>
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default Fillings;
