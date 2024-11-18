import HomeClient from "@/components/clientSide/HomeClient";
import React from "react";
import HomeLinks from "@/components/clientSide/HomeLinks";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <HomeClient />
      <div className="img h-screen">
        <div className="grid h-screen w-full place-items-center lg:w-3/5">
          <div className="lg:w-[45%]">
            <div>
              <HomeLinks from="Hello." to="About" />
            </div>
            <div className="mt-4">
              <HomeLinks from="I am" to="Work" />
            </div>
            <div className="mt-4">
              <HomeLinks from="m4dd0x" to="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
