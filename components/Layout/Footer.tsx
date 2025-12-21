import { social_media } from "@/lib/constants";
import HrText from "../ui/HrText";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-950 pb-5 px-2 sm:px-0">
      <HrText>
        <div className="flex flex-col sm:flex-row justify-between align-center mb-4 mt-2 gap-2">
          <div className="flex justify-start align-center space-x-2"></div>
          <div>
            <small className="uppercase leading-loose font-mono text-[10px] sm:text-xs">
              All Rights Reserved © m4dd0c 2025
            </small>
          </div>
        </div>
      </HrText>
      <div className="flex flex-col justify-center align-center space-x-3">
        <div className="flex justify-center align-center space-x-3 mb-2 mt-2">
          {social_media.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-50/60 hover:text-gray-50 transition mt-1"
            >
              <item.icon size={18} className="sm:w-5 sm:h-5" />
            </Link>
          ))}
        </div>
        <small className="uppercase leading-loose font-mono text-center text-gray-50/50 text-[10px] sm:text-xs">
          Feel Free to Get in touch
        </small>
      </div>
    </div>
  );
};

export default Footer;
