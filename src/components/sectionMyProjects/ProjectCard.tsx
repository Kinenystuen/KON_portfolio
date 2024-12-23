import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Modal from "../ui/Modal";
import H3 from "../shared/Typography/H3";
import P from "../shared/Typography/P";
import { getBaseUrl } from "../shared/BaseNameUtils";

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
        className="bg-white dark:bg-customBgDark-500 relative rounded-xl shadow-md overflow-hidden  hover:shadow-lg"
        onClick={() => setIsModalOpen(true)}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${name}`}
      >
        {/* Image */}
        <img
          src={getBaseUrl(image)}
          alt={name}
          className="w-full h-80 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = getBaseUrl(
              "assets/Robot_builder.svg"
            );
          }}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <FontAwesomeIcon icon={faEye} className="text-white text-3xl" />
        </div>

        {/* Card Footer */}
        <div className="absolute bottom-0 w-full p-2">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

          {/* Hover Text */}
          <div className="absolute top-[-20px] right-0 w-full flex justify-start"></div>
        </div>
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
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button rounded transition duration-300 ease-in-out bg-gray-500 text-white hover:bg-gray-600 hover:text-white dark:bg-violet-900 dark:hover:bg-violet-800 dark:text-gray-100 border dark:border-violet-900"
                >
                  GitHub Repo
                </a>
                <a
                  href={liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button rounded transition duration-300 ease-in-out bg-gray-500 text-white hover:bg-gray-600 hover:text-white dark:bg-violet-900 dark:hover:bg-violet-800 dark:text-gray-100 border dark:border-violet-900"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
