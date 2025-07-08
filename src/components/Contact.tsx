import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: "94 Coventry Rd\nBedworth, Coventry\nCV12 8NW\nUnited Kingdom",
    },
    {
      icon: Phone,
      title: "Call Us Today", 
      details: "024 76 31 2256",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "reception@deoldental.com",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server or displaying a success message.
    console.log("Form Data:", formData);
    alert("Form submitted! (Check console for data)");
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#63316b]/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Contact Us</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
            <span className="block text-[#63316b]">Today</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your journey to better oral health? Contact us to
            schedule your consultation or ask any questions you might have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Visit Our Practice
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#63316b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#63316b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.details}</p>
                      {info.extra && (
                        <p className="text-sm text-gray-500 mt-1">
                          {info.extra}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h4>
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Coventry Road Dental Care Location"
                  src="https://www.google.com/maps?q=94+Coventry+Rd,+Bedworth,+Coventry+CV12+8NW,+United+Kingdom&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div> 

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#63316b] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#63316b] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#63316b] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#63316b] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#63316b] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service...</option>
                  <option value="general">General Dentistry</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="implants">Dental Implants</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="emergency">Emergency Care</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#63316b] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your dental needs or questions..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#63316b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
