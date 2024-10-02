"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const MotionWrapper = ({
  children,
  px,
}: {
  children: ReactNode;
  px?: number | null;
}) => {
  return <motion.div whileHover={{ x: px || 25 }}>{children}</motion.div>;
};

export default MotionWrapper;
