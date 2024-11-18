"use client";
import React, { useEffect, useState } from "react";
import { isDesktop } from "../../utils/isDesktop";

const HomeClient = () => {
  const [isDesktopClient, setIsDesktopClient] = useState(true);

  useEffect(() => {
    if (isDesktop()) setIsDesktopClient(true);
    else setIsDesktopClient(false);
  }, []);

  return (
    <>
      {!isDesktopClient && (
        <p className="absolute bottom-10 w-screen animate-bounce text-center opacity-40">
          Tap anywhere
        </p>
      )}
    </>
  );
};

export default HomeClient;
