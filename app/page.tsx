import HomeClient from "@/components/clientSide/HomeClient";
import React from "react";
import HomeLinks from "@/components/clientSide/HomeLinks";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <HomeClient />
      <div className="h-screen img">
        <div className="lg:w-3/5 w-full h-screen grid place-items-center">
          <div>
            <div><HomeLinks from="Hello." to="About" /></div>
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

