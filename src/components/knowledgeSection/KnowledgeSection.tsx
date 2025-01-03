import H2 from "../shared/Typography/H2";
import KnowledgeCards from "./KnowledgeCards";
import useInView from "../../hooks/useInView";
import { useRef, useState } from "react";

const KnowledgeSection = () => {
  const { elementRef: sectionRef, isInView: isSectionInView } = useInView(0.1);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative">
      {/* <TopWave /> */}
      <div className="relative px-4">
        <div
          className="relative overflow-hidden shadow-md container bg-gradient-to-r from-color4-400 to-color4-500 dark:from-[#7487CD] dark:to-customBlue background-animation mx-auto py-10 max-w-6xl rounded-xl"
          ref={boxRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Hover Gradient */}
          <div
            className={`absolute w-96 h-96 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
              background: `radial-gradient(circle, ${
                document.documentElement.classList.contains("dark")
                  ? "rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 60%"
                  : "rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%"
              })`,
              filter: `blur(70px)`
            }}
          ></div>
          <H2 className="font-bold text-white uppercase mb-6 animate-fadeIn text-center">
            Knowledge
          </H2>
          <KnowledgeCards isInView={isSectionInView} />
        </div>
      </div>
      {/* <BottomWave /> */}
    </section>
  );
};

export default KnowledgeSection;
