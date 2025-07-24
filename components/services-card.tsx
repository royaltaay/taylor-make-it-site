"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  "Responsive Websites",
  "E-Commerce Stores",
  "Booking Systems",
  "SEO Optimization",
  "Content Management",
  "Social Media Integration",
];

export function ServicesCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl border border-[#D5D5D5] p-8 text-center flex flex-col justify-center min-h-[500px]"
    >
      <div>
        <div className="space-y-4 text-xl text-gray-700 mb-16">
          {services.map((service, index) => (
            <p
              key={index}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {service}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-normal mb-3">Everything you need</h3>
          <p className="text-gray-600 text-xl">
            Powerful features, endless
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}