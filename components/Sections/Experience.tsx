import { experiences } from "@/lib/constants";
import ExperienceCard from "../ui/ExperienceCard";
import HrText from "../ui/HrText";

const Experience = () => {
  return (
    <>
      <HrText>
        <p className="text-pink-500 dark:text-pink-400 top-0 -left-[--gutter-width] origin-bottom-right text-left font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right">
          Experience
        </p>
      </HrText>
      <HrText>
        <h2 className="max-w-lg px-2 text-[2rem] sm:text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Places, I&apos;ve made an impact
        </h2>
      </HrText>
      <br />
      {experiences.map((exp) => (
        <HrText
          key={exp.id}
          hide={
            exp.label !== experiences[experiences.length - 1].label
              ? ["after"]
              : []
          }
        >
          <ExperienceCard exp={exp} />
        </HrText>
      ))}
    </>
  );
};

export default Experience;
