"use client";
import React, { useEffect, useState } from "react";
import { isDesktop } from "@/utils/isDesktop";

const HomeClient = () => {
  const [isDesktopClient, setIsDesktopClient] = useState(true);

  useEffect(() => {
    setIsDesktopClient(isDesktop());
  }, []);

  return (
    <>
      {!isDesktopClient && (
        <p
          id="mobile-directive"
          className="absolute bottom-10 w-screen  animate-bounce text-center opacity-40"
        >
          Tap anywhere
        </p>
      )}
    </>
  );
};

export default HomeClient;
