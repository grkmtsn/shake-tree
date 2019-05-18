import React from 'react';

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="button">
      SHAKE
    </button>
  );
};

export default Button;
