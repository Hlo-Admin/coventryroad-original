import { Phone, Calendar, CheckCircle , ArrowRight} from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Link } from 'react-router-dom';
import ExploreServicesCarousel from "../components/Marquee";


const NightGuard = () => {
  useEffect(() => {
    document.title = "Night Guard - Bruxism Treatment | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-12 lg:py-16">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Regain Comfort by Investing in a{" "}
                <span className="text-[#63316b]">Night Guard</span>
              </h1>
              
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button></Link>
                <a
                  href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass bg-white/80 backdrop-blur-sm border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Free Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Night Guard Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                 Night Guard
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                  A common problem, bruxism (the clenching and grinding of teeth) is thought to affect over 80% of the population at some stage in their life.
                  </p>
                  <p>
                  Left untreated, it can cause numerous side effects for the sufferer, including: headaches, migraines, stiff neck and jaw, earache, poor sleep quality, and tooth wear. Apart from the damage to the teeth, there is nothing about the above that would suggest that bruxism is the cause. This is often the source of the problem, as too many sufferers are unaware of the true reason for their symptoms-seeking ineffective treatments from their GP instead.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/services/night guard/about.jpg"
                  alt="Composite bonding treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                What options exist for treatment?
              </h2>
              <div className="glass bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    There are plenty of treatments available for those suffering with bruxism – the most common of which is the occlusal splint. Occlusal splints are a precision made device, uniquely fitting an individual and bespokely made with the latest digital scanning technology. It functions as a separation device between the two arches of the teeth, preventing contact and inhibiting the ability to clench or grind, in a comfortable way for a patient. The SCi splint does just this and is FDA-approved for the treatment of headaches and medically diagnosed migraines.
                  </p>
                  <p>
                    Made of a durable plastic, the SCi is designed to sit over your lower two front teeth, acting as a barrier for your upper arch. They are custom-made to your specifications and can even be fitted during your appointment.
                  </p>
                </div>
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

export default NightGuard;
