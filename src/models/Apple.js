import { random, constants } from "../helpers";

const { generateRandomInt } = random;
const { dropPositionRange, basketPosition } = constants;

class Apple {
  constructor(bottom, left, transition) {
    this.bottom = bottom;
    this.left = left;
    this.transition = transition;
    this.collected = false;
  }

  drop() {
    this.bottom = generateRandomInt(
      dropPositionRange.min,
      dropPositionRange.max
    );
  }

  collect() {
    this.bottom = basketPosition.bottom;
    this.left = basketPosition.left;
    this.collected = true;
  }
}

export default Apple;
