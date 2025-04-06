import { useEffect, useState, useRef } from "react";
import { getBaseUrl } from "../../components/shared/BaseNameUtils";

const HeroImage = () => {
  const [style, setStyle] = useState({ transform: "", opacity: "" });
  const [styleImgContainer, setStyleImgContainer] = useState({ top: "80px" });
  const svgPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;

      const progress = Math.min(scrollY / maxScroll, 1);

      // Calculate scaling and fading for the image
      const scale = 1 - progress * 0.4; // scale down by up to 40%
      const opacity = 1 - progress;

      // Update the image style
      setStyle({
        transform: `scale(${scale})`,
        opacity: `${opacity}`
      });

      // Calculate new top for the container
      const initialTop = 80;
      const newTop = initialTop - progress * initialTop + -20;
      setStyleImgContainer({ top: `${newTop}px` });

      // Interpolate the SVG path's y values so that at progress=1, all y values become 0.
      // Original path:
      // M360.973 142.5
      // C206.966 145.619 173.5 0 0 0
      // H703
      // C529.5 0 508.24 139.517 360.973 142.5
      // Z

      const mY = 142.5 * (1 - progress);
      const c1y = 145.619 * (1 - progress);
      // c2's y is already 0, and the first cubic curve's end y is 0.
      // H command is horizontal so its value stays the same.
      const c4y = 139.517 * (1 - progress);
      const cEnd2y = 142.5 * (1 - progress);

      // Build the new path string with interpolated y values.
      const newPath = `M360.973 ${mY} C206.966 ${c1y} 173.5 0 0 0 H703 C529.5 0 508.24 ${c4y} 360.973 ${cEnd2y} Z`;

      // Update the path attribute if the ref is set.
      if (svgPathRef.current) {
        svgPathRef.current.setAttribute("d", newPath);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="relative flex flex-grow-1 justify-center content-end self-center">
        <div className="relative w-[80vw] h-[300px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
          <div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 rounded-full w-[60vw] h-[60vw] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden z-20"
            style={styleImgContainer}
          >
            <div className="absolute scale-300 right-20 top-6">
              <img
                src={getBaseUrl("assets/MeImage.jpg")}
                alt="Kine Odden Nystuen"
                className="h-full w-full object-cover"
                style={style}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SVG curve */}
      <div className="absolute bottom-[-143px] left-[50%] translate-x-[-50%] w-[100vw] lg:w-[700px] h-[144px] z-10">
        <svg
          viewBox="0 0 703 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-customBg dark:text-customBgDark w-full h-auto"
        >
          <path
            ref={svgPathRef}
            d="M360.973 142.5C206.966 145.619 173.5 0 0 0H703C529.5 0 508.24 139.517 360.973 142.5Z"
            className="fill-current"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroImage;
