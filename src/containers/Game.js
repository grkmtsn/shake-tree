import React, { Component } from "react";
import PropTypes from "prop-types";

import * as Context from "../context";
import { Tree, Button, Scoreboard, Menu } from "../components";

class Game extends Component {
  render() {
    return (
      <Context.Game.Consumer>
        {({
          isShaking,
          apples,
          collectedAppleCount,
          handleShakeButtonClick,
          handleShakingAnimationEnd,
          finished,
          handleReset
        }) => (
          <React.Fragment>
            <Scoreboard count={collectedAppleCount} />
            <Button handleClick={handleShakeButtonClick} finished={finished} />
            <Tree
              isShaking={isShaking}
              apples={apples}
              handleAnimationEnd={handleShakingAnimationEnd}
            />
            <Menu
              score={collectedAppleCount}
              finished={finished}
              handleReset={handleReset}
            />
          </React.Fragment>
        )}
      </Context.Game.Consumer>
    );
  }
}

export default Game;
