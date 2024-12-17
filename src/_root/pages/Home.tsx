import InterestsSection from "../../components/interestsSection/InterestsSection";
import KnowledgeSection from "../../components/knowledgeSection/KnowledgeSection";
import MyProjects from "../../components/sectionMyProjects/MyProjects";
import AnimatedHeader from "./AnimatedHeader";

const Home = () => {
  return (
    <div className="relative ">
      <div className=" z-0">
        {/* Animated header Section */}
        <AnimatedHeader />
      </div>
      <div className="relative z-10 bg-customBg dark:bg-customBgDark">
        {/* BODY SECTION */}
        <MyProjects />
        <KnowledgeSection />
        <InterestsSection />
      </div>
    </div>
  );
};

export default Home;
