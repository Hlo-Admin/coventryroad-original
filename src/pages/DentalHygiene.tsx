
import { Phone, Calendar, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Link } from 'react-router-dom';

const DentalHygiene = () => {
  useEffect(() => {
    document.title = "Dental Hygiene - Preventive Care | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
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
        <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-12 lg:py-16">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Refresh Your Smile with{" "}
                <span className="text-[#63316b]">Dental Hygiene</span> in Coventry
              </h1>
              
             
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button></Link>
                <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
                <button className="glass bg-white/80 backdrop-blur-sm border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book a Free Consultation</span>
                </button></a>
              </div>
            </div>
          </div>
        </section>

        {/* About Dental Hygiene Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Dental Hygiene
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Neglecting the wellbeing of our teeth can lead to decay, gum disease and a whole host of other more serious medical issues. That's why it's essential to keep your mouth clean and healthy. A simple homecare regime of brushing and flossing, good diet and regular visits to your dentist & hygienist are all it takes to prevent most dental problems.
                </p>
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
                    Healthy smiles start and end with good dental hygiene routines, which is why our focus is on preventing problems rather than just fixing them! Regular visits to your dentist for a thorough examination, followed by a hygiene visit for a scale and polish provides a host of benefits: Fewer fillings because problems are caught early, less dental decay due to regular examinations, a decreased chance of experiencing toothache, more attractive teeth, stronger gums, and fresher breath.
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
                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                    {answerPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  </div>
                ))}
              </div>
            </div>
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

export default DentalHygiene;
