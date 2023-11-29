"use client";
import React, { useEffect, useState } from "react";
import { isDesktop } from "@/utils/isDesktop";

const HomeClient = () => {
  const [isDesktopClient, setIsDesktopClient] = useState(true);

  useEffect(() => {
    isDesktop() ? setIsDesktopClient(true) : setIsDesktopClient(false);
  }, [isDesktop]);
  return (
    <>
      {!isDesktopClient && (
        <p className="absolute bottom-10 w-screen text-center opacity-40 animate-bounce">
          Tap anywhere
        </p>
      )}
    </>
  );
};

export default HomeClient;
