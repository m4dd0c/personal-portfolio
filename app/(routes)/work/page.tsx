import BigHeader from "@/components/BigHeader";
import HangingBtn from "@/components/HangingBtn";
import WorkCard from "@/components/WorkCard";
import { work } from "@/constant/work.data";
import React from "react";

const Work = () => {
  return (
    <div>
      <HangingBtn />
      <BigHeader text="Products, I've built." />
      <div className="lg:w-3/4 w-screen lg:my-[40vh] my-28 lg:mx-auto px-10">
        {/* text content below */}
        {work.map((val) => (
          <WorkCard key={val.id} data={val} />
        ))}
      </div>
    </div>
  );
};

export default Work;
