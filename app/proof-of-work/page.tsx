import HrText from "@/components/ui/HrText";
import ProjectCard from "@/components/ui/ProjectCard";
import Footer from "@/components/Layout/Footer";
import { projects } from "@/lib/constants";

const ProofOfWork = () => {
  return (
    <div className="grid grid-cols-[1rem_1fr_1rem] sm:grid-cols-[1.5rem_1fr_1.5rem] lg:grid-cols-[2.5rem_1fr_2.5rem] min-h-screen w-screen">
      <div className="border-x-(--pattern-fg) border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] h-full" />
      {/* main section */}
      <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-[calc(100vw-5rem)]">
        <div className="mt-12 sm:mt-20" />
        <HrText>
          <p className="text-pink-500 dark:text-pink-400 top-0 -left-[--gutter-width] origin-bottom-right text-left font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right">
            Proof of Work
          </p>
        </HrText>
        <HrText>
          <h2 className="max-w-lg px-2 text-[2rem] sm:text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
            Projects I&apos;ve built
          </h2>
        </HrText>
        <HrText>
          <p className="text-xs sm:text-sm font-medium text-gray-50/40 ml-2 max-sm:ml-4">
            A collection of projects showcasing my skills and experience
          </p>
        </HrText>
        <br />
        <div className="grid grid-cols-1 gap-0">
          {projects.map((project) => (
            <HrText
              key={project.id}
              hide={
                project.id !== projects[projects.length - 1].id ? ["after"] : []
              }
            >
              <ProjectCard project={project} />
            </HrText>
          ))}
        </div>
        <div className="mb-12 sm:mb-20" />
        <Footer />
      </div>
      <div className="border-x-(--pattern-fg) border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] h-full" />
    </div>
  );
};

export default ProofOfWork;
