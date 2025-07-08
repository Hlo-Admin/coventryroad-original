import React, { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const testimonials = [
  {
    name: "Jan Wheatley",
    text: "Wanted to thank Dr Deol for entirely pain free tooth extraction today. Brilliant experience as was a little nervous. Very informative and empathetic consultation. Thank you",
  },
  {
    name: "Myrtle Allen",
    text: "Always happy to go to my appointments always leave with a big smile thank you 😊",
  },
  {
    name: "Kacper Dorau",
    text: "Been with this dentist for years, always been great. Everyone is always very friendly, would recommend!",
  },
  {
    name: "Ewelina Franczuk",
    text: "My whole family is registered with the practice. Always a very pleasant experience they are amazing with small kids would highly recommend.",
  },
  {
    name: "Owen Blood",
    text: "Good practise, friendly staff and professional environment with good service 🤝🏼",
  },
  {
    name: "Gurdeep Singh",
    text: "My mum had tooth removed dr salmon dentist and assistant done great caring removal 5 stars all the way will reccomend and use again thank you",
  },
];

const Testimonials = () => {
  const [autoplayPlugin, setAutoplayPlugin] = useState<any>(null);
  const pluginRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    import("embla-carousel-autoplay").then((mod) => {
      if (mounted) {
        pluginRef.current = mod.default({
          delay: 3500,
          stopOnInteraction: false,
        });
        setAutoplayPlugin(pluginRef.current);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
          What Our Customers Say
        </h2>
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{ align: "start", loop: true }}
            plugins={autoplayPlugin ? [autoplayPlugin] : []}
          >
            <CarouselPrevious />
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="flex justify-center basis-1/3 max-w-[33.333%]"
                >
                  <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg p-10 flex flex-col justify-between min-h-[220px] max-w-2xl w-full transition-transform hover:scale-[1.025] hover:shadow-xl duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#63316b]/10 flex items-center justify-center mr-3">
                        <span className="text-xl font-semibold text-[#63316b]">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-lg">
                        {t.name}
                      </span>
                      <span className="ml-2 text-[#63316b] text-xs font-bold tracking-widest">
                        ★★★★★
                      </span>
                    </div>
                    <blockquote className="text-gray-700 text-base md:text-lg italic mb-2 flex-1">
                      “{t.text}”
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex justify-center mt-12">
          <span className="text-gray-400 text-sm">
            Real reviews from real patients
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
