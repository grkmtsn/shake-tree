const generateRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomArray = (size, min, max) => {
  return new Array(size).fill(0).map(function(n) {
    return generateRandomInt(min, max);
  });
};

export { generateRandomInt, generateRandomArray };
