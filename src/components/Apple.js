import React from "react";

const Apple = ({ bottom, left, transition, collected }) => {
  const transitionStyle = `all ${transition}ms linear`;
  return (
    <div
      className="apple"
      style={{
        bottom,
        left,
        transition: transitionStyle,
        opacity: collected ? 0 : 1
      }}
    />
  );
};

export default Apple;
