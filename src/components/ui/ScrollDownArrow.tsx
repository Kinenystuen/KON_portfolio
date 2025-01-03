import { useEffect, useState, useRef } from "react";
import "./ScrollDownArrow.css"; // Import your CSS file

const ScrollArrow = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);
  const bounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Stop bouncing if the user scrolls
      if (bounceTimeout.current) {
        clearTimeout(bounceTimeout.current);
      }
      setIsBouncing(false);

      // Start bouncing after 5 seconds of no scroll
      bounceTimeout.current = setTimeout(() => {
        if (window.scrollY < window.innerHeight) {
          setIsBouncing(true);
        }
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (bounceTimeout.current) clearTimeout(bounceTimeout.current);
    };
  }, []);

  // Scroll to the about section
  const scrollToTarget = () => {
    const targetElement = document.querySelector(".aboutMe-target");
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      const offsetPosition = targetPosition - window.innerHeight * 0.35;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      className={`fixed left-1/2 bottom-6 transition-all duration-300 ease-out transform -translate-x-1/2 ${
        isBouncing ? "animate-pulse-up-down" : ""
      }`}
      style={{
        opacity: 1 - Math.min(scrollY / 30, 1)
      }}
      onClick={scrollToTarget}
      role="button"
      tabIndex={0}
      aria-label="Scroll to the next section"
    >
      <svg
        width="47"
        height="19"
        viewBox="0 0 47 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 3L23.5997 16M3 3L23.4003 16"
          stroke="var(--color4)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ScrollArrow;
