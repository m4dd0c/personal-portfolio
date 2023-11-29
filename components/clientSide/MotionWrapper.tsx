"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const MotionWrapper = ({ children }: { children: ReactNode }) => {
  return <motion.div whileHover={{ x: 25 }}>{children}</motion.div>;
};

export default MotionWrapper;
