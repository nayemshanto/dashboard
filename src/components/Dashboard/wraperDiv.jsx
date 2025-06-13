import React from "react";

const WraperDiv = ({ children, reverse }) => {
  return (
    <div
      className={`space-y-4 md:space-y-0 md:flex flex-col gap-4 p-4 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {" "}
      {children}
    </div>
  );
};

export default WraperDiv;
