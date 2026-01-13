"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const counterData = [
  {
    icon: "/images/logoTwo.png",
    endValue: 24,
    title: "Active Projects",
    suffix: "+",
  },
  {
    icon: "/images/logoThree.png",
    endValue: 500,
    title: "Dedicated Employees",
    suffix: "+",
  },
  {
    icon: "/images/logoFour.png",
    endValue: 15,
    title: "Years of Excellence",
    suffix: "",
  },
  {
    icon: "/images/logoOne.png",
    endValue: 50,
    title: "Strategic Partners",
    suffix: "+",
  },
];

interface CounterCardProps {
  icon: string;
  endValue: number;
  title: string;
  suffix: string;
  delay: number;
}

function CounterCard({
  icon,
  endValue,
  title,
  suffix,
  delay,
}: CounterCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = endValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), endValue));
      } else {
        setCount(endValue);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-3xl p-8 lg:p-10 transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon Container */}
        <div
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "#0000FE0D" }}
        >
          <div className="relative w-10 h-10 lg:w-12 lg:h-12">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
        </div>

        {/* Counter Number */}
        <div className="mb-4">
          <span className="text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-900 tabular-nums">
            {count}
          </span>
          <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600">
            {suffix}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-semibold text-gray-700 leading-tight">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="py-16 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {counterData.map((item, index) => (
            <CounterCard
              key={index}
              icon={item.icon}
              endValue={item.endValue}
              title={item.title}
              suffix={item.suffix}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
