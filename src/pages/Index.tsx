import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import FloatingBubble from "../components/FloatingBubble";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ/>
      <ConsultationCTA />
      <Contact />
      <Footer />
      <FloatingBubble />
    </div>
  );
};

export default Index;
