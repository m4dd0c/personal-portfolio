import LilHeader from "@/components/LilHeader";
import Image from "next/image";
import React from "react";
import aboutPic from "@/public/assets/imgs/Dejan.png";
import BigHeader from "@/components/BigHeader";
import HangingBtn from "@/components/HangingBtn";
import MotionWrapper from "@/components/clientSide/MotionWrapper";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-black text-white">
      <HangingBtn />
      <BigHeader text="I design & build Digital Products" index={16} />
      <Image
        src={aboutPic}
        alt="loading..."
        className="lg:h-auto lg:w-[80vw] object-cotain ml-auto mr-auto lg:mr-0"
      />
      {/* text content below */}
      <div className="lg:w-1/2 w-screen mx-auto my-36 leading-relaxed px-10">
        <LilHeader text="About" />

        <p className="lg:text-2xl text-lg">
          Hi, I'm Manish Suthar, alias as m4dd0c. I am an avid student with
          almost 3 years of self-practice in various skills.
        </p>
        <br />
        <p>
          As opposed to having multiple roles, I like to focus on honing my
          developmental skills.
        </p>
        <br />
        <p>
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </p>
        <br />
        <p>
          I have a keen interest in technology, whether it’s working with PCs or
          mobile devices, and I love playing chess and expressing my creativity
          through drawings and sketches.. I’m a fast learner, able to pick up
          new skills and juggle different projects and roles with relative ease.
        </p>
        <br />
        <p>
          My motivation comes from an instinct that drives me inside and compels
          me to learn and create. This inner strength pushes me to constantly
          improve and develop, and I firmly believe that the process of doing
          and learning enriches one’s character and intelligence. I mean I am an
          <a
            href="https://www.16personalities.com/istj-personality"
            target="_blank"
          >
            {" "}
            ISTJ-A
          </a>
          personality type.
          <br />
          Currently graduating with a Bachelor’s Degree in Computer Application,
          I am simultaneously expanding my knowledge and skill set. I am open to
          exploring new opportunities that align with my passion for learning
          and creativity.
        </p>
        <br />
        <p>
          You can read more about my biography, experience, skills, education
          and much more in the PDF attached bellow:
        </p>
        <br />
        <br />
        <Link
          className="red font-semibold"
          href="/assets/resume/resume.pdf"
          target="_blank"
          locale={false}
        >
          <MotionWrapper>My resume (pdf 74kb)</MotionWrapper>
        </Link>
      </div>
    </div>
  );
};

export default About;
