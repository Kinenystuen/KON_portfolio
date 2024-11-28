import React from "react";
import { Link } from "react-router-dom";
import Section from "../shared/Section";

interface InterestsProps {
  images: React.ReactNode;
  link: string;
  direction?: "left" | "right";
}

const InterestsSetup: React.FC<InterestsProps> = ({
  images,
  link,
  direction
}) => {
  const containerClasses =
    direction === "left" ? "flex-row-reverse " : "flex-row";

  return (
    <Section
      animate={true}
      visible={80}
      className="w-full py-2 transition-transform duration-100 ease-out"
    >
      <div className={`flex items-center w-full ${containerClasses}`}>
        <div className="w-1/12 bg-transparent h-full"></div>
        {images}
      </div>
      <div className="text-center my-3">
        <Link
          to={link}
          className="button text-customGreen-900 hover:text-customGreen-600 text-lg font-bold"
        >
          See more
        </Link>
      </div>
    </Section>
  );
};

export default InterestsSetup;
