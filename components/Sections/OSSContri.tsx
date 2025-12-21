import HrText from "../ui/HrText";
import { github_prs } from "@/lib/constants";
import { PrCard } from "../ui/PrCard";

const OSSContri = () => {
  return (
    <>
      <HrText>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Contributions
        </h2>
      </HrText>
      <br />
      {github_prs.map((pr: PR) => (
        <HrText key={pr.pr.number}>
          <PrCard pr={pr} />
        </HrText>
      ))}
    </>
  );
};

export default OSSContri;
