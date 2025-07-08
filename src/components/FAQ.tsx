import React from 'react';
// Assuming these are imported from a UI library like Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust path as per your project structure

const FAQ: React.FC = () => {
  const faqs = [
  {
    question: "I’m a nervous patient, how can you help?",
    answer:
      "Here at Coventry Dental Care, we welcome nervous patients all the time. We want you to be at ease at each appointment. We can help you with relaxation techniques. We offer sedation if needed — your comfort is our priority.",
  },
  {
    question: "Do you offer emergency appointments?",
    answer:
      "We try our best to accommodate as many emergencies as we can. Just call us on 024 76 31 2256 or email us at reception@deoldental.com and our friendly reception team will assist you further.",
  },
  {
    question: "Do you offer finance?",
    answer:
      "Yes! We understand paying in full may not always be feasible. We offer 12 months interest-free finance if applicable.",
  },
  {
    question: "Are you open weekends?",
    answer:
      "We are open 8:00am – 1:00pm on Saturdays.",
  },
  {
    question: "What treatments do you offer?",
    answer:
      "We offer a broad range of treatments from standard preventative dentistry such as check-ups, X-rays, fillings and extractions, to advanced dentistry such as root canal treatments, crowns, bridges, dentures, and veneers. Private treatments include whitening, composite bonding and Invisalign.",
  },
];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
