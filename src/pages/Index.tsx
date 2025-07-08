
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ConsultationCTA from "../components/ConsultationCTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <ConsultationCTA />
      <Footer />
    </div>
  );
};

export default Index;
