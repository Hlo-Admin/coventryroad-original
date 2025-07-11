
import {
  Shield,
  Phone,
  Sparkles,
  Heart,
  Zap,
  Wrench,
  MoveRight,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Services = () => {
  const services = [
    {
      title: "Full Arch Implants",
      image: "/home/services/Full Arch Implants.jpg",
      path: "/full-arch-implants",
    },
    {
      title: "Composite Bonding",
      image: "/home/services/Composite Bonding.jpg",
      path: "/composite-bonding",
    },
    {
      title: "Invisalign Braces",
      image: "/home/services/Invisalign Braces.webp",
      path: "/invisalign-braces",
    },
    {
      title: "Teeth Whitening",
      image: "/home/services/Teeth Whitening.jpg",
      path: "/teeth-whitening",
    },
    {
      title: "Veneers",
      image: "/home/services/Veneers.jpg",
      path: "/veneers",
    },
    {
      title: "Dental Implants",
      image: "/home/services/Dental Implants.jpg",
      path: "/dental-implants",
    },
    {
      title: "Dentures",
      image: "/home/services/Dentures.jpg",
      path: "/dentures",
    },
    {
      title: "White Fillings",
      image: "/home/services/White Fillings.jpg",
      path: "/white-fillings",
    },
  ];

  // Split into two rows
  const topRow = services.slice(0, 4);
  const bottomRow = services.slice(4, 8);

  // Carousel refs
  const topApiRef = useRef(null);
  const bottomApiRef = useRef(null);

  // Auto-scroll top row right
  useEffect(() => {
    const interval = setInterval(() => {
      if (topApiRef.current) {
        topApiRef.current.scrollNext();
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll bottom row left
  useEffect(() => {
    const interval = setInterval(() => {
      if (bottomApiRef.current) {
        bottomApiRef.current.scrollPrev();
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block text-[#63316b]">Services</span>
          </h2>
        </div>

        {/* Desktop View - Carousel rows */}
        <div className="hidden lg:block space-y-8">
          {/* Top Row Carousel */}
          <Carousel
            setApi={(api) => (topApiRef.current = api)}
            opts={{ loop: true, slidesToScroll: 1 }}
          >
            <CarouselContent className="flex">
              {topRow.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 max-w-[33.333%] px-2"
                >
                  <Link
                    to={service.path}
                    className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#63316b]/20"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        style={{ display: "block" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#63316b] transition-colors">
                        {service.title}
                      </h3>

                      {/* CTA */}
                      <div className="inline-flex items-center space-x-2 text-[#63316b] font-semibold group/btn">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-[#63316b]/0 group-hover:bg-[#63316b]/5 transition-all duration-500"></div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Bottom Row Carousel */}
          <Carousel
            setApi={(api) => (bottomApiRef.current = api)}
            opts={{ loop: true, slidesToScroll: 1 }}
          >
            <CarouselContent className="flex">
              {bottomRow.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 max-w-[33.333%] px-2"
                >
                  <Link
                    to={service.path}
                    className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#63316b]/20"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        style={{ display: "block" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#63316b] transition-colors">
                        {service.title}
                      </h3>

                      {/* CTA */}
                      <div className="inline-flex items-center space-x-2 text-[#63316b] font-semibold group/btn">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-[#63316b]/0 group-hover:bg-[#63316b]/5 transition-all duration-500"></div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mobile/Tablet View - Grid layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#63316b]/20"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  style={{ display: "block" }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#63316b] transition-colors">
                  {service.title}
                </h3>

                {/* CTA */}
                <div className="inline-flex items-center space-x-2 text-[#63316b] font-semibold group/btn">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#63316b]/0 group-hover:bg-[#63316b]/5 transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link
          to="/treatments"
          className="bg-white/80 backdrop-blur-sm text-[#63316b] px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 inline-flex items-center justify-center text-center gap-2"
        >
          <MoveRight className="w-5 h-5" />
          <span>View All Services</span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
