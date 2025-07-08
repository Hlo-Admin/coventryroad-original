import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ServiceTiles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;
    let interval: NodeJS.Timeout;

    const autoScroll = () => {
      if (isPaused) return;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const startScrolling = () => {
      interval = setInterval(autoScroll, scrollDelay);
    };

    const stopScrolling = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    startScrolling();

    return () => {
      stopScrolling();
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollBehavior: "smooth" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group flex-none w-80 h-[340px]" // Fixed width and height for all cards
            >
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 w-80 h-[340px] flex flex-col">
                {/* Background Image */}
                <div className="h-48 w-full overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-[#63316b] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
