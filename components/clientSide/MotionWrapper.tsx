"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const MotionWrapper = ({ children, px }: { children: ReactNode; px?: number|25 }) => {
  return <motion.div whileHover={{ x: px }}>{children}</motion.div>;
};

export default MotionWrapper;
