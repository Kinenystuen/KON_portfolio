import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Loader from "../ui/Loader";

interface Skill {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface KnowledgeCardsProps {
  isInView: boolean;
}

const KnowledgeCards: React.FC<KnowledgeCardsProps> = ({ isInView }) => {
  const { data, isLoading, isError } = useApi<Skill[]>("/json/skillsData.json");
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isInView && data && !hasAnimated) {
      setVisibleIndex(0);
      setHasAnimated(true);

      data.forEach((_, index) => {
        setTimeout(() => {
          setVisibleIndex((prevIndex) =>
            Math.min(prevIndex + 1, data.length - 1)
          );
        }, index * 150);
      });
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, hasAnimated, data]);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error fetching data...</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data.map((knowledge, index) => (
        <Link
          to={knowledge.link}
          key={knowledge.id}
          className={`bg-white p-2 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
            visibleIndex >= index
              ? "translate-x-0 translate-y-0 opacity-100"
              : "opacity-0 scale-90 translate-y-10"
          }`}
          style={{
            visibility: visibleIndex >= index ? "visible" : "hidden"
          }}
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
  );
};

export default KnowledgeCards;
