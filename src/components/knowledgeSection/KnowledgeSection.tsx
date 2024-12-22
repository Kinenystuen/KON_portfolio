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
      <div className="relative bg-gradient-to-r from-color4-400 to-color4-500 dark:from-violet-900 dark:to-violet-950 background-animation">
        <div className="container mx-auto py-10 max-w-6xl">
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
