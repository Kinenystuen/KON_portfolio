import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Modal from "../ui/Modal";
import H3 from "../shared/Typography/H3";
import P from "../shared/Typography/P";

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
        className="bg-white relative group rounded-sm shadow-md overflow-hidden cursor-pointer hover:shadow-lg"
        onClick={() => setIsModalOpen(true)}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${name}`}
      >
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/Robot_builder.svg";
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
          <div className="absolute top-[-20px] right-0 w-full flex justify-start">
            <P className="text-white text-sm m-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              {type} - {year}
            </P>
          </div>

          {/* Project Title */}
          <H3 className="relative text-white">{name}</H3>
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
                src={image}
                alt={name}
                className="rounded-lg w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/path/to/placeholder-image.jpg";
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
