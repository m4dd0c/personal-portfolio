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
      <div className="my-28 w-screen px-10 lg:mx-auto lg:my-[40vh] lg:w-3/4">
        {/* text content below */}
        {work.map((val) => (
          <WorkCard key={val.id} data={val} />
        ))}
      </div>
    </div>
  );
};

export default Work;
