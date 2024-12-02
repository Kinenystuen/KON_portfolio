import Section from "../shared/Section";
import H2 from "../shared/Typography/H2";
import ImageGallery from "./ImageGallery";
import InterestsSetup from "./InterestsSetup";

const InterestsSection = () => {
  return (
    <Section
      animate={false}
      className="my-20 md:my-25 lg:my-35 bg-transparent text-black"
    >
      <div className="mx-auto">
        <H2 className="container font-bold text-2xl uppercase mb-6">
          Interests
        </H2>
      </div>
      <InterestsSetup
        images={<ImageGallery direction={"right"} />}
        link="/gallery/art"
      />
      <InterestsSetup
        images={<ImageGallery direction={"left"} />}
        link="/gallery/nature"
        direction="left"
      />
    </Section>
  );
};

export default InterestsSection;
