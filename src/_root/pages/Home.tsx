import InterestsSection from "../../components/interestsSection/InterestsSection";
import KnowledgeSection from "../../components/knowledgeSection/KnowledgeSection";
import MyProjects from "../../components/sectionMyProjects/MyProjects";
import HeroSection from "../../components/headerHero/HeroSection";

const Home = () => {
  return (
    <div className="relative ">
      {/* Hero Section */}
      <HeroSection />

      {/* BODY SECTION */}
      <MyProjects />
      <KnowledgeSection />
      <InterestsSection />
    </div>
  );
};

export default Home;
