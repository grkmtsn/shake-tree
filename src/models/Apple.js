import { methods, constants } from '../helpers';

const { generateRandomInt } = methods;
const { dropPositionRange, basketPosition } = constants;

class Apple {
  constructor(bottom, left, transition) {
    this.bottom = bottom;
    this.left = left;
    this.transition = transition;
    this.transitionDelay = 0;
    this.collected = false;
  }

  drop() {
    this.bottom = generateRandomInt(
      dropPositionRange.min,
      dropPositionRange.max
    );
  }

  collect() {
    this.transitionDelay = this.transition;
    this.bottom = basketPosition.bottom;
    this.left = basketPosition.left;
    this.collected = true;
  }
}

export default Apple;
