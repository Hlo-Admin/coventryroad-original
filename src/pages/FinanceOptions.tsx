import { useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";
import ConsultationCTA from "../components/ConsultationCTA";

const FinanceOptions = () => {
  useEffect(() => {
    document.title =
      "Finance Options - Coventry Road Dental Care | Affordable Dental Treatment";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-100 via-white to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#63316b]/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#63316b]/10 to-purple-100/50 text-[#63316b] px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-[#63316b]/20">
              <span>Flexible Payment Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#6a3870]">Coventry Road Dental Care</span>
              <br />
              <span className="text-3xl text-gray-700">Finance Options</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Affordable Way to Pay for Your Dental Treatment
            </p>
          </div>
        </section>

        {/* Finance Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Coventry Road Dental Care offers a range of finance options to
                allow you to get the treatment your dentist has recommended
                whilst letting you spread the cost over a time that suits you.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mb-4">
                Can It Be Used for Any Treatment?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It is particularly useful for cosmetic dentistry, orthodontic
                work and implants. You can borrow any amount over £750 upwards,
                subject to status. You need to be over 18 to apply, and you must
                have lived in the UK for at least 3 years.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mt-8 mb-4">
                How Much Are the Repayments?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Obviously this will depend on the amount you borrow, the
                interest rate and the term of the loan. The staff at the
                practice will show you, completely without obligation, the
                schemes the practice has available for you to pay for your
                treatment.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mt-8 mb-4">
                Do I Have To Pay a Deposit?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A deposit is not required, but if you want to pay one and so
                reduce the amount you borrow, this is completely up to you.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mt-8 mb-4">
                How Do I Apply?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The practice staff will complete a simple, online application
                process with you. This will only take a few minutes. The
                information is transmitted to the lender immediately and a reply
                is usually received by return. You can then either sign a credit
                agreement that the practice print for you, or have it emailed
                for you to complete at home.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mt-8 mb-4">
                When Can I Start the Treatment?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                An appointment can be arranged as soon as the credit agreement
                has been signed.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mt-8 mb-4">
                How Do I Make Repayments?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Repayments are made by monthly direct debit, starting one month
                after you sign the credit agreement.
              </p>

              <h2 className="text-2xl font-bold text-[#6a3870] mt-8 mb-4">
                What if I Decide That I Don't Want the Finance?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                There is a statutory 'cooling off' period of 14 days after
                signature during which you can cancel the credit agreement with
                no cost to you. However, if you have started any treatment which
                would have been financed, you will have to make other
                arrangements to pay for it.
              </p>

              <div className="mt-12 bg-[#63316b]/10 p-6 rounded-xl border border-[#63316b]/20">
                <h3 className="text-xl font-bold text-[#6a3870] mb-4">
                  Who Provides the Finance?
                </h3>
                <p className="text-gray-700">
                  The finance is arranged through Chrysalis Finance Ltd, a
                  company authorised and regulated by the Financial Conduct
                  Authority to carry out the regulated activity of credit
                  broking under Firm Reference Number 631193
                  <br />
                  <br />
                  "A S Deol & M K Deol, trading as Coventry Road Dental Care, is
                  an Introducer Appointed Representative of Chrysalis Finance
                  Limited, which is authorised and regulated by the Financial
                  Conduct Authority to carry out the regulated activity of
                  credit broking."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Callback CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Need More Information?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you understand your finance options and
              find the best solution for your dental treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Request a Callback</span>
              </a>
            </div>
          </div>
        </section>

        <Marquee />
        <Footer />
      </main>
    </div>
  );
};

export default FinanceOptions;
