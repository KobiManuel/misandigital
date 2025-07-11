import React from "react";

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="150"
    height="35"
    viewBox="0 0 150 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="5"
      y="25"
      fontFamily="Inter, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="url(#gradient)"
    >
      Misan
      <tspan fill="#fbffde">Digital</tspan>
    </text>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
