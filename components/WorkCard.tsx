import { WorkDataInterface } from "@/constant/types";
import React from "react";
import MotionWrapper from "./clientSide/MotionWrapper";
import HoverLink from "./clientSide/HoverLink";

const WorkCard = ({ data }: { data: WorkDataInterface }) => {
  return (
    <MotionWrapper px={35}>
      <div className="lg:my-20 my-10">
        <HoverLink prev={data.preview} title={data.title} link={data.link}>
          <a href={data.link} target="_blank">
            <h1 className="lg:text-8xl text-4xl tracking-wide font-bold">
              {data.title}
            </h1>
            <br />
            <p className="red font-semibold inline-block">{data.desc}</p>
          </a>
        </HoverLink>
      </div>
    </MotionWrapper>
  );
};

export default WorkCard;
