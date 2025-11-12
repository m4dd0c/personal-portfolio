import { Graph } from "../ui/Graph";
import HrText from "../ui/HrText";

export default function GithubStats() {
  return (
    <>
      <HrText>
        <p className="text-sky-500 dark:text-sky-400 top-0 -left-[--gutter-width] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right">
          Technical Contributions
        </p>
      </HrText>
      <HrText>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          My Github Stats
        </h2>
      </HrText>
      <br />
      <HrText>
        <Graph />
      </HrText>
    </>
  );
}
