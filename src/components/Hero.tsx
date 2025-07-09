import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-50/60 to-pink-50/60"></div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
                <Award className="w-3 h-3 inline mr-1.5" />
                BDA Certified
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
                <Users className="w-3 h-3 inline mr-1.5" />
                25+ Years Experience
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Dentists in <span className="gradient-text">Coventry</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Dentists in Coventry that deliver happier, healthier smiles
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#63316b]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book An Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="bg-white/80 backdrop-blur-sm text-[#63316b] px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 inline-flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>024 76 31 2256</span>
              </button>
            </div>

            {/* Quick Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#63316b]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#63316b]" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Same Day Emergency Care
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#63316b]/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-[#63316b]" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Advanced Technology
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#63316b]" />
                  <span className="text-gray-700">
                    94 Coventry Rd Bedworth, Coventry CV12 8NW United Kingdom
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#63316b]" />
                  <span className="text-gray-700">Mon-Fri: 8AM-6PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Space for 3D Element */}
          {/* <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-[36rem] rounded-2xl border border-gray-200/50 flex items-center justify-center">
              <iframe
                src="https://my.spline.design/untitled-g41916vVo1fiGca33wbZbm3e/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-2xl"
                title="3D Spline Element"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
