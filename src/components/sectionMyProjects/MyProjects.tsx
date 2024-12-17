import useInView from "../../hooks/useInView";
import H2 from "../shared/Typography/H2";
import ProjectCards from "./ProjectCards";

const MyProjects = () => {
  const { elementRef: sectionRef, isInView: isSectionInView } = useInView(0.1);
  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto py-10 max-w-6xl ">
        <H2 className="font-bold text-3xl uppercase mb-6">My Projects</H2>
        <ProjectCards isInView={isSectionInView} />
      </div>
    </section>
  );
};

export default MyProjects;
