import { useState } from "react";
import { getBaseUrl } from "../../components/shared/BaseNameUtils";
import H1 from "../../components/shared/Typography/H1";
import P from "../../components/shared/Typography/P";
import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import HeroImage from "./HeroImage";
import Button from "../../components/shared/Button/Button";

type HeaderHeroProps = {
  onViewWorkClick: () => void;
};

const HeaderHero = ({ onViewWorkClick }: HeaderHeroProps) => {
  const { elementRef, isInView } = useInView(0.2);
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="relative">
      <img
        src={getBaseUrl("assets/hero_color.jpg")}
        alt="Hero color"
        className="fixed z-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        {/* Overlay */}
        <div
          className={`absolute inset-0 dark:bg-black dark:opacity-20 animate duration-700 ${isInView ? "dark:opacity-70" : ""} pointer-events-none`}
        ></div>
        <div className="relative w-full lg:h-screen">
          <div className="relative min-h-[70vh] md:min-h-[70vh] lg:min-h-[50vh] lg:max-h-[70vh] 2xl:min-h-[50vh]  pt-20 bg-customBg dark:bg-customBgDark flex content-end mb-20">
            <div className="relative z-20 flex flex-col-reverse lg:flex-row lg:items-end justify-center px-4 md:px-12 xl:px-32 mx-auto 2xl:max-w-7xl lg:gap-20">
              <HeroImage />

              <div className="flex flex-grow md:flex-1 w-full justify-end lg:justify-center flex-col items-center lg:items-end text-center gap-1 lg:text-right mt-20 xs:mt-10 mb-[-2.5rem] lg:mt-0 lg:mb-10 z-30">
                <H1 className="font-semibold text-[29px] md:text-[36px] xl:text-[44px] text-customBgDark dark:text-white leading-tight">
                  Kine Odden Nystuen
                </H1>
                <P className="text-[18px] md:text-[22px] xl:text-[27px] text-customBgDark/80 dark:text-gray-300">
                  Front-end Developer
                </P>

                <Button
                  buttonType="gradient"
                  className="mt-6 transition-transform transform hover:-translate-y-1 active:translate-y-0.5"
                  onClick={onViewWorkClick}
                >
                  View My Projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className=" w-full z-20 mt-20"
        >
          <div className=" mx-3 sm:mx-auto md:min-h-screen py-20 pb-40 pt-48 sm:pt-32 max-w-4xl 2xl:max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 2xl:gap-10 p-6 rounded-xl">
            {/* Profile Image */}
            <div className="overflow-hidden rounded-full w-56 h-56 2xl:w-80 2xl:h-80 shadow-lg flex-shrink-0">
              <img
                className="h-full w-full object-cover transition-transform duration-300 ease-out scale-150"
                src="/assets/img/IMG_0829Kine2.jpg"
                alt="Profile"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 flex flex-col text-center md:text-start space-y-2 z-30">
              {/* Greeting */}
              <P className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Hi there!
              </P>
              {/* Introduction */}
              <P className="font-header text-3xl md:text-4xl font-bold leading-tight text-gray-800 dark:text-gray-100">
                I'm
                <span className="text-violet-600 dark:text-violet-300 ms-2">
                  Kine
                </span>
                , a Front-end Developer and artist passionate about crafting
                <span className="text-violet-600 dark:text-violet-400">
                  {" "}
                  intuitive and user-friendly websites.
                </span>
              </P>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Svg wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg
          viewBox="0 0 1280 38"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-customBg dark:text-customBgDark"
          preserveAspectRatio="none"
        >
          <path
            d="M1280 11C1280 11 502.5 46 0 0.5V46H1280V11Z"
            className="fill-current"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderHero;
