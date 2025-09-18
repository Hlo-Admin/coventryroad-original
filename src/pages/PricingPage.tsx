import { useEffect } from "react";
import { Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/MarqueeLogo";

const PricingPage = () => {
  useEffect(() => {
    document.title =
      "Price List - Coventry Road Dental Care | Affordable Dental Treatments";
    window.scrollTo(0, 0);
  }, []);

  const nhsBands = [
    {
      band: "Band 1",
      price: "£27.40",
      description:
        "Covers an examination, diagnosis and advice. If necessary, includes x-rays, a clean and polish and planning for further treatment.",
    },
    {
      band: "Band 2",
      price: "£75.30",
      description:
        "Covers all treatments in Band 1, plus additional treatments like fillings, root canal treatment and extractions.",
    },
    {
      band: "Band 3",
      price: "£326.70",
      description:
        "Covers all treatments in Bands 1 and 2, plus more complex procedures such as crowns, dentures and bridges.",
    },
  ];

  const privateTreatments = [
    // Diagnosis
    { treatment: "Examination", price: "£30.00" },
    { treatment: "Radiographs", price: "£30.00" },
    { treatment: "Urgent Appointment", price: "£30.00" },

    // Hygienist Visit
    { treatment: "Scale & Polish", price: "£55.00" },
    { treatment: "AirFlow & Polish", price: "£85.00" },

    // Fillings
    { treatment: "Composite 1 Surface", price: "£150.00" },
    { treatment: "Composite 2 Surfaces", price: "£175.00" },
    { treatment: "Composite 3 Surfaces", price: "£200.00" },

    // Composite Bonding
    { treatment: "Composite Bonding", price: "From £200.00" },

    // Root Canal Treatment
    { treatment: "Root Canal - Incisor", price: "£545.00" },
    { treatment: "Root Canal", price: "£595.00" },
    { treatment: "Re-Root Canal", price: "From £795.00" },

    // Extractions
    { treatment: "Extraction (Simple)", price: "£80.00" },
    { treatment: "Extraction (Surgical)", price: "£200.00" },

    // Dentures
    { treatment: "Acrylic Dentures - Partial", price: "From £355.00" },
    { treatment: "Acrylic Dentures - Full", price: "From £455.00" },
    { treatment: "Chrome Dentures - Partial", price: "From £750.00" },
    { treatment: "Chrome Dentures - Full", price: "From £1,000.00" },
    { treatment: "Flexi Denture", price: "From £1,000.00" },
    { treatment: "Tooth Addition", price: "£100 per Tooth" },
    { treatment: "Same / Next Day Repair", price: "£45.00" },

    // Crowns, Bridges, Veneers
    { treatment: "Crowns", price: "£475.00" },
    { treatment: "Bridges", price: "£475.00 per unit" },
    { treatment: "Emax Veneers", price: "£600.00" },

    // Implants
    { treatment: "Single Implant", price: "£2,650.00" },
    { treatment: "Full Arch Implants Upper", price: "From £9,999" },
    { treatment: "Full Arch Implants Lower", price: "From £9,999" },

    // Mouthguards
    { treatment: "Mouthguards (Sports Guard)", price: "From £150.00" },

    // Teeth Whitening
    { treatment: "Enlighten Kit", price: "£650.00" },
    { treatment: "Boutique Kit", price: "£450.00" },

    // Teeth Anti-Grinding
    { treatment: "SCI Nightguard", price: "£395.00" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-100 via-white to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#63316b]/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#6a3870]">
                  At Coventry Road Dental Care
                </span>
                <br />
                <span className="text-3xl text-gray-700">
                  Our Passion Is Your Smile
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                As a Coventry Road Dental Care patient, we want you to be proud
                of your smile and have a healthy mouth. We offer a range of NHS
                and private treatments to suit all budgets and needs.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We would be delighted to work with you to find the perfect
                outcome for you and your family.
              </p>
            </div>
          </div>
        </section>

        {/* NHS Dental Charges */}
        <section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-[#6a3870] mb-8 text-center">
      NHS Dental Fees
    </h2>
    <p className="text-gray-600 text-center mb-8">
      The charge you pay will depend on the treatment you need to keep
      your mouth, gums and teeth healthy. You will only ever be asked to
      pay one charge for each complete course of treatment, even if you
      need to visit your dentist more than once to finish it.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {nhsBands.map((band, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:bg-[#63316b] transition-all duration-300 cursor-pointer"
        >
          <h3 className="text-2xl font-bold text-[#63316b] mb-4 group-hover:text-white transition-colors duration-300">
            {band.band}
          </h3>
          <p className="text-3xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
            {band.price}
          </p>
          <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
            {band.description}
          </p>
          {/* <a
            href="http://www.nhs.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[#63316b] hover:underline group-hover:text-white transition-colors duration-300"
          >
            More Information
          </a> */}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Denplan Monthly Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              Budgeting for Your Essential Dental Care
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mx-auto mb-8">
              To help spread the cost of essential dental and hygiene treatment
              we are pleased to offer Denplan, a monthly payment plan that helps
              you budget for private dental care. Research suggests that
              patients on a monthly dental care plan are more likely to enjoy
              improved dental wellbeing because they visit the dentist and
              hygienist more regularly than those who pay as they go.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mx-auto mb-8">
              Regular visits allow us to spot any issues early before they
              become painful and more expensive to treat. If you are looking to
              join Denplan, Dr. Anoop Deol will carry out a thorough dental
              assessment and will advise which category would best suit your
              needs.
            </p>
          </div>
        </section>

        {/* Private Treatment Price Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-8 text-center">
              Affordable Dental Care in Coventry
            </h2>
            <p className="text-gray-600 text-center mb-8 italic">
              Our price guide is designed to give an idea of the fees associated
              with different private dental procedures. Some treatments can vary
              in complexity, so we always provide a written estimate of any
              proposed treatment and its associated cost following your
              consultation.
            </p>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#63316b] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Treatment</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {privateTreatments.map((treatment, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      } hover:bg-[#63316b]/10 transition-colors`}
                    >
                      <td className="px-6 py-4 text-gray-900">
                        {treatment.treatment}
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700 font-semibold">
                        {treatment.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-center mt-8">
              We take great pride in the quality of care we provide and we
              always seek to keep our prices competitive. We accept cash,
              cheques, and credit cards (except American Express).
            </p>
          </div>
        </section>

        {/* Callback CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#6a3870] mb-6">
              What Happens Next?
            </h2>
            <p className="text-gray-600 mb-8 max-w-5xl mx-auto">
              If you're considering joining Coventry Road, we'd like to invite
              you to call us on 02476 312256 or email us at
              reception@covrddental.co.uk and we will be pleased to arrange an
              appointment. We look forward to meeting you and your family, and
              looking after your smile.
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

export default PricingPage;
