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
    question: "How does onboarding work?",
    answer: "Check out with a starter site and you'll be quickly added to your own Notion project. Once you're in Notion, you're ready to go. Further instructions on how to use Notion and the process are found within.",
  },
  {
    question: "Do I need to provide content and images?",
    answer: "For starter sites, you'll need to provide the text content and any specific images or branding materials. However, I can guide you on content structure and recommend imagery if needed. For growth sites, content polish, writing, and imagery are included.",
  },
  {
    question: "What if I need changes after my revisions are used?",
    answer: "The maintenance plan includes unlimited small updates and ongoing support — things like swapping photos, fixing typos, updating business hours, posting blogs, or making minor layout tweaks. Just send a quick email whenever you need something. Larger requests, like adding new pages, redesigning sections, or building new features aren't covered under the plan, but I'll always let you know ahead of time and can provide a separate quote if needed.",
  },
  {
    question: "Who designs and builds the website?",
    answer: "Every website is designed and built by me, Taylor — a senior designer with over 10 years of experience. I handle the entire process myself to ensure fast turnaround times and high-quality results.",
  }
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
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`px-8 transition-all duration-300 ${openIndex === index
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
