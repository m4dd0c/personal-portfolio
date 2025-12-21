import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import GitGraph from "@/components/Sections/GitGraph";
import Hero from "@/components/Sections/Hero";
import OSSContri from "@/components/Sections/OSSContri";
import StackIUse from "@/components/Sections/StackIUse";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-[1rem_1fr_1rem] sm:grid-cols-[1.5rem_1fr_1.5rem] lg:grid-cols-[2.5rem_1fr_2.5rem] min-h-screen w-screen">
      <div className="border-x-(--pattern-fg) border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] h-full" />
      {/* main section */}
      <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-[calc(100vw-5rem)]">
        <Hero />
        <div className="mt-12 sm:mt-20" />
        <About />
        <div className="mb-12 sm:mb-20" />
        <Experience />
        <div className="mb-12 sm:mb-20" />
        <StackIUse />
        <div className="mb-12 sm:mb-20" />
        <GitGraph />
        <div className="mb-10 sm:mb-16" />
        <OSSContri />
        <div className="mb-12 sm:mb-20" />
        <Footer />
      </div>
      <div className="border-x-(--pattern-fg) border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] h-full" />
    </div>
  );
}
