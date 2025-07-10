
import {
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle,
  Sparkles,
  Smile,
  Shield,
  DollarSign,
  Syringe,
  Heart,
  HomeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceTiles from "../components/ServiceTiles";
import FloatingBubble from "../components/FloatingBubble";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TeethWhitening = () => {
  useEffect(() => {
    document.title =
      "Professional Veneers - Restore Your Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Initial appointments are carried out by trained professionals.",
    "Treatment is safe, quick, and comfortable.",
    "Treatment is pain free.",
    "Whitening makes a real difference to your appearance/self-confidence.",
    "Whitening kits are used in the comfort of your own home.",
    "Boosts confidence and self-esteem.",
    "Brightens stained and aging teeth.",
    "Top ups can be carried out at home when needed."
  ];

  const faqs = [
    {
      question: "Is teeth whitening for me?",
      answer:
        "We are passionate our patients have smiles they feel proud of – if you look good, you feel good. If you think your teeth have become dull over time and could benefit from being brighter, home whitening is an easy, great value and pain free way of brightening up your smile.",
    },
    {
      question: "How long will treatment take?",
      answer:
        "For particularly stained teeth, we recommend a hygiene treatment to ensure the cleanest base for applying whitening. We then ask you to join us to have a scan taken of your teeth and return later to collect your specially made trays and gels. Your teeth will gradually whiten as you use the whitening gels provided but the degree is dependent on your starting position, diet, age, and lifestyle.",
    },
    {
      question: "Does teeth whitening hurt?",
      answer:
        "Tooth whitening is a safe, painless procedure when carried out by a trained dental professional. The treatment can result in short term sensitivity for some people, but do not worry we have products that can help with this."
    },
    {
      question: "What if my teeth need whitening again?",
      answer:
        "Once you have your trays you can whiten your teeth for years to come by simply purchasing additional whitening gel from Coventry Road Dental Care."
    },
    {
      question: "What can you do about stained veneers, crowns or dentures to make sure they match my natural teeth?",
      answer:
          "Depending on the degree of staining, you may need a thorough clean and polish before you have whitening treatment, to remove any discolouration caused by stains. The colour of crowns, veneers and dentures is not affected by tooth whitening. Old or dark crowns may need replacing to ensure they match your natural teeth. That is why an initial appointment with a dental professional is imperative before you begin using any tooth whitening products."    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Skip to content */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded">
          Skip to content
        </a>

        {/* Hero Section */}
        <section id="main-content" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Brighten Your Smile with
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#63316b] mb-6 animate-fadeInUp">
                Teeth Whitening
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                in Coventry
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Teeth Whitening
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Teeth whitening is one the easiest, most cost effective and long-lasting ways of giving your smile – and your confidence – a real lift. Here at Coventry Road Dental Care, we offer two brands of whitening, complete with custom-made whitening trays and gels that can be used in the comfort of your own home. Following a consultation with one of our dentists, you will be advised which system is best for you based on the existing shade of your teeth, your desired level of whiteness and brightness, and your budget.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/CompositeBonding/composite-bonding.jpeg"
                  alt="Professional Teeth Whitening treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            

            
          </div>
        </section>

        {/* Why Have This Treatment Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Tooth Whitening Can Give Your Smile And Confidence A Boost
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We want our patients to look and feel their absolute best and boast a smile they deserve.
                It gives us real pleasure to offer two brands of whitening kit depending on your desires, both of which can be used in the comfort of your own home.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#63316b]" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#63316b]">FAQs</span>
              </h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default TeethWhitening;
