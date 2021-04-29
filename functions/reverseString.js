//reverses a string's character order

function reverseString(string) {
  // .split("") -  If an empty string ("") is used as the separator, the string is split between each character. turns the string into an array of characters
  // .reverse() - reverses the order of items in an array
  // .join("") - creates a string from an array, putting in "" as an argument simply merges them into a string with nothing in between

  return string.split("").reverse().join("");
}

module.exports = reverseString;
