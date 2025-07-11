import { Phone, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Link } from 'react-router-dom';

const ChildrensDentistry = () => {
  useEffect(() => {
    document.title = "Children's Dentistry - Special Care for Kids | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How should I look after my child's teeth?",
      answer: [
        "Good dental health begins with you. By following a simple routine, you can keep your child's mouth clean and healthy by:",
        "Brushing your child's teeth twice daily with fluoride toothpaste.",
        "Having sugary drinks and snacks less often. Using a small to medium toothbrush.",
        "Using a pea-sized amount of toothpaste.",
        "Using small circular movements to clean your child's teeth.",
        "Changing your child's toothbrush regularly.",
        "Visiting your dentist for child check up every 3-6 months."
      ]
    },
    {
      question: "How often should my child visit the dentist?",
      answer: ["We recommend children visit the dentist at least twice a year, but your dentist will advise following your child's examination."]
    },
    {
      question: "At what age should I bring my child to the dentist for the first time?",
      answer: ["We recommend you bring children to your appointment from birth, so they grow up happy in the dental practice environment and comfortable with dental visits."]
    },
    {
      question: "How often should I change my child's toothbrush?",
      answer: ["For optimum dental hygiene and brushing effectiveness, we recommend you change your child's toothbrush every three months."]
    }
  ];

  const benefits = [
    "After school appointment times reserved for children between 3pm-5pm",
    "Care tailored to children's needs", 
    "Aim to educate children from an early age",
    "Tips on maintaining good dental health",
    "Visit the kids zone for fun and educational activities"
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
                <span className="text-[#63316b]">Children's Dentistry</span> at Coventry Road Dental Care
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

        {/* About Children's Dentistry Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Children's Dentistry
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Children are very special patients, and we do everything we can to make their visits as pleasant, positive, and fun as possible. Children are very important to us, and we firmly believe that part of our responsibility is to teach them good dental habits from an early age, so they maintain healthy smile for life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                We Welcome Children To Our Practice
              </h2>
              <div className="glass bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 mb-8">
                <p className="text-lg text-gray-700 text-center mb-8">
                  Our family practice offers good value treatment, and we invite parents to bring their children even before their first tooth appears to make sure they grow up happy and comfortable with visiting the dentist.
                </p>
                
                <div className="grid md:grid-cols-1 gap-4">
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
                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                      {faq.answer.map((point, index) => (
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

export default ChildrensDentistry;
