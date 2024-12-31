import Section from "../shared/Section";
import H2 from "../shared/Typography/H2";
import Contact from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <Section className="mx-auto py-20 my-20 p-2 bg-color4-100 dark:bg-customBgDark-700 min-h-full">
      <H2 className="text-xl text-center font-semibold mb-2 px-0">
        Contact Me
      </H2>
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row gap-6 md:mt-10 md:mb-10">
        <ContactInfo />
        <Contact />
      </div>
    </Section>
  );
};

export default ContactSection;
