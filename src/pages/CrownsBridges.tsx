
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Phone, CheckCircle } from "lucide-react";

const CrownsBridges = () => {
  const benefits = [
    "Work is undertaken by skilled and dedicated dentists.",
    "Treatment is tailored to your needs.",
    "A treatment plan with options that reflect your budget is discussed.",
    "Restore your mouth's function.",
    "Transform your smile.",
    "Protect and strengthen filled teeth.",
    "Repair broken teeth.",
    "Boost your self esteem."
  ];

  const faqs = [
    {
      question: "What are crowns made from?",
      answer: "Crowns, or caps as they are sometimes known, are porcelain/metal or composite covers for damaged or unsightly teeth. They can be made from gold, porcelain or a combination of both, and more recently ceramic. Ceramic crowns are carefully crafted to look more natural and blend in with the rest of your teeth and can eliminate dark metallic lines around the gums."
    },
    {
      question: "What is a bridge?",
      answer: "Bridges work by filling (or bridging) the gap created by one or more missing teeth, and are made up of two or more crowns on either side of the gap. They work and feel like real teeth."
    },
    {
      question: "How long do dental bridges last?",
      answer: "A dental bridge is designed to last for many years, so it's important to look after the bridge in the same way as natural teeth, by sticking to a good daily oral routine and attending regular hygiene visits."
    },
    {
      question: "What if one of my crowns has fallen off or is loose?",
      answer: "Keep your crown safe so it can be re-cemented as soon as possible to avoid damage. If it is loose – the same advice applies. Please contact us immediately."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="text-sm font-medium text-[#63316b] bg-[#63316b]/10 px-3 py-1 rounded-full">
              Coventry Road Dental
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crowns & Bridges
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Restore Your Smile with Crowns & Bridges in Coventry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
            <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Crowns & Bridges</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Crown and bridge treatment is a reliable solution to replace broken, damaged or missing teeth.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Treatment for restoring you mouth's function includes crowns (or caps) that are carefully crafted to look natural and blend in with the rest of your teeth. Crowns can be used to strengthen teeth that have been weakened by decay or a large filling; to protect fractured, cracked and worn teeth; to improve the shape, alignment and shade of a tooth and to help strengthen the tooth after root canal treatment.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Bridges can be used to permanently fit a replacement tooth or teeth by being carefully attached to adjacent teeth and replace missing ones.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              src="/lovable-uploads/69f725c9-fe56-4589-ba0f-98a1066a2646.png"
              alt="Dental professional"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Request a callback</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Reassuring Dental Care To Restore Your Teeth's Function
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Our dentists work hard to ensure your teeth remain fit for purpose so you can eat, chew, smile and do all the other things you expect, without experiencing pain or feeling self-conscious.
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

      {/* Bottom CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Restore Your Smile with Crowns & Bridges in Coventry
          </h3>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your consultation today and take the first step towards your perfect smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrownsBridges;
