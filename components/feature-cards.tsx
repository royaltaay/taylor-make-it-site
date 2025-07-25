"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FeatureCard {
  image: string;
  title: string;
  description: string;
  altText: string;
}

const features: FeatureCard[] = [
  {
    image: "/images/custom design.png.webp",
    title: "Custom design",
    description: "Visually stunning, responsive designs tailored to your brand.",
    altText: "Custom website design icon - Tailored web solutions",
  },
  {
    image: "/images/fast delivery.png.webp",
    title: "Fast Delivery",
    description: "Receive your project in as little as 1 week.",
    altText: "Fast website delivery icon - Quick turnaround times",
  },
  {
    image: "/images/premium quality.png.webp",
    title: "Premium Quality",
    description: "Expert-level design and development on each project.",
    altText: "Premium quality web development icon - Professional standards",
  },
];

export function FeatureCards() {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`border border-[#D5D5D5] rounded-2xl p-8 bg-white flex flex-col h-[450px] transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
          }}
        >
          <div className="h-[200px] flex items-center justify-center mb-8">
            <Image
              src={feature.image}
              alt={feature.altText}
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}