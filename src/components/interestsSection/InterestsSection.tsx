import { Link } from "react-router-dom";
import { getBaseUrl } from "../shared/BaseNameUtils";
import Section from "../shared/Section";
import H2 from "../shared/Typography/H2";
import H3 from "../shared/Typography/H3";

const InterestsSection = () => {
  return (
    <Section animate={false} className=" bg-transparent text-black">
      <div className="container mx-auto py-10 max-w-6xl">
        <H2 className="font-bold text-3xl uppercase mb-6">Interests</H2>
      </div>
      <div className="container mx-auto max-w-4xl ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to={"/gallery/art"} className="">
            <div
              className="relative w-auto border-2 border-gray-200 dark:border-customBgDark-400 h-72 p-4 flex flex-col justify-center content-center items-center rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg"
              tabIndex={0}
              role=""
              aria-label={`View details for`}
            >
              <div className="relative w-32 h-32">
                <img
                  className="absolute bottom-6 left-4 dark:invert p-3"
                  src={getBaseUrl("/assets/Art_paint_1.svg")}
                  alt="Illustration of a paint brush"
                />
              </div>
              <H3 className="m-2 text-6xl uppercase font-other">Art</H3>
            </div>
          </Link>

          <Link to={"/gallery/nature"} className="">
            <div
              className="relative w-auto border-2 border-gray-200 dark:border-customBgDark-400 h-72 p-4 flex flex-col justify-center content-center items-center rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg"
              tabIndex={0}
              role="button"
              aria-label={`View details for`}
            >
              <div className="relative w-32 h-32">
                <img
                  className="absolute bottom-6 dark:invert"
                  src={getBaseUrl("/assets/Art_mountain.svg")}
                  alt="Illustration of a mountain"
                />
              </div>
              <H3 className="m-2 text-6xl uppercase font-other">Hiking</H3>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default InterestsSection;
