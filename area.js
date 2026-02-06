const prompt = require("prompt-sync")();

function rectangleArea(length, width) {
  return length * width;
}

const length = Number(prompt("Enter length: "));
const width = Number(prompt("Enter width: "));

const area = rectangleArea(length, width);
console.log(`Area of rectangle is ${area}`);

module.exports = rectangleArea;