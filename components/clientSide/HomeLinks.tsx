"use client";
import Link from "next/link";
import React, { MouseEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hover } from "@/constant/motionObjs";
import { isDesktop } from "@/utils/isDesktop";
import { HomeLinkInterface } from "@/constant/types";

export const changeContentOnOver = (text: string, e: MouseEvent) => {
  const elem = e.target as HTMLHeadingElement;
  elem.textContent = text;
};

const HomeLinks = ({ from, to }: HomeLinkInterface) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktopClient, setIsDesktopClient] = useState(true);


  // toggling isClicked as user clicks anywhere on page
  const toggleClick = () => setIsClicked((prevIsClicked) => !prevIsClicked);

  // toggle click function invoke on window click event
  useEffect(() => {
    if (isDesktopClient) return;
    window.addEventListener("click", toggleClick);
    return () => window.removeEventListener("click", toggleClick);
  }, [isDesktopClient]);

  // setting client info
  useEffect(() => {
    isDesktop() ? setIsDesktopClient(true) : setIsDesktopClient(false);
  }, [isDesktop]);

  return isDesktopClient ? (
    <Link href={`/${to}`}>
      <motion.h1
        onMouseEnter={(e) => changeContentOnOver(to, e)}
        onMouseLeave={(e) => changeContentOnOver(from, e)}
        whileHover={hover.visible}
        className={`lg:heading heading-sm ${
          to !== "About" ? "text-[#ff0000]" : "text-white"
        }`}
      >
        {from}
      </motion.h1>
    </Link>
  ) : isClicked ? (
    <Link href={`/${to.toLowerCase()}`}>
      <h1
        className={`lg:heading heading-sm ${
          to !== "About" ? "text-[#ff0000]" : "text-white"
        }`}
      >
        {to}
      </h1>
    </Link>
  ) : (
    <h1
      className={`lg:heading heading-sm ${
        to !== "About" ? "text-[#ff0000]" : "text-white"
      }`}
    >
      {from}
    </h1>
  );
};

export default HomeLinks;
