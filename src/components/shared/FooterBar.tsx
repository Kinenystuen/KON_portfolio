import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../../library/constants";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import { getBaseUrl } from "./BaseNameUtils";

const FooterBar = () => {
  return (
    <footer className="relative z-20 bg-customBg dark:bg-customBgDark">
      <svg
        viewBox="0 0 1280 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="fill-color3 dark:fill-customBgDark-900"
      >
        <path d="M1280 11C1280 11 502.5 46 0 0.5V46H1280V11Z" />
      </svg>

      <div className="bg-color3 dark:bg-customBgDark-900 p-16 flex gap-0 justify-center">
        {/* Copy Right Section */}
        <div className="flex-1 justify-start content-center">
          <p className="text-center md:text-start p-2 mb-4 text-sm text-whiteFont-200 dark:text-whiteFont-500">
            Copyright © 2024 | Kine Odden Nystuen.
          </p>
        </div>
        {/* Logo Section - links */}
        <div className="flex-1 flex-grow">
          {/* Logo Section */}
          <div className="flex flex-col justify-center items-center">
            <Link to="/" className="m-1.5 p-2">
              <img
                src={getBaseUrl("/assets/KON_logo.svg")}
                alt="Site logo"
                className="filter invert w-20"
              />
              <span className="sr-only">KON - Homepage</span>
            </Link>
          </div>
          {/* Links */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <Link to="/contact">
              <Button
                buttonType="transparent"
                className="rounded-none px-[0.5rem] inline-block font-bold border-none hover:border-none text-whiteFont-600 hover:text-white dark:text-whiteFont-600 "
              >
                Contact Me
              </Button>
            </Link>
            <Link to="#">
              <Button
                buttonType="transparent"
                className="rounded-none px-[0.5rem] inline-block font-bold border-none hover:border-none text-whiteFont-600 hover:text-white dark:text-whiteFont-600"
              >
                About Me
              </Button>
            </Link>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex-1 justify-center content-center mt-8 md:m-0">
          <div className="flex justify-center md:justify-end space-x-4">
            {socialMedia.map((media) => (
              <a
                key={media.id}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-whiteFont-300 hover:text-color4 dark:text-whiteFont-300 dark:hover:text-color4 transition duration-300 ease-in-out"
                aria-label={`Visit our ${media.platform}`}
              >
                <FontAwesomeIcon icon={media.icon} size="2x" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
