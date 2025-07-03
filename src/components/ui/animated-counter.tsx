"use client";

import { useEffect, useState, useRef } from 'react';

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

const AnimatedCounter = ({ end, duration = 2000, suffix = '', className = '' }: { end: number, duration?: number, suffix?: string, className?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easedPercentage = easeOutQuint(percentage);
            
            setCount(Math.floor(easedPercentage * end));
            
            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration]);

  return <span ref={ref} className={className}>{count.toLocaleString()}{suffix}</span>;
};

export default AnimatedCounter;
