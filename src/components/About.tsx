import { Award, Heart, Users, MapPin, Phone, Calendar, CheckCircle, Shield } from 'lucide-react';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Coventry Road Dental Care | Expert Dental Team Coventry";
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-centre mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Coventry Road Dental Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where Expertise Meets Empathy. And Every Smile Matters.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Your smile is our passion. We're more than a dental clinic — we're a people-first practice, 
            rooted in care, guided by excellence, and driven by a simple goal: helping you smile with confidence.
          </p>
          <p className="text-lg text-gray-700">
            For over 25 years, we've transformed thousands of lives through gentle, reliable dentistry — 
            delivered with honesty, precision, and heart.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">What Makes Us Different?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center mb-3">
                <Heart className="w-6 h-6 text-[#63316b] mr-3" />
                <h4 className="text-xl font-semibold text-[#63316b]">Human-first approach</h4>
              </div>
              <p className="text-gray-700">
                From kids to grandparents, nervous patients to routine checkups — you'll always feel 
                seen, heard, and cared for.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-[#63316b] mr-3" />
                <h4 className="text-xl font-semibold text-[#63316b]">Transparent, tailored care</h4>
              </div>
              <p className="text-gray-700">
                We offer treatment options that suit your goals and your budget — nothing more, nothing less.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-[#63316b] mr-3" />
                <h4 className="text-xl font-semibold text-[#63316b]">NHS & Private Flexibility</h4>
              </div>
              <p className="text-gray-700">
                We combine essential NHS treatments with premium private options — for care that fits your lifestyle.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center mb-3">
                <MapPin className="w-6 h-6 text-[#63316b] mr-3" />
                <h4 className="text-xl font-semibold text-[#63316b]">12 State-of-the-Art Surgeries</h4>
              </div>
              <p className="text-gray-700">
                Modern equipment. Clean, calming environments. A place where smiles happen — every day.
              </p>
            </div>
          </div>
        </div>

        {/* Excellence Recognition */}
        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Excellence Recognised</h3>
          </div>
          <h4 className="text-xl font-semibold text-[#63316b] mb-4">
            British Dental Association – Good Practice Certified
          </h4>
          <p className="text-lg text-gray-700 mb-4">
            We're proud recipients of the BDA Good Practice Award — a mark of quality assurance, 
            trust, and commitment to the highest standards of dental care.
          </p>
          <blockquote className="text-lg italic text-gray-600 border-l-4 border-[#63316b] pl-4">
            "This recognition is more than a badge — it reflects our dedication to delivering safe, 
            legal, and ethical care, every single day."
          </blockquote>
        </div>

        {/* Our Mission */}
        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#63316b] mr-3" />To create healthy, confident smiles</li>
            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#63316b] mr-3" />To provide dental care that feels personal</li>
            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#63316b] mr-3" />To make Coventry feel at home in our clinic</li>
          </ul>
          <p className="text-lg text-gray-700 mt-6">
            Whether you need a routine check-up, a smile makeover, or help overcoming dental anxiety — 
            our friendly, experienced team is ready to guide you.
          </p>
        </div>

        {/* Picture Tiles Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-centre mb-8">Our Practice Environment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental clinic interior" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="State-of-the-art dental equipment" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Comfortable patient care area" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Meet Our Team with Doctor Photos */}
        <div className="mb-16">
          <div className="flex items-centre mb-8">
            <Users className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Meet Our Team</h3>
          </div>
          
          {/* Doctor Photos */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/6ea5a8aa-7b9b-4b0a-a3ff-ba1823a3dfeb.png" 
                alt="Dr. Anoop Deol" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/69f725c9-fe56-4589-ba0f-98a1066a2646.png" 
                alt="Dr. Kalveen Manak" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/b025e17d-dffe-4d21-b83f-005975eaf587.png" 
                alt="Dr. Satbir Birdi" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl text-centre">
              <h4 className="text-xl font-semibold text-[#63316b] mb-2">Dr. Anoop Deol</h4>
              <p className="text-gray-700">General & Cosmetic Dentistry</p>
            </div>
            <div className="glass p-6 rounded-2xl text-centre">
              <h4 className="text-xl font-semibold text-[#63316b] mb-2">Dr. Kalveen Manak</h4>
              <p className="text-gray-700">Implants & Smile Design</p>
            </div>
            <div className="glass p-6 rounded-2xl text-centre">
              <h4 className="text-xl font-semibold text-[#63316b] mb-2">Dr. Satbir Birdi</h4>
              <p className="text-gray-700">Family Dentistry & Prevention</p>
            </div>
          </div>
          <p className="text-centre text-lg text-gray-700 mt-8">
            Our entire team of dentists, hygienists, and coordinators work with one mission — 
            to put your smile and comfort first.
          </p>
        </div>

        {/* What Our Patients Love */}
        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">What Our Patients Love</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Family-friendly and welcoming</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Gentle with nervous patients</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Full treatment range under one roof</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Transparent pricing, honest advice</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Flexible NHS & private plans</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Advanced smile care (implants, Invisalign, veneers & more)</span>
            </div>
          </div>
        </div>

        {/* Ready to Join */}
        <div className="text-center glass p-12 rounded-3xl">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">
              Ready to Join a Dental Family That Cares?
            </h3>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Whether it's your first visit or your 50th, we're here to make every experience 
            warm, professional, and personalised.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#63316b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#63316b]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Your Appointment
            </button>
            <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-3 rounded-full font-medium hover:bg-[#63316b] hover:text-white transition-all duration-300">
              Request a Callback
            </button>
          </div>
          <div className="flex items-center justify-center mt-6">
            <MapPin className="w-5 h-5 text-gray-600 mr-2" />
            <p className="text-gray-600">
              Coventry Road Dental Care – Your smile starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
