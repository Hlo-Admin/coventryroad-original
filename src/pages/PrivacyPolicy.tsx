
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingBubble from '../components/FloatingBubble';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Data Protection Privacy Notice For Patients</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              In providing your dental care and treatment, we will ask for information about you and your health. 
              Occasionally, we may receive information from other providers who have been involved in providing your care. 
              This privacy notice describes the type of personal information we hold, why we hold it and what we do with it.
            </p>
            
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Information that we collect</h3>
              <p className="text-gray-700 mb-4">We may collect the following information about you:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Personal details such as your name, date of birth, national insurance number, NHS number, address, telephone number and email address</li>
                <li>Information about your dental and general health, including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Clinical records made by dentists and other dental professionals involved with your care and treatment</li>
                    <li>X-rays, clinical photographs, digital scans of your mouth and teeth, and study models</li>
                    <li>Medical and dental histories</li>
                    <li>Treatment plans and consent</li>
                    <li>Notes of conversations with you about your care</li>
                    <li>Dates of your appointments</li>
                    <li>Details of any complaints you have made and how these complaints were dealt with</li>
                    <li>Correspondence with other health professionals or institutions</li>
                    <li>Details of the fees we have charged, the amounts you have paid and some payment details</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                Our Data Protection Officer, Dr A.S.Deol, ensures that the practice complies with data protection requirements 
                to ensure that we collect, use, store and dispose of your information responsibly. Those at the practice who have 
                access to your information include dentists and other dental professionals involved with your care and treatment, 
                and the reception staff, and the administration staff responsible for the management and administration of the practice.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How we use your information</h3>
              <p className="text-gray-700 mb-4">
                To provide you with the dental care and treatment that you need, we require up-to-date and accurate information about you. 
                We will share your information with the NHS and any other dental plan providers in connection with your dental treatment. 
                We will seek your preference for how we contact you about your dental care. Our usual methods are telephone, email or letter.
              </p>
              <p className="text-gray-700 mb-4">
                If we wish to use your information for dental research or dental education, we will discuss this with you and seek your consent. 
                Depending on the purpose and if possible, we will anonymise your information. If this is not possible we will inform you and 
                discuss your options.
              </p>
              <p className="text-gray-700 mb-4">
                We may use your contact details to inform you of products and services available at our Practice.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sharing information</h3>
              <p className="text-gray-700 mb-4">
                Your information is normally used only by those working at the practice but there may be instances where we need to share it – for example, with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Your doctor</li>
                <li>The hospital or community dental services or other health professionals caring for you</li>
                <li>NHS payment authorities</li>
                <li>The Department for Work and Pensions and its agencies, where you are claiming exemption or remission from NHS charges</li>
                <li>Private dental schemes of which you are a member</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We will only disclose your information on a need-to-know basis and will limit any information that we share to the minimum necessary.
              </p>
              <p className="text-gray-700 mb-4">
                In certain circumstances or if required by law, we may need to disclose your information to a third party not connected 
                with your health care, including HMRC or other law enforcement or government agencies.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keeping your information safe</h3>
              <p className="text-gray-700 mb-4">
                We store your personal information securely on our practice computer system and in a manual filing system. 
                Your information cannot be accessed by those who do not work at the practice; only those working at the practice 
                have access to your information. They understand their legal responsibility to maintain confidentiality and follow 
                practice procedures to ensure this.
              </p>
              <p className="text-gray-700 mb-4">
                We take precautions to ensure security of the practice premises, the practice filing systems and computers. 
                We use high-quality specialist dental software to record and use your personal information safely and effectively. 
                Our computer system has a secure audit trail and we back-up information routinely.
              </p>
              <p className="text-gray-700 mb-4">
                We keep your records for 10 years after the date of your last visit to the Practice or until you reach the age of 25 years, 
                whichever is the longer.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Access to your information and other rights</h3>
              <p className="text-gray-700 mb-4">
                You have a right to access the information that we hold about you and to receive a copy. You should submit your request 
                to the practice in writing or by email and send a copy of your passport or driving license. The charge for any dental records is £40.00.
              </p>
              <p className="text-gray-700 mb-4">You can also request us to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Correct any information that you believe is inaccurate or incomplete. If we have disclosed that information to a third party, we will let them know about the change</li>
                <li>Erase information we hold although you should be aware that, for legal reasons, we may be unable to erase certain information (for example, information about your dental treatment)</li>
                <li>Stop using your information – for example, sending you reminders for appointments or information about our service</li>
                <li>Supply your information electronically to another dentist</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">If you do not agree</h3>
              <p className="text-gray-700 mb-4">
                If you do not wish us to use your personal information as described, you should discuss the matter with your dentist. 
                If you object to the way that we collect and use your information, we may not be able to continue to provide your dental care.
              </p>
              <p className="text-gray-700 mb-4">
                If you have any concerns about how we use your information and you do not feel able to discuss it with your dentist 
                or anyone at the practice, you should contact The Information Commissioner's Office (ICO), Wycliffe House, Water Lane, 
                Wilmslow, Cheshire SK9 5AF (0303 123 1113 or 01625 545745).
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: reception@deoldental.com
                <br />
                Phone: 024 76 31 2256
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

export default PrivacyPolicy;
