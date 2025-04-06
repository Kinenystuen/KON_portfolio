import { useRef } from "react";
import HeaderHero from "./HeaderHero";
import MyProjects from "../../components/sectionMyProjects/MyProjects";
import KnowledgeSection from "../../components/knowledgeSection/KnowledgeSection";
import InterestsSection from "../../components/interestsSection/InterestsSection";
import ContactSection from "../../components/contact/ThisContactSection";

const Home = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="z-0">
        <HeaderHero onViewWorkClick={scrollToProjects} />
      </div>
      <div className="relative z-10 bg-customBg pb-10 dark:bg-customBgDark">
        <MyProjects scrollRef={projectsRef} />
        <KnowledgeSection />
        <InterestsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
