import Image from "next/image";
import { FaCodeMerge } from "react-icons/fa6";

export const PrCard = ({ pr }: { pr: PR }) => {
  return (
    <div className="group mb-3 flex items-center group overflow-hidden shadow-sm transition-all duration-300 ">
      <div className="shrink-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] h-full py-8 sm:py-11 px-3 sm:px-4">
        <div className="grid place-items-center transition-colors text-violet-500 bg-gray-950/40 rounded-full p-1.5 sm:p-2 border border-violet-500/40 absolute left-0 top-1/2 -translate-1/2">
          <FaCodeMerge size={12} className="sm:w-[15px] sm:h-[15px]" />
        </div>
      </div>

      <div className="flex-1 space-y-1 border-l border-l-(--pattern-fg) pl-2 py-0 group-hover:bg-violet-500/5">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 pt-1">
          <div className="hover:text-gray-400 underline">
            <a
              className="hover:text-link transition-colors font-medium group-hover:text-violet-500 hover:text-violet-400 text-xs sm:text-sm"
              href={pr.upstream.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pr.upstream.label}
            </a>
          </div>
          <span>•</span>
          <span>#{pr.pr.number}</span>
        </div>

        <a
          href={pr.pr.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base sm:text-xl font-semibold transition-colors group-hover:text-violet-300 hover:text-violet-200 w-fit leading-tight"
        >
          {pr.pr.label}
        </a>

        <div className="flex justify-start items-center gap-2 pb-1">
          <a
            href={pr.handle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors"
          >
            <div className="size-4 sm:size-5 rounded-full bg-gray-900 overflow-hidden">
              <Image
                src="/assets/imgs/pfp.png"
                alt="Profile Picture"
                width={192}
                height={192}
                className="size-full"
              />
            </div>
          </a>
          <div className="flex items-center gap-1 sm:gap-2 text-gray-500">
            <a
              href={pr.handle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm transition-colors hover:text-gray-400"
            >
              {pr.handle.label}
            </a>
            <span>•</span>
            <time className="text-xs sm:text-sm">{pr.pr.createdAt}</time>
          </div>
        </div>
      </div>
    </div>
  );
};
