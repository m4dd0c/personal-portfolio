"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { changeContentOnOver } from "./clientSide/HomeLinks";
const HangingBtn = () => {
  return (
    <motion.div
      whileHover={{ x: -10 }}
      onMouseEnter={(e) => changeContentOnOver("m4dd0x.app", e)}
      onMouseLeave={(e) => changeContentOnOver("m4dd0x.", e)}
      className="fixed right-10 top-10 z-50 lg:right-56 lg:top-28"
    >
      <Link href={"/"}>
        <h1 className="font-bold">m4dd0x.</h1>
      </Link>
    </motion.div>
  );
};

export default HangingBtn;
