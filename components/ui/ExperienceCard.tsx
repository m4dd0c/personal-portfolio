"use client";
import { motion } from "motion/react";
import { FloatingChar } from "../ui/FloatingChar";
import type { experiences } from "@/lib/constants";

const ExperienceCard = ({ exp }: { exp: (typeof experiences)[number] }) => {
  const isActive = exp.duration.endDate === "Present";
  const hoverColorSVG = !isActive
    ? "hover:bg-pink-500/5 hover:text-pink-600 dark:hover:text-pink-460"
    : "bg-sky-500/5 text-sky-600 dark:text-sky-500";
  return (
    <motion.a
      href={exp.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => !exp.link && e.preventDefault()}
      className={`group block p-3 sm:p-4 sm:p-6 text-sm/7 focus:outline-none ${hoverColorSVG}`}
      role="tab"
      type="button"
      aria-selected="false"
      data-headlessui-state="active"
      aria-controls="headlessui-tabs-panel-«R5bskulb»"
      data-active=""
      initial="rest"
      whileHover="hover"
    >
      {/* Header: SVG + Info - centered row on mobile/tablet, grid on desktop */}
      <div className="flex items-center gap-3 sm:gap-4 lg:justify-start">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="74"
          fill="none"
          viewBox="0 0 120 72"
          className="group shrink-0 w-[80px] h-[50px] sm:w-[100px] sm:h-[62px] lg:w-[120px] lg:h-[74px]"
        >
          {/* bottom 3D envelope layers */}
          <path
            className="fill-white dark:fill-gray-950"
            d="M56.095 7 8.464 34.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 69c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0"
          ></path>
          <path
            stroke="currentColor"
            strokeOpacity="0.4"
            d="M112.09 36.5c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0L8.464 34.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 66c-1.913 1.105-5.015 1.105-6.928 0L8.464 38.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 69c-1.913 1.105-5.015 1.105-6.928 0L8.464 41.5c-.957-.552-1.435-1.276-1.435-2v-3"
          ></path>

          <path
            fill="currentColor"
            stroke="currentColor"
            d="M11.062 37c-.478-.276-.478-.724 0-1L58.694 8.5c.478-.276 1.253-.276 1.732 0l2.598 1.5c.478.276.478.724 0 1L15.392 38.5c-.478.276-1.253.276-1.732 0z"
            opacity="0.1"
          ></path>
          <g fill="currentColor" stroke="currentColor" opacity="0.1">
            <path d="M19.723 42c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 25c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"></path>
            <path d="M34.445 31.5c-.479-.276-.479-.724 0-1L49.167 22c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 45c-.478.276-1.253.276-1.732 0z"></path>
          </g>
          <path
            fill="currentColor"
            stroke="currentColor"
            d="M45.703 57c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 64.5c-.478.276-1.254.276-1.732 0z"
            opacity="0.1"
          ></path>

          <g>
            <FloatingChar char={exp.label[0]} />
          </g>
        </motion.svg>

        {/* Label, Profile, Duration */}
        <div className="text-left">
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase">
            {exp.label}
          </p>
          <p className="text-current/60 text-sm sm:text-base">{exp.profile}</p>
          <p className="text-xs sm:text-sm text-current/60 group-hover:text-current">
            {exp.duration.startDate} - {exp.duration.endDate}
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-left lg:pl-[136px]"
        dangerouslySetInnerHTML={{ __html: exp.description }}
      />
    </motion.a>
  );
};

export default ExperienceCard;
