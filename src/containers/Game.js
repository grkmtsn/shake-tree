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
          score,
          attemptsCount,
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
              score={score}
              collectedAppleCount={collectedAppleCount}
              attemptsCount={attemptsCount}
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
