"use client";
import HrText from "../ui/HrText";
import { nonTechSkills, techSkills } from "@/lib/constants";

const StackIUse = () => {
  return (
    <>
      <HrText>
        <p className="text-pink-500 dark:text-pink-400 top-0 -left-[--gutter-width] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right">
          Skills & Learnings
        </p>
      </HrText>
      <HrText>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Things, I&apos;ve worked on
        </h2>
      </HrText>
      <br />
      <HrText>
        <SkillMarquee dir={"right"} skills={techSkills} />
      </HrText>
      <HrText hide={["before"]}>
        <SkillMarquee dir={"left"} skills={nonTechSkills} />
      </HrText>
    </>
  );
};

export default StackIUse;

const SkillMarquee = ({
  skills,
  dir = "right",
}: {
  skills: Skills[];
  dir: "right" | "left";
  iterateCount?: number;
}) => {
  const SkillItem = ({ skill }: { skill: Skills }) => (
    <div className="flex flex-col items-center gap-1 group duration-300 shrink-0">
      <skill.icon
        size={30}
        className="group-hover:scale-110 duration-200 text-gray-400 dark:text-gray-500"
      />
      <p className="text-gray-100 dark:text-gray-200">{skill.label}</p>
    </div>
  );

  return (
    <div className="marquee-container py-2">
      <div
        className={`marquee-track ${dir === "left" ? "marquee-left" : "marquee-right"}`}
      >
        {Array(4)
          .fill(null)
          .map((_, groupIdx) => (
            <div
              className="marquee-content"
              key={`group-${groupIdx}`}
              aria-hidden={groupIdx > 0}
            >
              {skills.map((skill, idx) => (
                <SkillItem skill={skill} key={`skill-${groupIdx}-${idx}`} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
