"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to build a website?",
    answer: "For starter sites, I typically deliver within 1-2 weeks. Growth sites with more complex features and pages usually take 2-4 weeks. The timeline can vary based on how quickly you provide feedback and content.",
  },
  {
    question: "What's included in the price?",
    answer: "Everything you need for a complete website: custom design, responsive development, basic SEO setup, domain connection, and the specified number of revision rounds. I handle all the technical details so you can focus on your business.",
  },
  {
    question: "Do I need to provide content and images?",
    answer: "Yes, you'll need to provide the text content and any specific images or branding materials. However, I can guide you on content structure and recommend stock imagery if needed. Clear communication about your business helps me create the perfect site.",
  },
  {
    question: "Can I update the website myself after launch?",
    answer: "Absolutely! I can integrate a content management system that allows you to easily update text, images, and add new content. During handoff, I'll provide training on how to make common updates. For more complex changes, I offer maintenance packages.",
  },
  {
    question: "What if I need changes after my revisions are used?",
    answer: "Additional revisions can be added at an hourly rate, or you can opt for the monthly maintenance plan which includes ongoing updates and support. I'm always here to help your website grow with your business.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-normal text-center mb-16">
          Frequently asked questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#D5D5D5] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-medium pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`px-8 transition-all duration-300 ${
                  openIndex === index
                    ? "py-6 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-xl text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}