import { Link } from "react-router-dom";
import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";

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
  { title: "Veneers", image: "/home/services/Veneers.jpg", path: "/veneers" },
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
  {
    title: "Night Guard",
    image: "/home/services/night-guard.png",
    path: "/night-guard",
  },
  {
    title: "Dental Hygiene",
    image: "/home/services/dental-hygiene.jpg",
    path: "/dental-hygiene",
  },
  {
    title: "Fillings",
    image: "/home/services/fillings.jpg",
    path: "/fillings",
  },
  {
    title: "Children's Dentistry",
    image: "/home/services/children-dentistry.jpg",
    path: "/childrens-dentistry",
  },
  {
    title: "Nervous Patients",
    image: "/home/services/nervous-paitents.jpeg",
    path: "/nervous-patients",
  },
  {
    title: "Restorative Treatment",
    image: "/home/services/restorative-treatment.jpg",
    path: "/restorative-treatment",
  },
  {
    title: "Endodontic Treatment",
    image: "/home/services/endodontic-treatment.jpeg",
    path: "/endodontic-treatment",
  },
  {
    title: "Crowns & Bridges",
    image: "/home/services/crowns-bridges.jpg",
    path: "/crowns-bridges",
  },
  {
    title: "Sedation",
    image: "/home/services/sedation.jpg",
    path: "/sedation",
  },
];

const ExploreServicesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Improved auto-scroll effect with requestAnimationFrame
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastScrollTime = 0;
    const scrollSpeed = 1; // Reduced speed for smoother scroll
    const scrollInterval = 20; // Increased interval for smoother movement

    const autoScroll = (timestamp: number) => {
      // Prevent scrolling when paused or dragging
      if (isPaused || isDragging) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      // Throttle scroll to prevent excessive updates
      if (timestamp - lastScrollTime < scrollInterval) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      lastScrollTime = timestamp;

      // Reset scroll when reaching the end
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isDragging]);

  // Improved mouse drag scroll with more robust handling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setIsPaused(true);
      container.classList.add("cursor-grabbing");

      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      container.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      setIsDragging(false);
      setIsPaused(false);
      container.classList.remove("cursor-grabbing");
    };

    const onMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        setIsPaused(false);
        container.classList.remove("cursor-grabbing");
      }
    };

    // Use more modern event listeners
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isDragging]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: h2/para left, button right */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-left">
              Explore Our Services
            </h2>
            <p className="text-lg text-gray-600 text-left">
              Comprehensive dental care tailored to your needs
            </p>
          </div>
          <Link
            to="/services"
            className="bg-white/80 backdrop-blur-sm text-[#63316b] px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 inline-flex items-center justify-center text-center gap-2 mt-4 lg:mt-0"
          >
            <ArrowRight className="w-5 h-5" />
            <span>View All Services</span>
          </Link>
        </div>
        {/* Marquee Cards Row */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch", // Improve scrolling on touch devices
            scrollSnapType: "x mandatory", // Improve scroll snapping
          }}
        >
          {services.map((service, index) => (
            <Link
              key={`${service.path}-${index}`}
              to={service.path}
              className="group flex-none w-80 h-[340px] scroll-snap-align-center"
            >
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 w-80 h-[340px] flex flex-col">
                <div className="h-48 w-full overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
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

export default ExploreServicesCarousel;
