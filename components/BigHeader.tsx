import React from "react";

const BigHeader = ({ text, index }: { text: string; index?: number }) => {
  return (
    <div className="grid h-screen w-full place-items-center bg-black">
      <div className="h-1/2 w-3/4">
        {index ? (
          <h1 className="text-5xl font-bold leading-relaxed text-white lg:text-8xl">
            {text.slice(0, index)}
            <br />
            {text.slice(index)}
          </h1>
        ) : (
          <h1 className="text-5xl font-bold leading-relaxed text-white lg:text-8xl">
            {text}
          </h1>
        )}
      </div>
    </div>
  );
};

export default BigHeader;
