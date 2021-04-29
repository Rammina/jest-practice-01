const analyzeArray = require("../functions/analyzeArray");
// takes in an array of numbers and returns an object with the following properties:
// {average, min, max, length}
test("'analyzeArray([1, 4, 9, 7, 69, 0])' outputs '{average: 15, min: 0, max: 69, length: 6}'", () => {
  expect(analyzeArray([1, 4, 9, 7, 69, 0])).toStrictEqual({
    average: 15,
    min: 0,
    max: 69,
    length: 6,
  });
});

test("'analyzeArray([2, -2, 0])' outputs '{average: 0, min: -2, max: 2, length: 3}'", () => {
  expect(analyzeArray([2, -2, 0])).toStrictEqual({
    average: 0,
    min: -2,
    max: 2,
    length: 3,
  });
});

test("'analyzeArray([40])' outputs '{average: 40, min: 40, max: 40, length: 1}'", () => {
  expect(analyzeArray([40])).toStrictEqual({
    average: 40,
    min: 40,
    max: 40,
    length: 1,
  });
});
