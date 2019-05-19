import React from "react";

const Menu = ({
  score,
  finished,
  handleReset,
  collectedAppleCount,
  attemptsCount
}) => {
  return (
    <div className="menu">
      <div className={`menu-wrapper ${finished ? "visible" : "hidden"}`}>
        <div className="menu-header">Shake Tree</div>
        <div className="score">
          {score === 100 ? <div className="slogan">One Shot!!!</div> : null}
          <div>
            You dropped {collectedAppleCount} apples in {attemptsCount}{" "}
            attempts.
          </div>
          <div>Your Score is {score}</div>
        </div>
        <div className="buttons">
          <button onClick={handleReset}>Play Again!</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
