import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
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

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollAmount = scrollContainer.scrollLeft;
    const scrollStep = 1;
    const scrollDelay = 20;
    let interval: NodeJS.Timeout;

    const autoScroll = () => {
      if (isPaused || !scrollContainer) return;
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

    interval = setInterval(autoScroll, scrollDelay);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Mouse drag scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      setIsPaused(true);
    };
    const onMouseLeave = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
      setIsPaused(false);
    };
    const onMouseUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
      setIsPaused(false);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      container.scrollLeft = scrollLeft - walk;
    };
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

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
          style={{ scrollBehavior: "smooth" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {services.map((service, index) => (
            <Link
              key={`${service.path}-${index}`}
              to={service.path}
              className="group flex-none w-80 h-[340px]"
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
