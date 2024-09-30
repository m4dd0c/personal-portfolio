import React from "react";

const BigHeader = ({ text, index }: { text: string; index?: number }) => {
  return (
    <div className="h-screen w-full bg-black grid place-items-center">
      <div className="w-3/4 h-1/2">
        <h1 className="lg:text-8xl text-5xl text-white font-bold leading-relaxed">
          {index ? (
            <>
              {text.slice(0, index)}
              <br />
              {text.slice(index)}
            </>
          ) : (
            <>{text}</>
          )}
        </h1>
      </div>
    </div>
  );
};

export default BigHeader;
