
import React from "react";

const ConsultationCTA = () => (
  <section className="relative py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#63316b] rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="relative">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your comprehensive consultation today and discover how we can
            help you achieve the perfect smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <span>Schedule Consultation</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <button className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              <span>Call (024) 7699 2020</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ConsultationCTA;
