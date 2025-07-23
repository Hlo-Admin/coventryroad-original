
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import ExploreServicesCarousel from "../components/Marquee";

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

  const faqs = [
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
      <div className="min-h-screen pt-24">
       {/* Hero Section */}
       <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl pt-8 font-bold text-gray-900 mb-6 animate-fadeInUp">
                Restore Your Smile with{" "}
                <span className="text-[#63316b]"><br />Restorative Treatment</span> <br /> in Coventry
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

        {/* Description */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Restorative Treatment
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                  Nothing can replace what nature gave us in the form of our natural teeth, which is why we put so much emphasis on maintaining them. But through dental disease, accidents and genetic disposition, our teeth sometimes need to be restored.
                  </p>
                  <p>
                  The appearance, and more importantly the function of our teeth, can greatly affect the way we feel about ourselves. An attractive smile can boost your self-esteem and even take years off your look. Being able to eat and chew without pain or hardship is something most of us take for granted.
                  </p>
                </div>
              </div>
              
              {/* Doctor Image */}
              <div>
                <img
                  src="/services/restorative/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Restore The Function And Appeal Of Your Teeth
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Restoring the function and appearance of your teeth is important to us, which is why we are delighted to offer great value restorative dentistry.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-[#63316b] hover:text-white group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#63316b] group-hover:text-white" />
                    </div>
                    <p className="text-gray-700 group-hover:text-white">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="text-[#63316b]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about Restorative Treatment
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
      <Footer />
    </>
  );
};

export default RestorativeTreatment;
