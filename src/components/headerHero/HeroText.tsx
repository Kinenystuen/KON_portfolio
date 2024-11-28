import React from "react";

const HeroText: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background text SVG */}
      <img
        className="
          absolute
          top-0
          left-0
          z-10
          transform
          lg:scale-150
          md:scale-175
          sm:scale-200
            scale-300
          
          md:scale-
          -translate-x-1
          -translate-y-1/3
          opacity-10
          pointer-events-none
        "
        src="/src/assets/KON_text.svg"
        alt="KON text svg"
      />

      {/* Gradient overlay */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#A3C0A3" stopOpacity="0.1">
              <animate
                attributeName="stop-opacity"
                values="0;0.5;0"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#A3C0A3" stopOpacity="0.5">
              <animate
                attributeName="stop-opacity"
                values="0.5;1;0.5"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#A3C0A3" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;0.5;0"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Overlay Rectangle */}
        <rect x="0" y="0" width="100" height="100" fill="url(#gradient)" />
      </svg>
    </div>
  );
};

export default HeroText;
