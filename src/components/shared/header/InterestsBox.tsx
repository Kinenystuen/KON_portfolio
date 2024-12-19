import { Link } from "react-router-dom";
import { getBaseUrl } from "../BaseNameUtils";
import H3 from "../Typography/H3";
import { useState, useRef } from "react";

interface InterestsBoxProps {
  title: string;
  image: string;
  link: string;
  imgPosition?: string;
}

const InterestsBox: React.FC<InterestsBoxProps> = ({
  title,
  image,
  link,
  imgPosition
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  let gradientClass = ``;

  switch (gradientClass) {
    case "green":
      gradientClass =
        "bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white";
      break;
    default:
      gradientClass =
        "from-color4-300 to-secondary-500 dark:from-customBgDark-600 dark:to-customBgDark-700 text-white";
  }

  return (
    <Link to={link}>
      <div
        ref={boxRef}
        className={`relative w-auto bg-gradient-to-br ${gradientClass} h-50 sm:h-72 w-auto flex-wrap p-4 flex flex-col justify-center content-center items-center rounded-xl shadow-md overflow-hidden cursor-pointer group`}
        tabIndex={0}
        role="button"
        aria-label={`View details for Hiking`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Hover Circle */}
        <div
          className={`absolute w-1 h-1 bg-white dark:bg-customBgDark-700 opacity-30 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-out ${
            isHovered ? "scale-[100]" : "scale-100"
          }`}
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`
          }}
        ></div>

        {/* Content */}
        <div
          className={`relative w-24 h-24 md:w-32 md:h-32 z-10 group-hover:scale-105 transition-transform duration-300 ${imgPosition}`}
        >
          <img
            className="absolute bottom-6 dark:invert"
            src={getBaseUrl(image)}
            alt="Illustration of a mountain"
          />
        </div>
        <H3 className="m-2 text-4xl !important uppercase font-other relative z-10 group-hover:scale-110 transition-transform duration-300">
          {title}
        </H3>
      </div>
    </Link>
  );
};

export default InterestsBox;
