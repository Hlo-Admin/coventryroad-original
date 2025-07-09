
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Calendar } from 'lucide-react';

const NervousPatients = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nervous Patients
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Restore Your Smile with Coventry Road Dental Care
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Around 50 per cent of the population does not visit the dentist – and a quarter of those fail to do so because they are too afraid. These statistics cause us great concern here at Coventry Road Dental Care and we do everything we can to ensure that our patients look forward to coming to see us, whatever their age.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Being frightened of the dentist can mean you avoid your essential examinations, and only visit when you are in pain or have a dental emergency. We understand this and will not judge you. There isn't anything that will shock or surprise us and we will do all we can to help put nervous patients at ease, so that eventually you may even look forward to your appointments with us.
            </p>
          </div>

          {/* Doctor Image */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-lg max-w-md mx-auto">
              <img
                src="/lovable-uploads/69f725c9-fe56-4589-ba0f-98a1066a2646.png"
                alt="Friendly dentist"
                className="w-full h-auto object-cover"
              />
            </div>
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

      {/* Let Us Help Put You At Ease Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Let Us Help Put You At Ease</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-center">
            All our dentists and dental nurses have an excellent chairside manner and offer unhurried appointments taken at a pace you are comfortable with. If you still feel too nervous to undergo treatment and would prefer sedation, we can refer you to our sister practice.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Guide you through the treatment process",
              "Go at your pace",
              "Hold your hand",
              "Comforting surroundings",
              "Sympathetic and supporting dental team",
              "Sedation is an option"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-[#63316b] rounded-full flex-shrink-0 mt-3"></div>
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
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens at my first appointment?</h3>
              <p className="text-gray-700">Our new patient appointments are unhurried giving us time to put you at ease and go at your pace. We like to get to know you, give your mouth a thorough examination and understand how we can help you achieve better dental health.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I have to commit to treatment immediately?</h3>
              <p className="text-gray-700">Sometimes all we will do at your first appointment is talk. This is especially helpful for nervous patients who want to have a look around, find out more about our approach and get a feel for our practice without the worry of having an examination – or even sitting in the dental chair if you do not want to.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I come in to look around the practice?</h3>
              <p className="text-gray-700">Yes, we invite all new patients to come and get a feel for what we are about before committing to joining our practice for treatment, so you feel as comfortable as possible and can rest assured you've made the right choice.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is sedation an option?</h3>
              <p className="text-gray-700">Yes, we can refer you to our sister practice if you simply cannot face the thought of having treatment. Rest assured, we will do everything we can to make you feel comfortable and to meet your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Restore Your Smile with Coventry Road Dental Care</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards overcoming your dental anxiety with our gentle, understanding approach.
          </p>
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

export default NervousPatients;
