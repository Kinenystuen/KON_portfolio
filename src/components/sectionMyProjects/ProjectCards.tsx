import React, { useEffect, useState } from "react";
import FetchProjects from "./fetchProjects";
import ProjectCard from "./ProjectCard";

interface ProjectCardsProps {
  isInView: boolean;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ isInView }) => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 150);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <FetchProjects>
      {(data) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <div
              key={project.id}
              className={`transition-opacity duration-500 ${
                index <= visibleIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <ProjectCard data={project} />
            </div>
          ))}
        </div>
      )}
    </FetchProjects>
  );
};

export default ProjectCards;