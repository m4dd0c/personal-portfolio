import { WorkDataInterface } from "@/constant/types";
import React from "react";
import MotionWrapper from "./clientSide/MotionWrapper";

const WorkCard = ({ data }: { data: WorkDataInterface }) => {
  return (
    <MotionWrapper>
      <div className="lg:my-20 my-10">
        <a href={data.link}>
          <h1 className="lg:text-8xl text-4xl tracking-wide font-bold">
            {data.title}
          </h1>
          <br />
          <p className="red font-semibold inline-block">{data.desc}</p>
        </a>
      </div>
    </MotionWrapper>
  );
};

export default WorkCard;
