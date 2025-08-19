import { useState } from "react";
import { Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sendContactEmail } from "@/utils/emailService";
import Marquee from "../components/MarqueeLogo";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Implement email sending logic
      await sendContactEmail({
        firstName: formData.name.split(" ")[0],
        lastName: formData.name.split(" ").slice(1).join(" "),
        email: formData.email,
        service: formData.subject,
        message: formData.message,
      });

      toast({
        title: "Feedback Submitted",
        description:
          "Thank you for your feedback. We will review and respond as soon as possible.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyConsent: false,
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadComplaintsProcedure = () => {
    const downloadUrl =
      "/document/Coventry Road Dental Practice - Code of Practice.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Coventry Road Dental Practice - Code of Practice.pdf";

    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: "Your document download has started.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Feedback & <span className="text-[#63316b]">Complaints</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We value your feedback and are committed to providing the highest
              quality of care. If you have any comments, suggestions, or
              concerns, please use the form below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Complaints Procedure */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Download className="mr-3 w-6 h-6 text-[#63316b]" />
                    Complaints Procedure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We take your feedback seriously. Download our comprehensive
                    complaints procedure to understand how we handle and resolve
                    concerns.
                  </p>
                  <Button
                    onClick={downloadComplaintsProcedure}
                    variant="outline"
                    className="w-full border-[#63316b] text-[#63316b] hover:bg-[#63316b]/10"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Feedback Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Complete Our Feedback Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Your feedback helps us improve our services. Please fill out
                    the form below.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b]"
                        placeholder="Brief description of your feedback"
                      />
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
                        placeholder="Please provide detailed feedback or describe your complaint..."
                        required
                        className="border-border focus:ring-[#63316b] focus:border-[#63316b] resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="privacyConsent"
                          name="privacyConsent"
                          checked={formData.privacyConsent}
                          onChange={handleInputChange}
                          required
                          className="mr-2 text-[#63316b] focus:ring-[#63316b]"
                        />
                        <label
                          htmlFor="privacyConsent"
                          className="text-sm text-muted-foreground"
                        >
                          I understand that Coventry Road Dental Care will store
                          and use my contact details to respond to and progress
                          my query.
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#63316b] hover:bg-[#63316b]/90 text-white"
                      size="lg"
                    >
                      <span>
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
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

      <Marquee />

      <Footer />
    </div>
  );
};

export default FeedbackPage;
