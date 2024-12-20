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
              <svg
                width="57"
                height="23"
                viewBox="0 0 57 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" fill-whiteFont-500 stroke-whiteFont-500"
              >
                <path d="M3.60664 1.12092H1V22H3.60664V11.0043L11.9913 22H15.7275L6.90837 10.7048L15.293 1.07813L11.7306 1.12092L3.60664 10.8331V1.12092Z" />
                <path d="M22.7654 1.59155V4.45815C21.4186 5.14271 19.7678 6.08398 18.5948 8.77943C17.6564 10.9358 18.2038 13.2433 18.5948 14.1276C18.7251 14.9119 19.6896 16.8829 22.5047 18.4916C25.3199 20.1003 28.4276 19.1619 29.6295 18.4916C30.9618 17.9354 33.7133 15.8218 34.0608 11.8172C34.4084 7.81249 31.2225 5.29959 29.5861 4.54372V1.63434C31.7583 2.14776 35.7117 4.97157 36.5806 8.90779C37.4495 12.844 36.727 16.153 33.6264 19.0906C30.1943 22.3423 23.4171 23.5145 18.5948 19.0906C16.0577 16.7631 15.3655 13.2719 15.3365 11.8172C15.2351 10.8331 15.4581 8.23179 17.1611 5.69891C18.8641 3.16604 21.6069 1.90531 22.7654 1.59155Z" />
                <path d="M24.981 11.27V1.12052C26.057 0.918768 27.1546 1.0068 27.5801 1.12052C27.5801 1.12052 27.5971 11.2652 27.5801 11.27C26.4858 11.5771 25.3914 11.3979 24.981 11.27Z" />
                <path d="M39.9692 22V1.07813H43.7488L53.1762 17.7215V1.07813H56V22H52.3507L42.7931 5.09992V22H39.9692Z" />
                <path d="M3.60664 1.12092H1V22H3.60664V11.0043L11.9913 22H15.7275L6.90837 10.7048L15.293 1.07813L11.7306 1.12092L3.60664 10.8331V1.12092Z" />
                <path d="M22.7654 1.59155V4.45815C21.4186 5.14271 19.7678 6.08398 18.5948 8.77943C17.6564 10.9358 18.2038 13.2433 18.5948 14.1276C18.7251 14.9119 19.6896 16.8829 22.5047 18.4916C25.3199 20.1003 28.4276 19.1619 29.6295 18.4916C30.9618 17.9354 33.7133 15.8218 34.0608 11.8172C34.4084 7.81249 31.2225 5.29959 29.5861 4.54372V1.63434C31.7583 2.14776 35.7117 4.97157 36.5806 8.90779C37.4495 12.844 36.727 16.153 33.6264 19.0906C30.1943 22.3423 23.4171 23.5145 18.5948 19.0906C16.0577 16.7631 15.3655 13.2719 15.3365 11.8172C15.2351 10.8331 15.4581 8.23179 17.1611 5.69891C18.8641 3.16604 21.6069 1.90531 22.7654 1.59155Z" />
                <path d="M24.981 11.27V1.12052C26.057 0.918768 27.1546 1.0068 27.5801 1.12052C27.5801 1.12052 27.5971 11.2652 27.5801 11.27C26.4858 11.5771 25.3914 11.3979 24.981 11.27Z" />
                <path d="M39.9692 22V1.07813H43.7488L53.1762 17.7215V1.07813H56V22H52.3507L42.7931 5.09992V22H39.9692Z" />
              </svg>
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
