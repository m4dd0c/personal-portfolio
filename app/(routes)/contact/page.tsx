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
          I am actively exploring opportunities for meaningful collaborations
          with companies, agencies, and individuals—rather than simply working
          for them. My goal is to contribute my extensive design experience to
          collaborative efforts, jointly addressing genuine business challenges
          in a manner that leverages our collective expertise.
        </p>
        <br />
        <p>
          I am committed to fostering a collaborative environment free from
          subjective conflicts, prioritizing open-minded partnerships. If this
          resonates with your vision, I am eager to discuss how we can
          collaborate effectively.
        </p>
        <br />
        <p>
          I look forward to exploring potential collaborations together.
          <br />
          Feel free to connect with me through any of the platforms listed
          below.
        </p>
        <br />
        <ul className="leading-loose font-semibold">
          {handles.map((val, i) => {
            let link = val.link;
            if (val.title === "E-mail") link = `mailto:${val.link}`;
            return (
              <li key={i}>
                <a href={link} className="red">
                  <MotionWrapper>{val.title}</MotionWrapper>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Contact;
