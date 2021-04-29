const capitalize = require("../functions/capitalize");

test("it returns a string", () => {
  expect(typeof capitalize("hello world")).toBe("string");
});

test("receives input 'honey' and outputs 'Honey'", () => {
  expect(capitalize("honey")).toBe("Honey");
});

test("receives input 'love' and outputs 'Love'", () => {
  expect(capitalize("love")).toBe("Love");
});

test("receives input 'may' and outputs 'May'", () => {
  expect(capitalize("may")).toBe("May");
});

test("receives input 'i love you may <3' and outputs 'I love you may <3'", () => {
  expect(capitalize("i love you may <3")).toBe("I love you may <3");
});

test("receives input 'brb' and outputs 'Brb'", () => {
  expect(capitalize("brb")).toBe("Brb");
});

test("receives input 'OMG' and outputs 'OMG'", () => {
  expect(capitalize("OMG")).toBe("OMG");
});
