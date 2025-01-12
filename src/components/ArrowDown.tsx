import React, { useEffect, useState } from "react";
import "./ScrollDownArrow.css";
import Button from "./shared/Button/Button";
import { useToast } from "../hooks/use-toast";

const ScrollDownArrow: React.FC = () => {
  const [isPulsing, setIsPulsing] = useState(false);
  const { toast } = useToast();
  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = () => {
    setIsPulsing(false);
    clearTimeout(scrollTimeout);

    // Start the timer again
    scrollTimeout = setTimeout(() => {
      setIsPulsing(true);
    }, 10000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollTimeout = setTimeout(() => {
      setIsPulsing(true);
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Button
      onClick={() => {
        toast({
          description: "Hei der! 👋"
        });
      }}
      className={`flex justify-center items-center mt-5 mb-10 ${
        isPulsing ? "animate-pulse-up-down" : ""
      }`}
    >
      <svg
        width="40"
        viewBox="0 0 47 19"
        fill="#8FA984"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 3L23.5997 16M3 3L23.4003 16"
          stroke="#8FA984"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </Button>
  );
};

export default ScrollDownArrow;
