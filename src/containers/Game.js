import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Context from '../context';
import { Tree, Button } from '../components';

class Game extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Context.Game.Consumer>
        {({
          isShaking,
          apples,
          handleShakeButtonClick,
          handleShakingAnimationEnd
        }) => (
          <React.Fragment>
            <Button handleClick={handleShakeButtonClick} />
            <Tree
              isShaking={isShaking}
              apples={apples}
              handleAnimationEnd={handleShakingAnimationEnd}
            />
          </React.Fragment>
        )}
      </Context.Game.Consumer>
    );
  }
}

export default Game;
