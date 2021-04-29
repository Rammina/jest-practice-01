const calculator = require("../functions/calculator");
//performs multiplication, division, subtraction, and addition

test("contains an add method", () => {
  expect(typeof calculator.add).toBe("function");
});

test("contains an subtract method", () => {
  expect(typeof calculator.subtract).toBe("function");
});

test("contains an multiply method", () => {
  expect(typeof calculator.multiply).toBe("function");
});

test("contains an divide method", () => {
  expect(typeof calculator.divide).toBe("function");
});

test("it outputs numeric value '9' when adding '6' and '3'", () => {
  expect(calculator.add(6, 3)).toBe(9);
});

test("it outputs numeric value '2122' when adding '222' and '1900'", () => {
  expect(calculator.add(222, 1900)).toBe(2122);
});

test("it outputs numeric value '3' when subtracting '6' and '3'", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("it outputs numeric value '-3' when subtracting '3' and '6'", () => {
  expect(calculator.subtract(3, 6)).toBe(-3);
});

test("it outputs numeric value '18' when multiplying '6' and '3'", () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});

test("it outputs numeric value '-69' when multiplying '23' and '-3'", () => {
  expect(calculator.multiply(23, -3)).toBe(-69);
});

test("it outputs numeric value '2' when dividing '6' and '3'", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("it outputs numeric value '-3' when dividing '69' and '-23'", () => {
  expect(calculator.divide(69, -23)).toBe(-3);
});
