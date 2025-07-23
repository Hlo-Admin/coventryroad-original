
import { Phone, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExploreServicesCarousel from "../components/Marquee";

const DentalHygiene = () => {
  useEffect(() => {
    document.title = "Dental Hygiene - Preventive Care | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What can I do to look after my teeth at home?",
      answer: "Maintaining good oral hygiene involves brushing your teeth twice daily with fluoride toothpaste and reducing the frequency of sugary drinks and snacks to help prevent tooth decay. Use a small to medium toothbrush with soft to medium multi-tufted, round-ended nylon bristles, and remember to change your toothbrush regularly—at least every three months. Additionally, clean between your teeth daily using dental floss or interdental brushes to remove plaque and food particles from areas your toothbrush can’t reach."
    },
    {
      question: "What happens if I don't brush my teeth?",
      answer: "If you don't brush your teeth, plaque builds up and becomes calculus which can only be removed by a hygienist. Efficient and regular removal of calculus and plaque build up is the most important factor in keeping our mouths healthy and preventing gum disease."
    },
    {
      question: "Why is dental hygiene important?",
      answer: "Maintaining your dental wellbeing is vital and your regular examinations with our dental team should form part of any essential healthy living regime. Regular removal of plaque and tartar that develops between dental visits can reduce the risk of developing several serious medical conditions, especially as research links gum disease to arthritis, heart disease, strokes, diabetes and problems with pregnancy such as premature births and low birth-weight babies. A staggering 90 per cent of us suffer from gum disease at some point in our lives but with regular, professional care the risks can be controlled."
    },
    {
      question: "What is gum disease?",
      answer: "Gum disease is a common condition that can cause bad breath and sore, swollen or bleeding gums. If left untreated, it can eventually lead to tooth loss. It can also affect your overall health, with links now established between gum disease, heart disease, diabetes, and strokes. That is why regular visits to your dentist and hygienist are so important."
    },
    {
      question: "Why is flossing important?",
      answer: "Flossing should be done each day as part of a good oral health regime, to get rid of plaque and hard tartar that builds up between our teeth. If it isn't removed, the bacteria in the plaque can irritate the gums and cause inflammation, which leads to gum disease."
    },
    {
      question: "What can I do to look after my teeth at home?",
      answer: ["Brushing your teeth twice daily with fluoride toothpaste.", "Reducing the frequency of sugary drinks and snacks." ,"Using a small to medium toothbrush with soft to medium multi-tufted, round-ended nylon bristles. ","Changing your toothbrush regularly, at least three-monthly. ","Cleaning daily between your teeth with dental floss or interdental brushes." ,"Visiting your dentist and hygienist at least once a year."]
    },
    {
      question: "How often should I visit the dentist to prevent problems?",
      answer: "We recommend our patients visit us at least once a year, but your dentist will advise you following your dental examination."
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
                <span className="text-[#63316b]"><br />Dental Hygiene</span> <br /> in Coventry
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

        {/* About Dental Hygiene Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Dental Hygiene
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                  Neglecting the wellbeing of our teeth can lead to decay, gum disease and a whole host of other more serious medical issues. That's why it's essential to keep your mouth clean and healthy. A simple homecare regime of brushing and flossing, good diet and regular visits to your dentist & hygienist are all it takes to prevent most dental problems.
                  </p>
                  
                </div>
              </div>
              
              {/* Doctor Image */}
              <div>
                <img
                  src="/services/dental hygiene/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Preventive Approach Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                A Preventive Approach Is Best
              </h2>
              <div className="glass bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Healthy smiles start and end with good dental hygiene routines, which is why our focus is on preventing problems rather than just fixing them! Regular visits to your dentist for a thorough examination, followed by a visit to a hygienist for a scale and polish provides a host of benefits: Fewer fillings because problems are caught early, less dental decay due to regular examinations, a decreased chance of experiencing toothache, more attractive teeth, stronger gums, and fresher breath.
                  </p>
                  <p>
                    By attending the hygienist regularly, you reduce the risk of serious medical conditions, prevent gum recession, prevent loose or drifting teeth and reduce tooth sensitivity.
                  </p>
                </div>
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
                Get answers to common questions about Dental Hygiene
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
              We would love to help you achieve your perfect smile as discreetly
              as possible. Book your free consultation and let's discuss your
              options for a straight smile.
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

export default DentalHygiene;
