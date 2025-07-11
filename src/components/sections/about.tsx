"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";

const slides = [
  {
    title: "Grow Faster With AI",
    text: "Intelligent chatbots & automation tools to handle your customer questions, calls, DMs, Emails, close more sales and keep buyers happy even while you sleep. Our AI-driven solutions are tailored to your business, ensuring seamless customer experiences and freeing up your team to focus on what matters most. Embrace the future of business growth with technology that works around the clock.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80",
  },
  {
    title: "Stunning Content That Sells Your Experience",
    text: "Showcase your brand with visuals that stop the scroll and seal the deal. Our creative team crafts compelling stories and eye-catching designs that highlight your unique value, helping you stand out in a crowded market and connect emotionally with your audience.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80",
  },
  {
    title: "Grow Your Business With Elite Marketing",
    text: "We're the partner behind luxury brands who want more - and get it. Our elite marketing strategies are designed to elevate your brand, expand your reach, and drive measurable results. Experience the difference of working with a team that understands the nuances of high-end markets.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80",
  },
  {
    title: "Stop Paying Commissions. Own Your Leads.",
    text: "Say goodbye to middlemen. We drive direct inquiries and repeat clients. Take control of your sales pipeline and build lasting relationships with your customers, all while maximizing your ROI and reducing unnecessary costs.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80",
  },
  {
    title: "Scale Your Business With Data-Driven Marketing",
    text: "From stunning visuals to smart ads - we build your growth engine. Our data-driven approach ensures every marketing dollar is spent wisely, targeting the right audience at the right time for maximum impact and sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80",
  },
  {
    title: "Attract High-Net-Worth Clients",
    text: "We help you secure the VIP customers your brand deserves. With our proven strategies and exclusive network, you'll reach high-net-worth individuals who are ready to invest in your products and services, elevating your brand to new heights.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80",
  },
];

const SLIDE_INTERVAL = 4000;

const AboutSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper>
            <div
              className="space-y-4 transition-all duration-700"
              key={slides[current].title}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {slides[current].title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {slides[current].text}
              </p>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper delay={200}>
            <div
              className="w-full min-h-[400px] rounded-xl overflow-hidden shadow-lg transition-all duration-700"
              key={slides[current].image}
            >
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </AnimatedWrapper>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-6 rounded-full transition-all duration-300 ${
                idx === current ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
