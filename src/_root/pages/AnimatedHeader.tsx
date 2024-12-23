import React, { useEffect, useState } from "react";
import { getBaseUrl } from "../../components/shared/BaseNameUtils";
import H1 from "../../components/shared/Typography/H1";
import P from "../../components/shared/Typography/P";
import useInView from "../../hooks/useInView";
import { motion } from "framer-motion";

const AnimatedHeader: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [H1Top, setH1Top] = useState<number>(1.5);
  const [PTop, setPTop] = useState<number>(1.3);

  const { elementRef, isInView } = useInView(0.2);
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true); // Mark animation as completed
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const updateHero = () => {
      if (window.innerHeight < 300) {
        setH1Top(1.1);
        setPTop(1.8);
      } else if (window.innerHeight < 600) {
        setH1Top(1.4);
        setPTop(1.7);
      } else if (window.innerHeight < 800) {
        setH1Top(1.3);
        setPTop(1.8);
      } else if (window.innerHeight < 1000) {
        setH1Top(1.5);
        setPTop(1.7);
      } else {
        setH1Top(1.9);
        setPTop(1.5);
      }
    };

    updateHero();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHero);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHero);
    };
  }, []);

  const getBaseSizes = () => {
    if (window.innerWidth < 640) return { baseWidth: 90, baseHeight: 40 }; // sm
    if (window.innerWidth < 768) return { baseWidth: 70, baseHeight: 40 }; // md
    return { baseWidth: 60, baseHeight: 40 };
  };

  // Calculate the size of the mask
  const calculateSize = () => {
    const maxScroll = 300;
    const percentage = Math.min(scrollY / maxScroll, 1);

    const { baseWidth, baseHeight } = getBaseSizes();
    let corners = "";
    {
      scrollY <= 300 ? (corners = "rounded-lg") : (corners = "rounded-none");
    }

    const width = baseWidth + percentage * (100 - baseWidth);
    const height = baseHeight + percentage * (100 - baseHeight);

    return { width: `${width}vw`, height: `${height}vh`, corners };
  };

  const maskSize = calculateSize();

  // Calculate the bounce transform for the image
  const calculateBounceTransform = () => {
    const maxScroll = 100;
    const percentage = Math.min(scrollY / maxScroll, 1);

    const bounceScale = 1 + Math.sin(percentage * Math.PI) * 0.1;
    const translateY = percentage * 300;
    const scale2 = 1 - percentage;

    return { bounceScale, translateY, scale2 };
  };

  const { bounceScale, translateY, scale2 } = calculateBounceTransform();

  return (
    <div className="relative w-full h-[220vh] overflow-hidden dark:bg-gradient-to-tr dark:from-[#8284AE ] dark:to-[#7578A8]">
      <H1
        className="absolute left-1/2 text-2xl  sm:text-2xl md:text-4xl font-bold text-center transition-all duration-300 ease-out z-10"
        style={{
          top: `calc(${maskSize.height} - ${maskSize.height} / ${H1Top} )`,
          transform: `translate(-50%, -${scrollY}px)`,
          opacity: 1 - Math.min(scrollY / 200, 1)
        }}
      >
        Kine Odden Nystuen
      </H1>

      {/* Mask */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden ${maskSize.corners} shadow-lg`}
        style={{
          width: maskSize.width,
          height: maskSize.height,
          transition: "width 0.2s ease-out, height 0.2s ease-out"
        }}
      >
        <div>
          {/* Hero Image */}
          <div
            className="absolute bottom-0 left-0 sm:left-[10%] md:left-[15%] lg:left-[18%] z-30"
            style={{
              transform: `translateY(${translateY}px) scale(${scale2 * bounceScale})`,
              transition: "transform 0.3s ease-out"
            }}
          >
            <img
              src={getBaseUrl("assets/KON_cropped.png")}
              alt="Kine Odden Nystuen"
              style={{
                maxHeight: `${parseInt(maskSize.height) - 2}vh`,
                objectFit: "contain"
              }}
              className="w-auto max-w-full h-auto"
            />
          </div>

          {/* Background Image */}

          <div className="relative w-full h-screen">
            {/* Image */}
            <img
              src={getBaseUrl("assets/hero_color.jpg")}
              alt="Zoomed"
              className="absolute top-0 left-0 w-full h-screen object-cover object-bottom"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 dark:bg-black dark:opacity-20 animate duration-700 ${isInView ? "dark:opacity-70" : ""} pointer-events-none`}
            ></div>
          </div>
        </div>
      </div>
      <p
        className="absolute left-1/2 text-center text-lg font-bold mt-4 transition-all duration-300 ease-out motion-scale-in-[1] motion-duration-[1.50s]/scale motion-delay-[0.00s]/scale"
        style={{
          top: `calc(${maskSize.height} + ${maskSize.height} / ${PTop} )`,
          transform: `translate(-50%, -${scrollY}px)`,
          opacity: 1 - Math.min(scrollY / 100, 1)
        }}
      >
        Front-end Developer.
      </p>

      {/* About text? */}
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="absolute bottom-[40vh] w-full z-20"
      >
        <div className=" mx-3 sm:mx-auto h-[50vh] max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-xl">
          {/* Profile Image */}
          <div className="overflow-hidden rounded-full w-56 h-56 shadow-lg flex-shrink-0">
            <img
              className="h-full w-full object-cover transition-transform duration-300 ease-out scale-150"
              src="/assets/img/IMG_0829Kine2.jpg"
              alt="Profile"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col text-center md:text-start space-y-2">
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

      {/* Svg wave at bottom */}
      <div className="absolute bottom-0 left-0 w-screen">
        <svg
          viewBox="0 0 1280 38"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-customBg dark:text-customBgDark"
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

export default AnimatedHeader;
