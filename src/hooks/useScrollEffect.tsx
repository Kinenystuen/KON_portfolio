import { useEffect, useState, useRef } from "react";

const useScrollEffect = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [offsetY, setOffsetY] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // Calculate visibility ratio
        const visibilityRatio = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );

        // Closer to 1 = more visible
        const newOffsetY = (1 - visibilityRatio) * 30;
        setOffsetY(newOffsetY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { ref, offsetY };
};

export default useScrollEffect;
