import Image from "next/image";
import HrText from "../ui/HrText";
import { social_media } from "@/lib/constants";
import Link from "next/link";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] px-2 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-4 sm:py-0">
        <div className="border border-(--pattern-fg) rounded-full p-1 w-fit h-fit my-auto">
          <Image
            src="/assets/imgs/pfp.png"
            alt="Profile Picture"
            width={192}
            height={192}
            className="rounded-full size-20 sm:size-26 border border-white/10 shadow-lg"
          />
        </div>
        <div className="h-16 sm:h-26 uppercase hidden sm:block">
          <TextHoverEffect text="m4dd0c" />
        </div>
        <h2 className="sm:hidden text-2xl font-bold tracking-tighter uppercase text-gray-800 dark:text-gray-200">
          m4dd0c
        </h2>
        <div className="hidden sm:block" />
      </div>
      <div>
        <HrText>
          <div className="flex align-center justify-start space-x-2">
            <small className="text-gray-50/40 pl-2">Yo, I am</small>
            <Image
              height={192}
              width={192}
              src={"/assets/imgs/poo.gif"}
              unoptimized
              alt="hello-gif"
              className="h-4 w-auto invert-0"
            />
          </div>
        </HrText>
        <HrText hide={["after", "before"]}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-2 gap-2 sm:gap-0">
            <h1 className="tracking-tighter text-balance max-lg:font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
              Manish Suthar
            </h1>
            <div className="flex justify-center align-center space-x-3">
              {social_media.map((item) => (
                <Link
                  href={item.link}
                  key={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-50/60 hover:text-gray-50 transition"
                >
                  <item.icon size={18} className="sm:w-5 sm:h-5" />
                </Link>
              ))}
            </div>
          </div>
        </HrText>
        <HrText>
          <p className="text-xs sm:text-sm font-medium text-gray-50/40 ml-2">
            <span className="hover:text-gray-50/50">21</span> •{" "}
            <span className="hover:text-gray-50/50">Dev</span> •{" "}
            <span className="hover:text-gray-50/50">Build</span> •{" "}
            <span className="hover:text-gray-50/50">OSS</span>
          </p>
        </HrText>
        {/* buttons */}
        <br />
        <HrText>
          <div className="flex align-center gap-2 ml-2">
            <div className="flex justify-center align-center gap-4">
              <a
                target="_blank"
                className="flex justify-center items-center z-1 rounded-4xl bg-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                href="https://drive.google.com/file/d/14CBB9zw6nGzN8tz6A0Hi4UYraq8R4PBe/view?usp=sharing"
              >
                <span>Hire Me</span>&nbsp; <IoArrowForward />
              </a>{" "}
            </div>
          </div>
        </HrText>
      </div>
    </>
  );
};

export default Hero;
