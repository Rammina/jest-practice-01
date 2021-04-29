const caesarCipher = require("../functions/caesarCipher");

test("it returns a string", () => {
  expect(typeof caesarCipher("hello world", 1)).toBe("string");
});

test("caesarCipher('may', 1) outputs 'nbz'", () => {
  expect(caesarCipher("may", 1)).toBe("nbz");
});

test("caesarCipher('JoJo', 3) outputs 'MrMr'", () => {
  expect(caesarCipher("JoJo", 3)).toBe("MrMr");
});

test("caesarCipher('Welcome to Morioh!', 2) outputs 'Ygneqog vq Oqtkqj!'", () => {
  expect(caesarCipher("Welcome to Morioh!", 2)).toBe("Ygneqog vq Oqtkqj!");
});

test("caesarCipher('Zeppeli', 1) outputs 'Afqqfmj'", () => {
  expect(caesarCipher("Zeppeli", 1)).toBe("Afqqfmj");
});
