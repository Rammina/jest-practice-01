// takes in an array of numbers and returns an object with the following properties:
// {average, min, max, length}

const analyzeArray = function (arrayOfNumbers) {
  return {
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers),
    average:
      arrayOfNumbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) / arrayOfNumbers.length,
    length: arrayOfNumbers.length,
  };
};

module.exports = analyzeArray;
