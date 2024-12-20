import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./shared/Button/Button";

interface DropdownProps {
  label: string;
  items: { label: string; href?: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Detect click outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log(location.pathname);
  console.log(items.map((item) => item.href));

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <Button
        onClick={toggleDropdown}
        buttonType="violet"
        className="flex gap-2 items-center justify-center h-9"
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {items.map((item, index) => (
              <li key={index} className="border-y border-gray-600">
                <Button
                  onClick={() => {
                    if (item.href && location.pathname !== item.href) {
                      navigate(item.href);
                    }
                    setIsOpen(false);
                  }}
                  disabled={location.pathname === item.href}
                  className={`w-full text-left block px-4 py-2 bg-transparent hover:rounded-none border-0 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 ${
                    location.pathname === item.href
                      ? "cursor-not-allowed text-gray-500 dark:text-gray-400 pointer-events-none"
                      : ""
                  }`}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
