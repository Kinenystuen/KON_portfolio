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
    <>
      {/* Project Card */}
      <div
        className="bg-white relative group rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg"
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
        className="flex justify-between gap-1 m-3"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col">
          {/* Project Title */}
          <H3 className="text-xl sm:text-3xl font-bold cursor-pointer">
            {name}
          </H3>
          <P className="text-xs sm:text-sm cursor-pointer">
            {type} - {year}
          </P>
        </div>
        <div className="my-auto hover:scale-110 transform duration-300 cursor-pointer m-1">
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
          title={name}
          opacity="bg-opacity-80"
          className="max-w-screen-lg animate-fadeInScale"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col lg:flex-row items-start gap-3 sm:h-[50vh] mb-5">
            {/* Left Column: Image */}
            <div className="lg:w-2/3 h-full shadow-xl">
              <img
                src={getBaseUrl(image)}
                alt={name}
                className="rounded-lg w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `${getBaseUrl("assets/Robot_builder.svg")}`;
                }}
              />
            </div>

            {/* Right Column: Details */}
            <div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">{`Project Type: ${type}`}</span>
              </div>
              <H3 className="font-bold font-header text-3xl mb-4">{name}</H3>
              <P className="text-gray-700 mb-6">{description}</P>

              {/* Links */}
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button px-4 py-2 bg-transparent text-customGreen-1000 hover:text-black hover:bg-customGreen border-customGreen hover:border-customGreen border-2 rounded-lg"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button px-4 py-2 bg-transparent text-customGreen-1000 hover:text-black hover:bg-customGreen border-customGreen hover:border-customGreen border-2 rounded-lg"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
