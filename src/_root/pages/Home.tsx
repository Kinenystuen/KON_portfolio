import ContactSection from "../../components/contact/ThisContactSection";
import InterestsSection from "../../components/interestsSection/InterestsSection";
import KnowledgeSection from "../../components/knowledgeSection/KnowledgeSection";
import MyProjects from "../../components/sectionMyProjects/MyProjects";
import HeaderHero from "./HeaderHero";

const Home = () => {
  return (
    <div className="relative ">
      <div className=" z-0">
        {/* Header hero Section */}
        <HeaderHero />
        {/* <AnimatedHeader /> */}
      </div>
      <div className="relative z-10 bg-customBg pb-10 dark:bg-customBgDark">
        {/* BODY SECTION */}
        <MyProjects />
        <KnowledgeSection />
        <InterestsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
