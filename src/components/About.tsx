import {
  Award,
  Heart,
  Users,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const About = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title =
      "About Us - Coventry Road Dental Care | Expert Dental Team Coventry";
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 relative">
          <img
            src="/about/banner.JPG"
            alt="Coventry Road Dental Care Landscape View"
            className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>{" "}
          {/* darker overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                About Coventry Road Dental Care
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
                At Coventry Road Dental Care Our Passion Is Your Smile
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Excellence In Dental Care
            </h3>
          </div>
          <h4 className="text-xl font-semibold text-[#63316b] mb-4">
            Why Choose Us
          </h4>
          <p className="text-lg text-gray-700 mb-4">
            At Coventry Road Dental Care, our passion is your smile. Our team
            has a real desire to see our patients' lives transformed through
            considerate dental care that results in healthy mouths and confident
            smiles.
          </p>
          <p className="text-lg text-gray-700">
            Enjoy the peace of mind that comes from knowing that our priority is
            you and your family. We remain mindful of your budget and always aim
            to provide treatment options that reflect your desired outcome and
            your pocket.
          </p>
        </div>

        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              More than 25 Years of Experience
            </h3>
          </div>
        </div>

        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Market Excellence
            </h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            At Coventry Road Dental Care we withhold the highest of industry
            standards. Exceeding patient expectations. We will continue to grow
            in our professional skills through continuing education and
            dedication to be the best.
          </p>

          <h4 className="text-xl font-semibold text-[#63316b] mb-4">
            Recognising Our Commitment to Quality
          </h4>
          <p className="text-lg text-gray-700 mb-4">
            Coventry Road Dental Care is delighted to have achieved the British
            Dental Association's Good Practice Award, which is a recognised
            trademark across the UK. BDA Good Practice demonstrates our
            commitment to quality and our dedication to providing excellent
            levels of care to our patients. To achieve Good Practice
            accreditation dental practices have to meet strict criteria and
            reaching this level shows that our standards are among the highest.
          </p>
          <p className="text-lg text-gray-700">
            BDA Good Practice is a quality assurance programme that allows us to
            communicate our ongoing commitment to working to standards of good
            practice on professional and legal responsibilities.
          </p>
        </div>

        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Join Our Friendly Practice
            </h3>
          </div>
          <p className="text-lg text-gray-700">
            We are passionate about creating healthy, beautiful smiles through
            the provision of good-value, essential dental services – with the
            option of NHS and private treatments that help you maintain optimum
            oral health.
          </p>
        </div>

        <div className="mb-16 glass p-8 rounded-3xl">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-[#63316b] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Your smile is our passion
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Family friendly practice</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">
                Dedicated to caring for your children's dental needs
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">12 dental surgeries</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">
                NHS and private treatments for great value and choice
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">
                Reassuring regular care that focuses on health
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">
                A talented team of dental professionals
              </span>
            </div>
            <div className="flex items-center space-x-3 md:col-span-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">
                Nervous patients especially welcome
              </span>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-[#63316b] mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">FAQs</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#63316b] mb-2">
                  Do you offer new patient appointments?
                </h4>
                <p className="text-gray-700">
                  Yes, our comprehensive new patient appointments are 20 minutes
                  long. Please refer to our New Patients section for further
                  details. Please call 02476 312256 – our friendly receptionists
                  will be waiting to make an appointment for you.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#63316b] mb-2">
                  Can you offer support to nervous patients?
                </h4>
                <p className="text-gray-700">
                  We completely understand that some people just do not enjoy
                  visiting the dentist but we do everything we can to make sure
                  that patients look forward to coming to see us. We will
                  immediately try to put you at ease and alleviate any feelings
                  of anxiety you may have.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#63316b] mb-2">
                  What range of treatments do you offer?
                </h4>
                <p className="text-gray-700">
                  We offer an extensive range of dental treatments including
                  everyday care and more complex treatments such as dental
                  implants and adult orthodontics. We would be delighted to meet
                  you and discuss your needs. Please see our General and
                  Cosmetic treatments sections for more details on our services.
                  Alternatively, call us on 02476 312256 and we will be pleased
                  to make an appointment for you.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              setApi={setApi}
              className="w-full max-w-md"
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/about/carousel-1.JPG"
                    alt="Coventry Road Dental Care Carousel 1"
                    className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/about/carousel-2.JPG"
                    alt="Coventry Road Dental Care Carousel 2"
                    className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/about/carousel-3.JPG"
                    alt="Coventry Road Dental Care Carousel 3"
                    className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
