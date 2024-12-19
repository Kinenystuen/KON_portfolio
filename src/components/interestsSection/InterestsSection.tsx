import Section from "../shared/Section";
import H2 from "../shared/Typography/H2";
import InterestsBox from "../shared/header/InterestsBox";

const InterestsSection = () => {
  return (
    <Section animate={false} className=" bg-transparent text-black">
      <div className="container mx-auto py-10 max-w-6xl">
        <H2 className="font-bold text-3xl uppercase mb-6">Interests</H2>
      </div>
      <div className="container mx-auto max-w-4xl ">
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <InterestsBox
            title="Art"
            image="assets/Art_paint_1.svg"
            link="/gallery/art"
            imgPosition="left-4"
          />
          <InterestsBox
            title="Hiking"
            image="assets/Art_mountain.svg"
            link="/gallery/nature"
          />
        </div>
      </div>
    </Section>
  );
};

export default InterestsSection;
