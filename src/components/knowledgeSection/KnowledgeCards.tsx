import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Loader from "../ui/Loader";
import ErrorMessage from "../shared/ErrorMessage";
import Button from "../shared/Button/Button";
import P from "../shared/Typography/P";
import Tooltip from "../ui/ToolTip";
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
  const { data, isLoading, isError, errorMessage } = useApi<Skill[]>(
    `${import.meta.env.BASE_URL}json/skillsData.json`
  );
  const [skills, setSkills] = useState<Skill[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const updatedSkills = data.map((skill) => ({
        ...skill,
        image: skill.image
      }));
      setSkills(updatedSkills);
    }
  }, [data]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isInView && skills && !hasAnimated) {
      setVisibleIndex(0);
      setHasAnimated(true);

      skills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleIndex((prevIndex) =>
            Math.min(prevIndex + 1, skills.length - 1)
          );
        }, index * 150);
      });
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, hasAnimated, skills]);

  if (isLoading) return <Loader />;
  if (isError) {
    return (
      <ErrorMessage message="Data not found">
        <P>{errorMessage}</P>
        <Link to="/">
          <Button className="my-8 px-4 inline-block">Go to homepage</Button>
        </Link>
      </ErrorMessage>
    );
  }
  if (!skills) return <div>No data available</div>;

  return (
    <div className="flex flex-wrap gap-2 justify-center mx-auto max-w-4xl my-10">
      {[...skills].reverse().map((knowledge, index) => (
        <Tooltip text={knowledge.name} key={knowledge.id} position="bottom">
          <Link
            to={knowledge.link}
            key={knowledge.id}
            className={`bg-whiteRgba p-2 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
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
              className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default KnowledgeCards;
