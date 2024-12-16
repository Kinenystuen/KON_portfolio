import H2 from "../shared/Typography/H2";
import BottomWave from "./BottomWave";
import KnowledgeCards from "./KnowledgeCards";
import TopWave from "./TopWave";
import useInView from "../../hooks/useInView";

const KnowledgeSection = () => {
  const { elementRef: sectionRef, isInView: isSectionInView } = useInView(0.1);

  return (
    <section ref={sectionRef} className="relative">
      <TopWave />
      <div className="relative bg-gradient-to-r from-customGreen to-customGreen-600 dark:from-customGreenDark-400 dark:to-customGreenDark-600 background-animation">
        <div className="container mx-auto py-10 pb-12">
          <H2 className="font-bold text-white uppercase mb-6 animate-fadeIn">
            Knowledge
          </H2>
          <KnowledgeCards isInView={isSectionInView} />
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default KnowledgeSection;
