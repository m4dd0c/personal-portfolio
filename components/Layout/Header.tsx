import Link from "next/link";
import PlusSVG from "../ui/PlusSVG";

const Header = () => {
  return (
    <nav className="fixed bg-white dark:bg-gray-950 z-50 flex h-12 sm:h-14 mx-auto items-center justify-between gap-4 sm:gap-8 px-3 sm:px-4 md:px-6 border-x border-(--pattern-fg) w-full border border-b">
      <div className="font-semibold flex justify-center gap-2 align-center">
        <Link
          href={"/"}
          className="group relative px-1.5 py-0.5 text-xs sm:text-sm/6 text-sky-800 dark:text-sky-300"
        >
          <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
          m4dd0c
          <PlusSVG className="absolute -top-0.5 -left-0.5 fill-sky-300 dark:fill-sky-300/50" />
          <PlusSVG className="absolute -top-0.5 -right-0.5 fill-sky-300 dark:fill-sky-300/50" />
          <PlusSVG className="absolute -bottom-0.5 -left-0.5 fill-sky-300 dark:fill-sky-300/50" />
          <PlusSVG className="absolute -right-0.5 -bottom-0.5 fill-sky-300 dark:fill-sky-300/50" />
        </Link>
        <div className="inline-flex items-center rounded-full bg-gray-950/2 px-1.5 sm:px-2 inset-ring inset-ring-gray-950/8 dark:bg-white/5 dark:inset-ring-white/5 gap-1 sm:gap-2">
          <span className="rounded-full size-3 bg-green-500/30 grid place-items-center animate-pulse">
            <span className="rounded-full size-1.5 bg-green-500 " />
          </span>
          <span className="font-sans text-[0.65rem] font-medium text-gray-500 dark:text-gray-400">
            Open to work
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          className="text-xs sm:text-sm/6 text-gray-950 dark:text-white hover:underline"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-sm sm:text-lg font-serif text-sky-500 dark:text-sky-400 hover:underline"
          href="/proof-of-work"
        >
          <span className="hidden sm:inline">proof-of-work</span>
          <span className="sm:hidden">PoW</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
