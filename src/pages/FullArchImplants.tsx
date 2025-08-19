import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ExploreServicesCarousel from "../components/Marquee";

const FullArchImplants = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const faqs = [
    {
      question: "What is all-on-6 dental implants?",
      answer:
        "All-on-6 dental implants are when 6 titanium dental implants are placed on the upper or lower arch of the jaw and a premium zirconia bridge with 12 teeth then screwed onto those 6 implants. This is often done when you have all missing teeth, struggling with a poor fitting denture, loose teeth or when you have failing teeth.\n\nHere at Coventry Road Dental Care with our expertise we have the ability to offer this procedure to our patients which only a few clinics can offer in the UK. We undertake a fully digital workflow for our patients, which achieves an amazing looking set of fixed teeth.",
    },
    {
      question: "What is all-on-4 dental implants?",
      answer:
        "All-on-4 dental implants are when 4 titanium dental implants are placed on the upper or lower arch of the jaw and a premium zirconia bridge with 10 teeth is then screwed onto those 4 implants. This is often done when you have all missing teeth, struggling with a poor fitting denture, loose teeth or when you have failing teeth.\n\nHere at Coventry Road Dental Care with our expertise we have the ability to offer this procedure to our patients which only a few clinics can offer in the UK. We undertake a fully digital workflow for our patients, which achieves an amazing looking set of fixed teeth.",
    },
    {
      question: "What are the benefits to having dental implants?",
      answer:
        "There are many benefits to having dental implants.\n\nRegaining your confidence is a huge one and we often see this with our patients, it gives you a reason to smile again without feeling self-conscious.\n\nHaving the ability to eat and chew without any problems, whilst also being able to enjoy your favourite foods without any struggle. Dental implants function like your natural teeth.\n\nGives back shape and structure to your face\n\nNot having to worry about poorly fitted or loose dentures falling out and finally being able to get rid of using denture-adhesive.\n\nGiving you a fresh start to a healthy, clean smile.",
    },
    {
      question: "Am I suitable for Dental Implants?",
      answer:
        "Most people in good general health will be suitable for dental implants so why not come in for your FREE implant consultation to discuss your treatment plan.\n\nHere at Coventry Road Dental Care, we provide the best care and quality for all of our patients.",
    },
    {
      question:
        "What if I'm nervous about going to the dentist to have my dental implant treatment?",
      answer:
        "Here at Coventry Road Dental Care we have all the answers to your worries. We offer sedation here which can either be done via IV sedation in the arm or hand or oral sedation use, which can be discussed on your consultation. We have an amazing team which discusses your treatment plan and co-ordinate it together, so the procedure runs smoothly. The whole outcome can be achieved with a minimal number of visits, to reassure those that suffer anxiety.",
    },
    {
      question: "Why would I need a dental implant?",
      answer:
        "Do you have extensive dental work such as crowns and bridges that are now failing?\n\nDo you suffer from tooth loss?\n\nAre you struggling with poor fitted dentures?\n\nAre you missing all your teeth?\n\nIf you've answered yes to any of the above questions, then dental implants are a great solution to your problems.",
    },
    {
      question: "How much does dental implants cost?",
      answer:
        "A single dental implant starts from £2,650.00\n\nA Full arch starts from £12,500.00 per arch – this is for a full arch of premium zirconia teeth\n\nFor all other enquires regarding multiple implants bridges and dentures, this will be discussed on your consultation.",
    },
    {
      question: "What if I cant afford dental implants?",
      answer:
        "Here at Coventry Road Dental Care, we have all the answers to your dental problems. We offer a finance option should you require it. The finance company we work alongside with is called chrysalis finance which offer 0.0% APR for 12 months or under. After 12 months APR may vary*",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Restore Your Smile with{" "}
            <span className="text-[#63316b]">Full Arch Implants</span> in
            Coventry
          </h1>
          <p className="text-2xl font-semibold text-[#63316b] mb-4">
            Full Arch Implants From £8 Per Day
          </p>
          <p className="text-xl text-gray-600 mb-8">
            A long-lasting and immovable remedy designed for individuals with
            extensive tooth loss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link to="/contact">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Request a Callback</span>
              </button>
            </Link>
            <a
              href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
              target="_blank"
            >
              <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book My Free Consultation</span>
              </button>
            </a>
          </div>
          {/* <div className="bg-[#63316b]/10 border border-[#63316b]/20 rounded-lg p-6 max-w-xl mx-auto">
            <p className="text-lg font-semibold text-[#63316b] mb-2">
              Would You Like To Talk To a Consultant?
            </p>
            <p className="text-gray-700">
              You can reach our friendly team by calling{" "}
              <span className="font-bold">024 7631 2256</span> during our
              regular clinic opening hours.
            </p>
          </div> */}
        </div>
      </section>

      {/* What is a Dental Implant */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <video
                ref={videoRef}
                src="/services/full5 - Made with Clipchamp (1).mp4"
                className="w-full rounded-2xl shadow-lg"
                controls={isPlaying}
                muted
                autoPlay
                style={{ objectFit: "cover", maxHeight: 500 }}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 bg-[#63316b] rounded-full flex items-center justify-center hover:bg-[#63316b]/90 transition-all duration-300 group"
                    onClick={() => {
                      setIsPlaying(true);
                      videoRef.current?.play();
                    }}
                  >
                    <Play
                      className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                    />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                What Is A Dental Implant?
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed pb-8">
                A dental implant is an artificial root made from titanium that
                replaces the root of a missing tooth. It can be placed in either
                the upper or lower jaw and, in time will bond with your jawbone
                to create a firm foundation to which a replacement false tooth
                is fixed. Implants can also be used to provide a secure
                foundation for replacing multiple teeth, failing bridges and
                poor fitting dentures.
              </p>
              <Link to="/contact">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300">
                  Request a callback
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Before & After Results
            </h2>
            <p className="text-lg text-gray-600">
              See the amazing transformations we've achieved with full arch
              implants
            </p>
          </div>

          <BeforeAfterSlider
            beforeSrc="/lovable-uploads/b3719a1c-237e-40d0-9e7a-b224c1dcd1d6.png"
            afterSrc="/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png"
            width={800}
            height={400}
          />
        </div>
      </section>

      {/* Implant Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Faster And More Secure Than Ever Previously Experienced.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              If you are searching for a fast yet long-lasting remedy for
              failing bridges, missing teeth or uncomfortable dentures, full
              arch implants offer a comprehensive solution. It will completely
              transform your smile, leaving you feeling confident and satisfied.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-full md:w-1/3 p-8 border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-[#63316b]"></div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 text-center">
                Full Arch Implants
              </h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-full md:w-1/3 p-8 border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-[#63316b]"></div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 text-center">
                All-On-6 Dental Implants
              </h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-full md:w-1/3 p-8 border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-[#63316b]"></div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 text-center">
                All-On-4 Dental Implants
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-[#63316b]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Full Arch Implants
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="all-on-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                    What Is All-On-6 Dental Implants?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    All-On-6 dental implants are when 6 titanium dental implants
                    are placed in the upper or lower arch of the jaw and a
                    premium zirconia bridge with 12 teeth is then screwed onto
                    those 6 Implants. This procedure is called All-On-6.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="all-on-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                    What Is All-On-4 Dental Implants?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    All-On-4 dental implants are when 4 titanium dental implants
                    are placed in the upper or lower arch of the jaw and a
                    premium zirconia bridge with 10 teeth is then screwed onto
                    those 4 Implants. This procedure is called All-On-4.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="suitability">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                    Am I Suitable For This Treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Most people in good general health will be suitable for
                    dental implants so why not come in for your FREE implant
                    consultation to discuss your treatment plan. Here at
                    Coventry Road Dental Care, we pride ourselves on being able
                    to provide the best care and quality to all of our patients.
                    <br />
                    <br />
                    Full arch implants are often the best treatment option when
                    you have all missing teeth, struggling with a poor fitting
                    denture, loose teeth or when you have failing teeth. Here at
                    Coventry Road Dental Care with our expertise we have the
                    ability to offer this procedure to our patients which only a
                    few clinics can offer in the UK. We undertake a fully
                    digital workflow with our patients, which achieves an
                    amazing looking set of fixed teeth.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                    What Are The Benefits To Having Dental Implants?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    There are many benefits to having dental implants.
                    <br />
                    <br />
                    Regaining your confidence is a huge one and we often see
                    this with our patients, it gives you a reason to smile again
                    without feeling self-conscious.
                    <br />
                    <br />
                    Having the ability to eat and chew without any problems,
                    whilst also being able to enjoy your favourite foods without
                    any struggle. Dental implants function like your natural
                    teeth.
                    <br />
                    <br />
                    Not having to worry about poorly fitted or loose dentures
                    falling out and finally being able to get rid of using
                    denture-adhesive.
                    <br />
                    <br />
                    Giving you a fresh start to a healthy, clean smile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex justify-center">
              <img
                src="/services/faq.jpg"
                alt="Full Arch Implants"
                className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
                style={{ maxHeight: 400 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Services Carousel */}
      <ExploreServicesCarousel />

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-lg mb-6 text-gray-700 opacity-90">
              Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
              >
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
              </a>
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

      <Footer />
    </>
  );
};

export default FullArchImplants;
