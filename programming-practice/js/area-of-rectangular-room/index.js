const prompt = require("prompt-sync")({ sigint: true });

const SquareFeetToMetersConversion = 0.09290304;
const SquareMetersToFeetConverstion = 10.764;

function getLengthWidth(prompt) {
  const length = prompt("What is the length of the room? ", prompt);
  const width = prompt("What is the width of the room? ", prompt);
  return { length, width };
}

function calculateArea(length, width) {
  return length * width;
}

function convertSquareMetersToSquareFeet(squareMeters) {
  return squareMeters * SquareMetersToFeetConverstion;
}

function convertSquareFeetToSquareMetric(squareFeet) {
  return squareFeet * SquareFeetToMetersConversion;
}

function isNumeric(value) {
  return !isNaN(parseFloat(value));
}

function main() {
  const measurement = prompt("Enter Feet or Meters for conversion");
  console.log(measurement);
  if (measurement === "Feet" || measurement === "Meters") {
    const { length, width } = getLengthWidth(prompt);
    if (isNumeric(length) && isNumeric(width)) {
      const area = calculateArea(length, width);
      if (measurement === "Feet") {
        const squareMeters = convertSquareFeetToSquareMetric(area);
        console.log(`Feet Area: ${area}`);
        console.log(`Metric Area: ${squareMeters}`);
      } else {
        const squareFeet = convertSquareMetersToSquareFeet(area);
        console.log(`Feet Area: ${squareFeet}`);
        console.log(`Metric Area: ${area}`);
      }
    } else {
      console.log("Enter numbers only please.");
    }
  } else {
    console.log("fail");
  }
}

main();
