
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Phone } from 'lucide-react';

const EndodonticTreatment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Endodontic Treatment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restore Your Smile with Endodontic Treatment in Coventry
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Endodontic Treatment</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              There is nothing better than your natural teeth, which is why wherever possible we will always try to save a tooth rather than extract it – even when the pulp of the tooth has become infected.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The chances are that if your tooth has become infected right at its very core, you will be in pain, so contact us immediately so that we can help. The danger of not doing so could lead to the infection travelling down the root and forming an abscess and this can be extremely painful.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Endodontic or root canal treatment prevents the tooth from having to be taken out – even when the nerve of the tooth has become infected.
            </p>
          </div>

          {/* Doctor Image */}
          <div className="mb-12 text-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=face"
              alt="Dental professional"
              className="mx-auto rounded-2xl shadow-lg w-full max-w-md h-80 object-cover"
            />
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Request a callback</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Have This Treatment With Us?</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            We understand that root canal treatment can strike fear into many people but our gentle dentists will quickly and effectively alleviate your pain – and aim to save your tooth.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Treatment carried out by trained professionals.",
              "Safe and caring environment.",
              "Nervous patients' needs are prioritised.",
              "Our aim is to save your natural teeth.",
              "We use the latest technology.",
              "We have your best interests at heart."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-[#63316b] rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What does this treatment involve?</h3>
              <p className="text-gray-700 leading-relaxed">
                Endodontics involves the removal of pulp tissues from the centre of your tooth in the event that this becomes infected or inflamed. The aim of the treatment is to remove all infection from the root canal. The root is then cleaned and filled to prevent any further infection. A temporary filling is put in place and the tooth is left to settle. The tooth is checked at a later visit and when all the infection has cleared, the tooth is permanently restored.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Will this treatment hurt?</h3>
              <p className="text-gray-700 leading-relaxed">
                All root canal treatment is carried out under local anaesthetic, by our caring dentists. We will minimise any discomfort and advise you of how to proceed following treatment.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens if I'm nervous?</h3>
              <p className="text-gray-700 leading-relaxed">
                If you're a particularly nervous patient, our caring team will do everything we can to put you at ease. We can offer the option of sedation if necessary but generally we find that a considerate approach and going at your pace is all that's required.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How do I look after my treated tooth?</h3>
              <p className="text-gray-700 leading-relaxed">
                A root canal treated tooth can function normally and can be maintained with routine dental care and good oral hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Restore Your Smile with Endodontic Treatment in Coventry</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EndodonticTreatment;
