import { Link, NavLink, useLocation } from "react-router-dom";
import { headerNavLinks } from "../../../library/constants";
import { INavLink } from "../../../library/types";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./MenuBtn";
import ThemeToggle from "../ThemeToggle";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      ref={navRef}
      className={`flex justify-between content-center items-center w-full h-auto mx-auto
              lg:bg-customBg lg:bg-opacity-20 dark:lg:bg-customBgDark dark:lg:bg-opacity-20
              backdrop-filter backdrop-blur-lg shadow-lg z-50`}
    >
      {/* Logo Section */}
      <div className="flex lg:flex-1 z-30">
        <Link
          to="/"
          className="m-1.5 p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="KON logo"
        >
          <svg
            width="57"
            height="23"
            viewBox="0 0 57 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black stroke-black dark:fill-whiteFont-500 dark:stroke-whiteFont-500"
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

      <div className="flex justify-center content-center items-center">
        {/* Dark Mode Button */}
        <ThemeToggle />

        {/* Hamburger Menu */}
        <div className="flex justify-center items-center md:block lg:hidden z-30">
          <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`fixed left-0 top-0 w-full  shadow-md lg:relative lg:w-auto lg:me-2 lg:bg-transparent lg:shadow-none lg:max-h-none lg:overflow-visible transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "z-0 max-h-screen pt-[2.5rem] bg-customBg dark:bg-customBgDark"
            : "-z-10 max-h-0 lg:z-auto lg:max-h-none"
        }`}
      >
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:justify-center lg:content-center gap-2 lg:gap-2 m-2 mx-4 mt-10 mb-5 lg:m-0 lg:p-0 transition-transform lg:-translate-y-0 duration-300 ${
            menuOpen ? "translate-y-0 " : "-translate-y-full"
          }`}
        >
          {headerNavLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className="relative h-10 border-b border-customBgDark-600 py-1 hover:border-color4-500 dark:hover:border-color4-800"
              >
                <NavLink
                  to={link.route}
                  onClick={() => setMenuOpen(false)}
                  className={`relative m-2 text-gray-600 hover:text-black dark:text-whiteFont-600 dark:hover:text-whiteFont-500  uppercase lg:flex lg:items-center py-2 px-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-black hover:text-inherit dark:text-whiteFont-400 cursor-default"
                      : ""
                  }`}
                >
                  <span className="sr-only">{link.title}</span>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
