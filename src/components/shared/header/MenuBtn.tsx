import React from "react";
import "./HeaderNav.css";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleMenu
}) => {
  return (
    <div className="hamburger_icon_container flex justify-center items-center">
      <button
        className={`hamburger_icon border-none cursor-pointer h-fill
        rounded-sm focus:outline-none focus:ring ${isOpen ? "cross" : ""}`}
        aria-expanded={isOpen}
        title="Navigation menu button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="hLine"></div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
