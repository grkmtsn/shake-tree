import React from "react";

const Button = ({ handleClick, finished }) => {
  return (
    <button disabled={finished} onClick={handleClick} className="button">
      SHAKE
    </button>
  );
};

export default Button;
