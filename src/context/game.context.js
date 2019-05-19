import React, { Component } from "react";
import Apple from "../models/Apple";

const GameContext = React.createContext();

import { methods, constants } from "../helpers";

const { generateRandomInt, delay } = methods;
const { appleCountRange, bottomRange, transitionRange, leftRange } = constants;

class GameProvider extends Component {
  state = {
    apples: [], // Apples array will render on tree component
    collectedApples: [], // Collected apples array after every click
    applesOnTree: [], // Apples array stay on tree
    collectedAppleCount: 0, // Collected apple count after every click
    isShaking: false, // Animation control state
    finished: false // Check game finish state
  };

  componentWillMount() {
    this.generateApple();
  }

  generateApple = () => {
    // Apple count will generate
    const appleCount = generateRandomInt(
      appleCountRange.min,
      appleCountRange.max
    );

    // Generate apple objects and set state
    for (let index = 0; index < appleCount; index++) {
      const apple = new Apple(
        generateRandomInt(bottomRange.min, bottomRange.max),
        generateRandomInt(leftRange.min, leftRange.max),
        generateRandomInt(transitionRange.min, transitionRange.max)
      );
      this.setState(prevState => {
        const apples = [...prevState.apples, apple];
        const applesOnTree = [...prevState.apples, apple];
        return {
          apples,
          applesOnTree
        };
      });
    }
  };

  handleShakeButtonClick = () => {
    this.setState({ isShaking: true });
  };

  handleShakingAnimationEnd = () => {
    // After tree shake animation end in css, this method will execute
    this.setState({ isShaking: false });
    const { apples } = this.state;

    const applesOnTree = apples.filter(apple => apple.collected === false); // At first get apples which collected property is false
    this.setState({ applesOnTree });
    const applesCountOnTree = applesOnTree.length; // Length of apples on tree
    const collectedApples = [applesOnTree[0]]; // Always collect at least one, this is first one default
    for (let index = 1; index < applesCountOnTree; index++) {
      // Collect random apples to drop except first one
      if (Math.random() > 0.5) {
        collectedApples.push(applesOnTree[index]);
      }
    }
    collectedApples.length > 0 && this.dropApples(collectedApples); // Send collected apples to drop method
  };

  dropApples = collectedApples => {
    const droppedApples = collectedApples.map(apple => {
      apple.drop(); // Each apple has drop method in own class
      return apple;
    });
    this.collectApples(droppedApples); // Send dropped apples to add collect method
  };

  collectApples = droppedApples => {
    droppedApples.map(async apple => {
      this.addBasket(apple);
    });
  };

  addBasket = async apple => {
    await delay(1000 + apple.transition);
    apple.collect(); // Each apple has collect method in own class. Collect method set apple's collected propery to true
    await delay(apple.transition);

    this.setState(
      prevState => {
        const applesOnTree = prevState.apples.filter(
          apple => apple.collected === false
        );
        // Filter apples on tree for collected property and set apple count in basket
        return {
          applesOnTree,
          collectedAppleCount: prevState.collectedAppleCount + 1
        };
      },
      async () => {
        const { apples, collectedAppleCount } = this.state;
        // Game finish logic
        if (apples.length === collectedAppleCount) {
          await delay(apple.transition);
          this.finish();
        }
      }
    );
  };

  finish = () => {
    this.setState({ finished: true });
  };

  reset = () => {
    this.setState(
      prevState => {
        return {
          apples: [],
          collectedApples: [],
          applesOnTree: [],
          collectedAppleCount: 0,
          finished: false
        };
      },
      () => {
        this.generateApple();
      }
    );
  };

  render() {
    const { children } = this.props;
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          handleShakeButtonClick: this.handleShakeButtonClick,
          handleShakingAnimationEnd: this.handleShakingAnimationEnd,
          handleReset: this.reset
        }}
      >
        {children}
      </GameContext.Provider>
    );
  }
}

export const { Consumer } = GameContext;
export const Provider = GameProvider;
