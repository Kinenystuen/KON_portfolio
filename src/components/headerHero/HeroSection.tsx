import React from "react";
import HeroText from "./HeroText";
import "./HeroSection.css";
import ScrollDownArrow from "../ArrowDown";
import H1 from "../shared/Typography/H1";
import { getBaseUrl } from "../shared/BaseNameUtils";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:min-h-[80vh] lg:h-full mt-6">
      <H1 className="text-2xl md:text-4xl font-bold text-center xs:mb-[10%] sm:mb-[0%]">
        Kine Odden Nystuen
      </H1>

      {/* Hero section with green box and image */}
      <div className="relative w-4/5">
        {/* Hero Image */}
        <div className="absolute bottom-0 left-[0%] sm:left-[10%] md:left-[15%] lg:left-[18%] z-30">
          <img
            src={getBaseUrl("assets/KON_cropped.png")}
            alt="Kine Odden Nystuen"
            className="xs:h-90  w-auto"
          />
        </div>

        {/* Green Box */}
        <div className="flex flex-col items-center content-center relative shadow-md rounded-md bg-customGreen dark:bg-customGreenDark overflow-hidden w-full h-80 mt-1 sm:mt-10">
          <HeroText />
        </div>
      </div>

      <p className="text-lg font-bold mt-4 motion-scale-in-[0.45] motion-duration-[1.50s]/scale motion-delay-[0.00s]/scale">
        Front-end Developer.
      </p>
      <ScrollDownArrow />
    </div>
  );
};

export default HeroSection;
