"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { projects } from "@/lib/constants";

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <motion.div
      className="group flex items-start gap-4 sm:gap-6 p-3 sm:p-4 text-sm/7 focus:outline-none max-lg:flex-col sm:p-6 lg:grid lg:grid-cols-[auto_1fr] hover:bg-pink-500/5 hover:text-pink-600 dark:hover:text-pink-400"
      initial="rest"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsVideoLoaded(false);
      }}
    >
      {/* Project Image/Video */}
      <div className="relative w-full lg:w-[300px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden border border-gray-950/10 dark:border-white/10">
        {isHovered && project?.preview && (
          <video
            src={project.preview}
            autoPlay
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          />
        )}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: isHovered && isVideoLoaded ? 0 : 1 }}
        />
      </div>

      {/* Project Details */}
      <div className="flex-1">
        <div className="flex justify-between items-start gap-2 sm:gap-4 max-lg:flex-col">
          <div>
            <h3 className="font-mono text-base sm:text-lg font-semibold tracking-wide uppercase">
              {project.title}
            </h3>
            <p className="text-current/60 mt-1 text-sm sm:text-base">{project.tagline}</p>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 sm:px-3 py-1 text-xs font-medium border border-current/20 rounded hover:bg-current/10 transition"
              >
                GitHub
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 sm:px-3 py-1 text-xs font-medium border border-current/20 rounded hover:bg-current/10 transition"
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
