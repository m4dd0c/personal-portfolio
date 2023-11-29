import BigHeader from "@/components/BigHeader";
import HangingBtn from "@/components/HangingBtn";
import LilHeader from "@/components/LilHeader";
import MotionWrapper from "@/components/clientSide/MotionWrapper";
import { handles } from "@/constant/social.handles";
import React from "react";

const Contact = () => {
  return (
    <div>
      <HangingBtn />
      <BigHeader text="let's make something great" index={11} />
      {/* text content below */}
      <div className="lg:w-1/2 w-5/6 mx-auto mb-24 leading-relaxed text-lg">
        <LilHeader text="Contact" />
        <p>
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I want to bring my collective
          design experience to the table where we can work together to solve
          real business-problems in a way that optimizes all of our respective
          experience and knowledge.
        </p>
        <br />
        <p>
          I want to avoid subjective pissing-matches, and favor open-minded
          collaborators where egos are out of the equation. If that all sounds
          about right, then lets for sure chat about how we can work together.
        </p>
        <br />
        <p>Feel free to reach out through any platforms bellow:</p>
        <br />
        <ul className="leading-loose font-semibold">
          {handles.map((val, i) => (
            <li key={i}>
                <MotionWrapper>
                <a href={val.link} className="red">
                  {val.title}
                </a>
            </MotionWrapper>
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Contact;
