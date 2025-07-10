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

const CompositeBonding = () => {
  useEffect(() => {
    document.title =
      "Composite Bonding - Natural Tooth Restoration | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Restore Your Smile with{" "}
                <span className="text-[#63316b] block">Composite Bonding</span>
                in Coventry
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp pt-16">
                {/* <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button> */}
                <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button></a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Composite Bonding */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What is Composite Bonding?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4 justify-center">
                  <p>
                    Composite bonding is a very simple cosmetic procedure which
                    is completely pain free. During treatment a white resin
                    material will be placed onto the area required and moulded
                    into the desired shape. The resin with then be set with a
                    curing light and finally the tooth polished.
                  </p>
                  <a href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1" target="_blank">
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                  </button></a>
                </div>
              </div>
              <div>
                <img
                  src="/services/CompositeBonding/composite-bonding.jpeg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Q&A Section: Implant Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="flex justify-center">
                <img
                  src="/home/services/Composite Bonding.jpg"
                  alt="Full Arch Implants Hero"
                  className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
                  style={{ maxHeight: 400 }}
                />
              </div>

              {/* Right: Accordion Q&A */}
              <div>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="all-on-6">
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                      Why Would I Want Composite Bonding?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      Composite bonding is usually used when a patient has
                      fractured their tooth or chipped the edges of their teeth.
                      If they dislike the gaps between the teeth or even for
                      fixing discolouration. If you are self-conscious of the
                      way your teeth look or if you are wanting more of a
                      cosmetic appearance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="all-on-4">
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                      What Are The Advantages Of Composite Bonding?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      It is a non-invasive treatment which can be reversed. It
                      is also considered more cost effective than other cosmetic
                      treatments, such as veneers or crowns. Achieving your
                      desired look will give you that confidence to smile again
                      without feeling self-conscious of your teeth and being
                      proud of the smile that you have. Composite bonding starts
                      from as little as £250 per tooth and a FREE consultation
                      with our treatment coordinator to discuss your
                      personalised treatment plan.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

   

        {/* Easy Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14 tracking-tight">
              It's As Easy As <span className="text-[#63316b]">1 2 3</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-[#63316b]/5 border border-[#63316b]/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xl w-full mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63316b] text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#63316b] mb-2 text-center">
                  FREE Consultation
                </h3>
                <p className="text-gray-700 text-center text-base">
                  A relaxed chat with our treatment coordinator who will discuss
                  your personalised treatment plan with you and answer any
                  questions you may have.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center bg-[#63316b]/5 border border-[#63316b]/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xl w-full mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63316b] text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#63316b] mb-2 text-center">
                  Teeth Whitening
                </h3>
                <p className="text-gray-700 text-center text-base">
                  A three-week optional teeth whitening journey to give your
                  teeth that extra boost of brightness to achieve your dream
                  smile.
                  <br />
                  <br />A 3D iTero Scan is done to make your bespoke whitening
                  trays, this can also be done at your consultation appointment.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center bg-[#63316b]/5 border border-[#63316b]/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xl w-full mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63316b] text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#63316b] mb-2 text-center">
                  All Go Go Go with your new smile
                </h3>
                <p className="text-gray-700 text-center text-base">
                  A pain free experience with no hassle and no injections! Just
                  a beautiful dream smile achieved in as little as one
                  appointment. This appointment is where the composite bonding
                  will take place.
                </p>
              </div>
            </div>
          </div>
        </section>

      

        {/* Service Tiles */}
        {/* <ServiceTiles /> */}

        {/* Final CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                Book your free consultation today and discover how composite
                bonding can enhance your smile.
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
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default CompositeBonding;
