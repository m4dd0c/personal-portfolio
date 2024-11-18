import React from "react";

const LilHeader = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="lil-header">{text}</p>
    </div>
  );
};

export default LilHeader;
