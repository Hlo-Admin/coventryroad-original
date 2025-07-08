
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingBubble from '../components/FloatingBubble';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our dental services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Appointment Policy</h2>
              <p className="text-gray-700 mb-4">
                Appointments must be cancelled at least 24 hours in advance. Failure to attend 
                appointments without notice may result in charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment is due at the time of service unless prior arrangements have been made. 
                We accept various payment methods and offer finance options.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Professional Standards</h2>
              <p className="text-gray-700 mb-4">
                All dental treatments are provided in accordance with professional standards 
                and regulatory requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
              <p className="text-gray-700">
                For questions regarding these terms, please contact us at:
                <br />
                Email: info@coventryroaddentalcare.com
                <br />
                Phone: 024 7699 2020
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingBubble />
    </div>
  );
};

export default TermsOfService;
