import React, { useState } from "react";
import Modal from "../ui/Modal";
import H3 from "../shared/Typography/H3";
import P from "../shared/Typography/P";
import { getBaseUrl } from "../shared/BaseNameUtils";
import Button from "../shared/Button/Button";

interface ProjectCardProps {
  name: string;
  description: string;
  year: number;
  type: string;
  image: string;
  githubRepo: string;
  liveSite: string;
}

const ProjectCard: React.FC<{ data: ProjectCardProps }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { name, description, year, type, image, githubRepo, liveSite } = data;

  return (
    <div className="cursor-pointer group ">
      {/* Project Card */}

      <div
        role="link"
        tabIndex={0}
        className="group block relative rounded-xl shadow-sm overflow-hidden
             focus:outline-none focus:ring-2 focus:ring-offset-2
             focus:ring-indigo-500"
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        aria-label={`View details for ${name}`}
      >
        {/* Image */}
        <img
          src={getBaseUrl(image)}
          alt={name}
          className="w-full h-80 object-cover hover:scale-105 transition duration-300 ease-in-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = getBaseUrl(
              "assets/Robot_builder.svg"
            );
          }}
        />
      </div>
      {/* Project Info */}
      <div
        className="flex justify-between gap-1 m-3 group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col ">
          {/* Project Title */}
          <H3 className="text-xl sm:text-3xl font-bold text-wrap">{name}</H3>
          <P className="text-xs sm:text-sm ">
            {type} - {year}
          </P>
        </div>
        <div className="my-auto group-hover:scale-125 transform duration-300  m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          opacity="bg-opacity-80"
          className="animate-fadeInScale cursor-default"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="flex  flex-col lg:flex-row items-start gap-3 sm:h-[65vh] my-4">
            {/* Left Column: Image */}
            <div className="flex-1 lg:w-2/3 h-full shadow-xl">
              <img
                src={getBaseUrl(image)}
                alt={name}
                className="rounded-lg w-full h-full mx-2 object-cover shadow-lg "
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `${getBaseUrl("assets/Robot_builder.svg")}`;
                }}
              />
            </div>

            {/* Right Column: Details */}
            <div className="flex-1 m-2 py-2">
              <div className="text-sm dark:text-whiteFont-600 ">
                <span className="font-semibold">{`${type}`}</span>
              </div>
              <H3 className="font-bold font-header text-3xl mb-4">{name}</H3>
              <P className="mb-5">{description}</P>

              {/* Links */}
              <div className="flex justify-between sm:justify-start gap-3 ">
                <Button
                  href={githubRepo}
                  target="_blank"
                  className="transition-transform transform hover:-translate-y-1 active:translate-y-0.5"
                >
                  GitHub Repo
                </Button>
                <Button
                  href={liveSite}
                  target="_blank"
                  buttonType="gradient"
                  className="transition-transform transform hover:-translate-y-1 active:translate-y-0.5"
                >
                  Live Site
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
