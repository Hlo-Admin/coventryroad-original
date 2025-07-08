import { useState, useRef } from "react";
import {
  Phone,
  Mail,
  Calendar,
  Play,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Smile,
  Apple,
  MessageSquare,
  Gem,
  Bone,
  Stethoscope,
  PoundSterling,
  CalendarDays,
  CreditCard,
  Percent,
  FileText,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceTiles from "@/components/ServiceTiles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FullArchImplants = () => {
  const [activeTab, setActiveTab] = useState("all-on-6");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const implantTypes = [
    {
      id: "full-arch",
      title: "Full Arch Implants",
      description:
        "Full arch implants are a revolutionary solution for patients with extensive tooth loss. They involve placing multiple titanium implants in the jawbone to support a full arch of replacement teeth, providing a permanent and natural-looking solution.",
    },
    {
      id: "all-on-6",
      title: "All-On-6 Dental Implants",
      description:
        "All-On-6 dental implants are when 6 titanium dental implants are placed in the upper or lower arch of the jaw and a premium zirconia bridge with 12 teeth is then screwed onto those 6 Implants. This procedure is called All-On-6.",
    },
    {
      id: "all-on-4",
      title: "All-On-4 Dental Implants",
      description:
        "All-On-4 dental implants are when 4 titanium dental implants are placed in the upper or lower arch of the jaw and a premium zirconia bridge with 10 teeth is then screwed onto those 4 Implants. This procedure is called All-On-4.",
    },
  ];

  const faqs = [
    {
      question: "What is all-on-6 dental implants?",
      answer:
        "All-on-6 dental implants are when 6 titanium dental implants are placed on the upper or lower arch of the jaw and a premium zirconia bridge with 12 teeth is then screwed onto those 6 implants. This is often done when you have all missing teeth, struggling with a poor fitting denture, loose teeth or when you have failing teeth.\n\nHere at Coventry Road Dental Care, with our expertise, we have the ability to offer this procedure to our patients, which only a few clinics can offer in the UK. We undertake a fully digital workflow for our patients, which achieves an amazing looking set of fixed teeth.",
    },
    {
      question: "What is all-on-4 dental implants?",
      answer:
        "All-on-4 dental implants are when 4 titanium dental implants are placed on the upper or lower arch of the jaw and a premium zirconia bridge with 10 teeth is then screwed onto those 4 implants. This is often done when you have all missing teeth, struggling with a poor fitting denture, loose teeth or when you have failing teeth.\n\nHere at Coventry Road Dental Care, with our expertise, we have the ability to offer this procedure to our patients, which only a few clinics can offer in the UK. We undertake a fully digital workflow for our patients, which achieves an amazing looking set of fixed teeth.",
    },
    {
      question: "What are the benefits to having dental implants?",
      answer:
        "There are many benefits to having dental implants.\n\nRegaining your confidence is a huge one and we often see this with our patients, it gives you a reason to smile again without feeling self-conscious.\n\nHaving the ability to eat and chew without any problems, whilst also being able to enjoy your favourite foods without any struggle. Dental implants function like your natural teeth.\n\nGives back shape and structure to your face.\n\nNot having to worry about poorly fitted or loose dentures falling out and finally being able to get rid of using denture-adhesive.\n\nGiving you a fresh start to a healthy, clean smile.",
    },
    {
      question: "Am I suitable for Dental Implants?",
      answer:
        "Most people in good general health will be suitable for dental implants, so why not come in for your FREE implant consultation to discuss your treatment plan.\n\nHere at Coventry Road Dental Care, we provide the best care and quality for all of our patients.",
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
        "A single dental implant starts from £2,650.00.\n\nA Full arch starts from £12,500.00 per arch – this is for a full arch of premium zirconia teeth.\n\nFor all other enquiries regarding multiple implants, bridges and dentures, this will be discussed on your consultation.",
    },
    {
      question: "What if I can't afford dental implants?",
      answer:
        "Here at Coventry Road Dental Care, we have all the answers to your dental problems. We offer a finance option should you require it. The finance company we work alongside with is called Chrysalis Finance which offers 0.0% APR for 12 months or under. After 12 months APR may vary*",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-16">
        {/* Background Elements */}
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
          <div className="bg-[#63316b]/10 border border-[#63316b]/20 rounded-lg p-6 max-w-xl mx-auto">
            <p className="text-lg font-semibold text-[#63316b] mb-2">
              Would You Like To Talk To A Consultant?
            </p>
            <p className="text-gray-700">
              You can reach our friendly team by calling{" "}
              <span className="font-bold">024 7631 2256</span> during our
              regular clinic opening hours.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Gallery - Updated with swapped images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Patient Smiles Transformed
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-centre">
            {/* Before Image - now showing the after image */}
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
                <img
                  src="/lovable-uploads/b3719a1c-237e-40d0-9e7a-b224c1dcd1d6.png"
                  alt="Before dental implant treatment"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Before Treatment
                </div>
              </div>
            </div>

            {/* After Image - now showing the before image */}
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-100">
                <img
                  src="/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png"
                  alt="After dental implant treatment"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  After Treatment
                </div>
              </div>
            </div>
          </div>

          <div className="text-centre mt-12">
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              See Your Transformation
            </button>
          </div>
        </div>
      </section>

     

      {/* Compare Implant Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Faster And More Secure Than Ever Previously Experienced.
            </h2>
            <p className="text-lg text-gray-600">
              If you are searching for a fast yet long-lasting remedy for
              failing bridges, missing teeth or uncomfortable dentures, full
              arch implants offer a comprehensive solution. It will completely
              transform your smile, leaving you feeling confident and satisfied.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {implantTypes.map((type) => (
              <div
                key={type.id}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-full md:w-1/3 p-8 border border-gray-100 relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-[#63316b]"></div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 text-center">
                  {type.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* What are Full Arch Implants */}
       <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <video
                ref={videoRef}
                src="/services/Full%20Arch%20Implants/implants.mp4"
                poster="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
                className="w-full rounded-2xl shadow-lg"
                controls={isPlaying}
                muted
                style={{ objectFit: "cover", maxHeight: 400 }}
              />
              {/* Play Button Overlay */}
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
                What is a Dental Implant?
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                A dental implant is an artificial root made from titanium that
                replaces the root of a missing tooth. It can be placed in either
                the upper or lower jaw and, in time will bond with your jawbone
                to create a firm foundation to which a replacement false tooth
                is fixed.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Implants can also be used to provide a secure foundation for
                replacing multiple teeth, failing bridges and poor fitting
                dentures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section: Implant Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Accordion Q&A */}
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
            {/* Right: Image */}
            <div className="flex justify-center">
              <img
                src="/services/Full%20Arch%20Implants/hero.jpg"
                alt="Full Arch Implants Hero"
                className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
                style={{ maxHeight: 400 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiles */}
      <ServiceTiles />

          {/* Final CTA */}
          <section className="py-20 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Straight Teeth May Be a{" "}
            <span className="text-white underline">Phone Call Away</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help you smile again — book your free consultation
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      </section>
   

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dental Implants: What You Need to Know
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#63316b] text-white p-4 rounded-full shadow-lg hover:bg-[#63316b]/90 transition-all duration-300 group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Got questions about Full Arch Implants?
          </p>
          <p className="text-xs text-gray-600">
            Tap to Chat or Call. Our team is ready to help.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FullArchImplants;
