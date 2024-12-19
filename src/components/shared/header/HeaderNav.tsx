import { Link, NavLink, useLocation } from "react-router-dom";
import { headerNavLinks } from "../../../library/constants";
import { INavLink } from "../../../library/types";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./MenuBtn";
import { getBaseUrl } from "../BaseNameUtils";
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
        <Link to="/" className="m-1.5 p-2" onClick={() => setMenuOpen(false)}>
          <img
            src={getBaseUrl("assets/KON_logo.svg")}
            alt="Site logo"
            className="filter dark:invert"
          />
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
        className={`fixed left-0 top-0 w-full bg-customBg shadow-md lg:relative lg:w-auto lg:me-2 lg:bg-transparent lg:shadow-none lg:max-h-none lg:overflow-visible transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "z-0 max-h-screen pt-[2.5rem]"
            : "-z-10 max-h-0 lg:z-auto lg:max-h-none"
        }`}
      >
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:justify-center lg:content-center gap-2 lg:gap-2 m-2 mt-10 mb-5 lg:m-0 lg:p-0 transition-transform lg:-translate-y-0 duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {headerNavLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li key={link.label} className="relative">
                <NavLink
                  to={link.route}
                  onClick={() => setMenuOpen(false)}
                  className={`relative text-gray-800 hover:text-black dark:text-whiteFont-500  uppercase lg:flex lg:items-center py-2 px-3 text-sm font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-customGreen after:transition-all after:duration-300 ${
                    isActive
                      ? "after:w-full text-black"
                      : "after:w-0 hover:after:w-full"
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
