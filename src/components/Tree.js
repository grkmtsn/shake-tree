import React from "react";
import { Apple } from "./";

const Tree = ({ isShaking, apples, handleAnimationEnd }) => {
  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={`tree ${isShaking ? "shake" : ""}`}
    >
      {apples.map((apple, index) => (
        <Apple
          key={index}
          bottom={apple.bottom}
          left={apple.left}
          transition={apple.transition}
          collected={apple.collected}
        />
      ))}
    </div>
  );
};

export default Tree;
