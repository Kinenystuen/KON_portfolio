import React, { useEffect, useState } from "react";
import FetchKnowledge from "./fetchKnowledge";
import { Link } from "react-router-dom";

interface KnowledgeCardsProps {
  isInView: boolean;
}

const KnowledgeCards: React.FC<KnowledgeCardsProps> = ({ isInView }) => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    if (isInView) {
      // Reset and start animation
      setVisibleIndex(-1);
      const interval = setInterval(() => {
        setVisibleIndex((prevIndex) => {
          if (prevIndex < 10 - 1) {
            // Adjust length based on cards
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 150);

      return () => clearInterval(interval); // Cleanup interval
    }
  }, [isInView]);

  return (
    <FetchKnowledge>
      {(data) => (
        <div className="flex flex-wrap gap-2 justify-center">
          {data.map((knowledge, index) => (
            <Link
              to={knowledge.link}
              key={knowledge.id}
              className={`bg-white p-2 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
                visibleIndex >= index
                  ? "motion-scale-in-[0.9] motion-translate-x-in-[0%] motion-translate-y-in-[7%] motion-opacity-in-[50%] motion-duration-[1.50s]"
                  : "opacity-0 scale-90 translate-y-10"
              }`}
            >
              <img
                src={knowledge.image}
                alt={knowledge.name}
                title={knowledge.name}
                className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
              />
            </Link>
          ))}
        </div>
      )}
    </FetchKnowledge>
  );
};

export default KnowledgeCards;
