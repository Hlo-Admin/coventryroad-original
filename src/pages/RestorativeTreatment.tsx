
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Calendar, CheckCircle } from "lucide-react";

const RestorativeTreatment = () => {
  const benefits = [
    "Transform smiles with cosmetic solutions",
    "Minimally invasive composite bonding",
    "Veneers and crowns",
    "White fillings and teeth whitening",
    "Smile rejuvenation and instant orthodontics",
    "Dental implants for missing teeth",
    "Treatment carried out by experienced dental professionals",
    "Comfortable surroundings"
  ];

  const faqItems = [
    {
      question: "What does restorative treatment involve?",
      answer: "Here at Coventry Road, we restore teeth using a combination of treatments including dental implants, crowns and bridges, dentures and veneers to help recreate life-changing smiles. Our gentle dentists will always provide a treatment plan outlining their recommendations and providing benefits and drawbacks to the options provided so you can make an informed decision."
    },
    {
      question: "Is it better to replace missing teeth?",
      answer: "When teeth are lost, on-going shrinkage of the jawbone occurs making the face look older. It also puts more pressure on the remaining teeth, sometimes necessitating them to perform functions they were not intended to do and leading to further problems. Replacing teeth, usually with dental implants, is an effective way to stop this happening."
    },
    {
      question: "How do I look after my new smile?",
      answer: "Following any restorative treatment your dentist will provide thorough instruction. Generally, following a healthy mouth regime as outlined on our hygiene page will help keep your restored smile at its best."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Restorative Treatment
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Restore Your Smile with Coventry Road Dental Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Request a callback</span>
              </button>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Nothing can replace what nature gave us in the form of our natural teeth, which is why we put so much emphasis on maintaining them. But through dental disease, accidents and genetic disposition, our teeth sometimes need to be restored.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The appearance, and more importantly the function of our teeth, can greatly affect the way we feel about ourselves. An attractive smile can boost your self-esteem and even take years off your look. Being able to eat and chew without pain or hardship is something most of us take for granted.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Restore The Function And Appeal Of Your Teeth
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Restoring the function and appearance of your teeth is important to us, which is why we are delighted to offer great value restorative dentistry.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-[#63316b] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQs</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#63316b] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Smile?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your restorative treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RestorativeTreatment;
