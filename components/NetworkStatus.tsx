"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import useNetwork from "@/hooks/useNetwork";

const NetworkStatus = () => {
  const { isOnline } = useNetwork();
  const hasShownOfflineToast = useRef(false);

  useEffect(() => {
    if (!isOnline && !hasShownOfflineToast.current) {
      toast.error("Connection lost", {
        description:
          "You appear to be offline. Some features may be unavailable.",
        duration: 10000,  closeButton: true,
      });
      hasShownOfflineToast.current = true;
    } else if (isOnline) {
      // Reset the flag when back online so it can show again if connection drops
      hasShownOfflineToast.current = false;
    }
  }, [isOnline]);

  return null;
};

export default NetworkStatus;
