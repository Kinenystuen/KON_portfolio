import useInView from "../../hooks/useInView";
import H2 from "../shared/Typography/H2";
import ProjectCards from "./ProjectCards";

const MyProjects = () => {
  const { elementRef: sectionRef, isInView: isSectionInView } = useInView(0.1);
  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto py-10 max-w-6xl ">
        <H2 className="font-bold uppercase mb-6">My Projects</H2>
        <div className="container mx-auto max-w-4xl lg:max-w-6xl">
          <ProjectCards isInView={isSectionInView} />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
