import HrText from "../ui/HrText";

const About = () => {
  return (
    <>
      <HrText>
        <p className="text-sky-500 dark:text-sky-400 top-0 -left-[--gutter-width] origin-bottom-right text-left font-mono font-semibold text-xs sm:text-sm tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right">
          About Me
        </p>
      </HrText>
      <HrText>
        <h2 className="max-w-lg px-2 text-[2rem] sm:text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Hacking around things
        </h2>
      </HrText>
      <br />
      <HrText>
        <p className="max-w-(--breakpoint-md) px-2 text-base sm:text-lg/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          I go by m4dd0c — just a dev, fueled by{" "}
          <span className="hightlight-code">caffeine</span>, and mostly excited
          to create awesome things.{" "}
          <span className="highlight-code">Next.js</span>,{" "}
          <span className="highlight-code">TypeScript</span>,{" "}
          <span className="highlight-code">Express</span>,{" "}
          <span className="highlight-code">MongoDB</span>,{" "}
          <span className="highlight-code">Postgres</span>,{" "}
          <span className="highlight-code">Docker</span>,{" "}
          <span className="highlight-code">Redis</span>, and{" "}
          <span className="highlight-code">Kafka</span> — that's where I feel
          like home.
          <br />
          I'm passionate about <span className="highlight-code">Neovim</span>,
          reside in the terminal, and pursue the ultimate{" "}
          <span className="highlight-code">DX</span>. I build, tweak, and ship
          things that simply work. If I'm not building something, I'm probably
          tweaking <span className="highlight-code">dotfiles</span> or
          experimenting with tools. I don't just code — I build experiences that
          hit different .
        </p>
      </HrText>
    </>
  );
};

export default About;
