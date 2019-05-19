import React from "react";
import EmptyBasketSrc from "../images/basket-empty.png";
import FillBasketSrc from "../images/basket-fill.png";

const Scoreboard = ({ count }) => {
  return (
    <div className="scoreboard">
      <div className="basket">
        {count > 0 ? <img src={FillBasketSrc} /> : <img src={EmptyBasketSrc} />}
      </div>
      <div className="score">{count}</div>
    </div>
  );
};

export default Scoreboard;
