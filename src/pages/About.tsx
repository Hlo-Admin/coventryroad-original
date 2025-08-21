import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBubble from "../components/FloatingBubble";
import About from "../components/About";

const AboutPage = () => {
  useEffect(() => {
    document.title =
      "About Us - Coventry Road Dental Care | Expert Dental Team United Kingdom";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
      <FloatingBubble />
    </div>
  );
};

export default AboutPage;
