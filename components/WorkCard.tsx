import React from "react";
import MotionWrapper from "./clientSide/MotionWrapper";
import HoverLink from "./clientSide/HoverLink";

const WorkCard = ({ data }: { data: WorkDataInterface }) => {
  return (
    <MotionWrapper px={35}>
      <div className="my-10 lg:my-20">
        <HoverLink prev={data.preview} title={data.title} link={data.link}>
          <a href={data.link} target="_blank">
            <h1 className="text-4xl font-bold tracking-wide lg:text-8xl">
              {data.title}
            </h1>
            <br />
            <p className="red inline-block font-semibold">{data.desc}</p>
          </a>
        </HoverLink>
      </div>
    </MotionWrapper>
  );
};

export default WorkCard;
