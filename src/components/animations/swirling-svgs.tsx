
"use client";

import { cn } from '@/lib/utils';

const SwirlingSVGs = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <style jsx>{`
        .swirl {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 5s ease-in-out forwards, rotate 20s linear infinite;
          transform-origin: center;
        }
        .swirl-2 {
          animation-delay: 1s;
          animation-direction: alternate;
        }
        .swirl-3 {
            animation-delay: 2s;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="opacity-10">
        <path
          className="swirl swirl-1"
          d="M100,400 C100,200 400,100 600,200 S1100,300 1100,400 S900,700 600,600 S100,600 100,400 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="swirl swirl-2"
          d="M200,500 C200,300 500,200 700,300 S1000,400 1000,500 S800,800 500,700 S200,700 200,500 Z"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          className="swirl swirl-3"
          d="M300,300 C300,100 600,50 800,150 S1200,250 1200,350 S1000,650 700,550 S300,500 300,300 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SwirlingSVGs;
