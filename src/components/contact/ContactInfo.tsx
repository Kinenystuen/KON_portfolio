import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import H3 from "../shared/Typography/H3";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import P from "../shared/Typography/P";
import { socialMedia } from "../../library/constants";

const ContactInfo = () => {
  return (
    <div className="flex-1 flex-col justify-center container p-4 max-w-xs sm:max-w-md lg:max-w-lg ">
      <div className="flex justify-center items-center">
        <img
          src="assets/mail_illu3.png"
          width="200"
          alt="Mail letter illustration"
        />
      </div>
      <div>
        <H3 className="font-bold">Contact:</H3>
        <div className="flex items-center gap-2 my-2 bg-white dark:bg-customBgDark-500 rounded-md p-1">
          <div className="flex justify-center items-center bg-color4-200 dark:bg-transparent rounded-md m-1">
            <FontAwesomeIcon
              icon={faMailBulk}
              className="text-color4-600 dark:text-color4-200 p-[0.6rem]"
            />
          </div>
          <div className="flex flex-col">
            <a
              href="mailto:Kine_on@hotmail.com?subject=Hello%20Kine"
              className="text-customBgDark-500 hover:text-customBgDark-800 dark:text-whiteFont-500 dark:hover:text-whiteFont-300  hover:underline"
            >
              Kine_on@hotmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex-1 justify-center content-center mt-8 md:m-0">
        <div className="flex m-1 space-x-6">
          {socialMedia.map((media) => (
            <a
              key={media.id}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center content-center items-center gap-2 p-1 text-customBgDark-500 hover:text-color4 dark:text-whiteFont-500 dark:hover:text-color4 transition duration-300 ease-in-out"
              aria-label={`Visit ${media.platform}`}
            >
              <FontAwesomeIcon icon={media.icon} size="2xl" />
              <P>{media.platform}</P>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
