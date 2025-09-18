import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for Google Sheets
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });
      formDataToSubmit.append("formType", "contact");

      // Submit to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzad2mv1Diw5X6GHHrhImy24_shdBXcTHTdw7xMPm_q0wMnmRlcyEVGcIUx8i7G9DsO/exec",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for your inquiry. We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call us directly at 024 76 31 2256.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your smile? Get in touch with our expert team
              at Coventry Road Dental.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://booking.uk.hsone.app/soe/new?pid=UKDEO01#/perspectives/1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#63316b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Consultation</span>
              </a>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Visit Our Practice
                </h2>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Address */}
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#63316b]/10 p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-[#63316b]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Our Location
                          </h3>
                          <p className="text-muted-foreground">
                            94 Coventry Road
                            <br />
                            Clifton Villa, Bedworth
                            <br />
                            Coventry, CV12 8NW
                          </p>
                          {/* <a 
                            href="https://www.google.com/maps?q=94+Coventry+Rd,+Bedworth,+Coventry+CV12+8NW,+United+Kingdom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-[#63316b] hover:underline font-medium"
                          >
                            View on Maps →
                          </a> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#63316b]/10 p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-[#63316b]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Phone Number
                          </h3>
                          <a
                            href="tel:02476312256"
                            className="text-lg font-semibold text-[#63316b] hover:underline"
                          >
                            024 76 31 2256
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            For emergencies and appointments
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#63316b]/10 p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-[#63316b]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Email Us
                          </h3>
                          <a
                            href="mailto:info@coventryroaddental.co.uk"
                            className="text-[#63316b] hover:underline"
                          >
                            reception@covrddental.co.uk
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            We'll get back to you soon
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Opening Hours */}
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#63316b]/10 p-3 rounded-lg">
                          <Clock className="w-6 h-6 text-[#63316b]" />
                        </div>
                        <div className="w-full">
                          <h3 className="font-semibold text-foreground mb-3">
                            Opening Hours
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Monday - Friday
                              </span>
                              <span className="text-foreground font-medium">
                                8:00 AM - 6:00 PM
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Saturday
                              </span>
                              <span className="text-foreground font-medium">
                                8:00 AM - 1:00 PM
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Sunday
                              </span>
                              <span className="text-foreground font-medium">
                                Closed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Request a Callback
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-foreground"
                        >
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-foreground"
                        >
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[#63316b] focus:border-[#63316b] outline-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="full-arch-implants">
                          Full Arch Implants
                        </option>
                        <option value="composite-bonding">
                          Composite Bonding
                        </option>
                        <option value="invisalign-braces">
                          Invisalign Braces
                        </option>
                        <option value="teeth-whitening">Teeth Whitening</option>
                        <option value="veneers">Veneers</option>
                        <option value="dental-implants">Dental Implants</option>
                        <option value="dentures">Dentures</option>
                        <option value="white-fillings">White Fillings</option>
                        <option value="fillings">Fillings</option>
                        <option value="night-guard">Night Guard</option>
                        <option value="dental-hygiene">Dental Hygiene</option>
                        <option value="childrens-dentistry">
                          Children's Dentistry
                        </option>
                        <option value="nervous-patients">
                          Nervous Patients
                        </option>
                        <option value="restorative-treatment">
                          Restorative Treatment
                        </option>
                        <option value="endodontic-treatment">
                          Endodontic Treatment
                        </option>
                        <option value="crowns-bridges">Crowns & Bridges</option>
                        <option value="sedation">Sedation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your dental needs or questions..."
                        required
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#63316b] hover:bg-[#63316b]/90 text-white"
                      size="lg"
                    >
                      <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
