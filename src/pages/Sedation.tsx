
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar } from 'lucide-react';
import { Link } from "react-router-dom";

const Sedation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sedation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay Relaxed During Your Treatment with Sedation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              At Coventry Road Dental Practice our aim is to make your dental visits as calm and stress-free as possible. We do this in a number of ways: by being patient and understanding, by taking things at your pace and by being genuinely empathic. But for patients, who are extremely phobic, sometimes that isn't enough and that's when our investment in techniques that help relieve anxiety, such as oral and IV sedation prove beneficial.
            </p>
          </div>

          {/* Doctor Image */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-lg max-w-md mx-auto">
              <img
                src="/services/CompositeBonding/composite-bonding.jpeg"
                alt="Sedation treatment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Request a callback</span>
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment With Sedation Is Comfortable Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Treatment With Sedation Is Comfortable</h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              You will feel very relaxed but fully co-operative. You may not remember anything about your treatment. Oral sedation involves taking a sedative one hour before any dental treatment and IV sedation involves receiving a small injection in the back of your hand/arm. Both methods will help you to relax and you will feel that treatment has only taken a short amount of time. Afterwards you will need somebody to drive you home and you should not drink any alcohol or go back to work.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Dr Deol has been providing intravenous sedation to anxious patients for nearly 20 years, both in general practice and Guy's Hospital, London. As this is her particular area of interest she has achieved a Post Graduate Diploma in Sedation, so please rest assured you will be in safe and gentle hands. Please don't neglect your dental wellbeing because of severe anxiety – speak to us, we can help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can't I just come to the dentist when I have a problem?</h3>
              <p className="text-gray-700">People with a dental phobia tend to avoid visiting the dentist until they have toothache or a dental problem that can no longer be ignored – but we urge patients, no matter how nervous, not to neglect their teeth. Poor dental health is linked to heart disease, bacterial lung infections, premature births, diabetes and strokes, meaning regular visits are vital to maintaining good general health and wellbeing.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">I'm worried the dentist will be shocked at the state of my mouth. Will I be told off?</h3>
              <p className="text-gray-700">No, we never tell our patients off! Dentists are trained medical professionals who will have seen many people with poor oral health. Even if your mouth is in a bad condition, your dentist will know the best ways to help you and will carry out your treatment in a professional manner.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Won't my dental problem go away on its own?</h3>
              <p className="text-gray-700">No, we are afraid not. If you experience a problem with your dental health, trying to ignore it or taking painkillers to mask the pain will only help in the short term. Please visit us to help get to the bottom of the problem, as addressing the issue as soon as possible can mean your treatment is less costly, less painful and will take less time to put right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Relaxed During Your Treatment with Sedation</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let anxiety prevent you from getting the dental care you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sedation;
