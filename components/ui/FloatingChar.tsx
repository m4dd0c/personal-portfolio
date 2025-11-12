"use client";
import { motion } from "motion/react";

export function FloatingChar({ char }: { char: string }) {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="overflow-visible"
    >
      <motion.g
        variants={{
          rest: {
            y: 0,
            transition: { type: "tween", duration: 0.2, ease: "easeOut" },
          },
          hover: {
            y: [-4, -8, -4],
            transition: {
              duration: 1.0, // adjust to taste
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          },
        }}
      >
        <text
          x="50%"
          y="30%" // center in your envelope
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="45"
          fontWeight="700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fontFamily="Nunito, monospace"
        >
          {char}
        </text>
      </motion.g>
    </motion.svg>
  );
}
