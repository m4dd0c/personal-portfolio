"use client";
import { AnimatePresence, motion } from "framer-motion";
import { encode } from "qss";
import React, { MouseEvent, useRef, useState } from "react";

const HoverLink = ({
  children,
  title,
  prev,
  link,
}: {
  title: string;
  link: string;
  children: React.ReactNode;
  prev?: string;
}) => {
  let src;
  if (prev) {
    // static image provided
    src = prev;
  } else {
    // encoding into image
    const params = encode({
      url: link,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": 250 * 3,
      "viewport.height": 200 * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  }

  // handing hover effect
  const [active, setActive] = useState(false);
  const prevRef = useRef<null | HTMLAnchorElement>(null);

  // handling image position
  const calcPosition = (e: MouseEvent<HTMLDivElement>) => {
    if (prevRef.current) {
      const targetRect = prevRef.current.getBoundingClientRect();
      // keeping preview image in the center of pointer in x axis
      prevRef.current.style.left = `${e.clientX - targetRect.width - targetRect.width / 2}px`;
      prevRef.current.style.top = `-${targetRect.height}px`;
    }
  };

  return (
    <div
      className="w-fit"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={calcPosition}
    >
      <AnimatePresence>
        {active && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            exit={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            target="_blank"
            ref={prevRef}
            href={link}
            className="absolute overflow-hidden rounded-xl border-4 border-red-300 transition-opacity hover:border-red-500"
          >
            <motion.img
              src={src}
              alt={title}
              width={200}
              height={100}
              whileHover={{ scale: 1.1 }}
              className="block rounded-lg object-cover"
            />
          </motion.a>
        )}
      </AnimatePresence>
      <div>{children}</div>
    </div>
  );
};
export default HoverLink;
