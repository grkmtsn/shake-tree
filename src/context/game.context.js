import React, { Component } from 'react';
import Apple from '../models/Apple';

const GameContext = React.createContext();

import { random, constants } from '../helpers';

const { generateRandomArray, generateRandomInt } = random;
const { appleCountRange, bottomRange, transitionRange, leftRange } = constants;

class GameProvider extends Component {
  state = {
    apples: [],
    collectedApples: [],
    isShaking: false
  };

  componentWillMount() {
    this.generateApple();
  }

  generateApple = () => {
    const appleCount = generateRandomInt(
      appleCountRange.min,
      appleCountRange.max
    );

    //Generate Apple Objects and set state
    for (let index = 0; index < appleCount; index++) {
      const apple = new Apple(
        generateRandomInt(bottomRange.min, bottomRange.max),
        generateRandomInt(leftRange.min, leftRange.max),
        generateRandomInt(transitionRange.min, transitionRange.max)
      );
      this.setState(prevState => {
        const apples = [...prevState.apples, apple];
        return {
          apples
        };
      });
    }
  };

  handleShakeButtonClick = () => {
    this.setState({ isShaking: true });
  };

  handleShakingAnimationEnd = () => {
    this.setState({ isShaking: false });
    const { apples } = this.state;
    const collectedApples = [apples[0]];
    this.dropApples(collectedApples);
  };

  dropApples = apples => {
    const dropapples = apples.map(apple => {
      apple.drop();
      return apple;
    });

    this.setState(
      prevState => {
        console.log(dropapples, 'drop');
        const other = prevState.apples.filter(item => item.collected === false);
        console.log(other, 'other');
        return {
          apples: [...other, ...dropapples]
        };
      },
      () => {
        console.log(this.state, 'state');
        this.collectApples(dropapples, other);
      }
    );
  };

  collectApples = (apples, other) => {
    console.log(apples, 'collect');
    setTimeout(() => {
      const collectedApples = apples.map(apple => {
        apple.collect();
        return apple;
      });
      this.setState(prevState => {
        return {
          apples: [...other, ...collectedApples]
        };
      });
    }, 1000);
  };

  render() {
    const { children } = this.props;
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          handleShakeButtonClick: this.handleShakeButtonClick,
          handleShakingAnimationEnd: this.handleShakingAnimationEnd
        }}
      >
        {children}
      </GameContext.Provider>
    );
  }
}

export const { Consumer } = GameContext;
export const Provider = GameProvider;
