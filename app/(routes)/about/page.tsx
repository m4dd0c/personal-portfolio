import LilHeader from "@/components/LilHeader";
import Image from "next/image";
import React from "react";
import aboutPic from "@/public/assets/imgs/Dejan.png";
import BigHeader from "@/components/BigHeader";
import HangingBtn from "@/components/HangingBtn";
import MotionWrapper from "@/components/clientSide/MotionWrapper";

const About = () => {
  return (
    <div className="bg-black text-white">
      <HangingBtn/>
      <BigHeader text="I design & build Digital Products" index={16} />
      <Image src={aboutPic} alt="loading..." className="lg:h-auto lg:w-[80vw] object-cotain ml-auto mr-auto lg:mr-0" />
      {/* text content below */}
      <div className="lg:w-1/2 w-screen mx-auto my-36 leading-relaxed px-10">
      <LilHeader text="About" />

        <p className="lg:text-2xl text-lg">
          Hi, I’m Dejan. I'm a multi-talented human with over 10+ years of
          experiences in wide range of design disciplines.
        </p>
        <br />
        <br />
        <p>
          You can also call me a product designer, experience designer,
          interaction, UI, UX or by any other market defined function-title. I'm
          also a multi-disciplinary maker with over 10 years of experiences in
          wide range of design disciplines, manager, advisor, entrepreneur,
          front-end developer, music enthusiast, traveler, photographer and
          more.
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
          Fueled by high energy levels and boundless enthusiasm, I’m easily
          inspired and more then willing to follow my fascinations wherever they
          take me. I’m passionate, expressive, multi-talented spirit with a
          natural ability to entertain and inspire. I’m never satisfied to just
          come up with ideas. Instead I have an almost impulsive need to act on
          them.
        </p>
        <br />
        <p>
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of study and artistic endeavors. I’m a fast learner, able to
          pick up new skills and juggle different projects and roles with
          relative ease.
        </p>
        <br />
        <p>
          I like to develop expertise in a number of areas over the course of my
          life and career. My personality type is{" "}
          <a
            className="underline text-color-white"
            href="http://www.personalitypage.com/ENTJ.html"
            target="_blank"
          >
            {" "}
            ENTJ
          </a>
          . I currently work remotely with a selected freelance client base and
          are open for new opportunities.
        </p>
        <br />
        <p>
          You can read more about my biography, experience, skills, education
          and much more in the PDF attached bellow:
        </p>
        <br />
        <br />

        <MotionWrapper>
          <a
            className="red font-semibold"
            href="../files/Dejan_Markovic_CV.pdf"
            target="_blank"
          >
            My resume (pdf 109kb)
          </a>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default About;
