import React from "react";

const Menu = ({ score, finished, handleReset }) => {
  return (
    <div className="menu">
      <div className={`menu-wrapper ${finished ? "visible" : "hidden"}`}>
        <div className="menu-header">Shake Tree</div>
        <div className="score">
          <span>Your Score is {score}</span>
        </div>
        <div className="buttons">
          <button onClick={handleReset}>Play Again!</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
