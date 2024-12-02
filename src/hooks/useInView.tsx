import { useEffect, useRef, useState } from "react";

const useInView = (threshold: number = 0.1) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return { elementRef, isInView };
};

export default useInView;
