
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingBubble from '../components/FloatingBubble';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy - Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer by websites that you visit. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies to improve your experience on our website, remember your preferences, 
                and understand how you use our site to help us improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Essential cookies - Required for the website to function properly</li>
                <li>Analytics cookies - Help us understand how visitors use our website</li>
                <li>Functionality cookies - Remember your preferences and settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
