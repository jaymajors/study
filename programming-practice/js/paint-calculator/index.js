const prompt = require("prompt-sync")({ sigint: true });

const GALLON_SQAURE_FEET_COVERATE = 360;

// area of circle = pie * r^2

function getUserInput(display, prompt) {
  return prompt(display);
}

function calculateSquareFeet(length, width) {
  return length * width;
}

function calculateCircleSquareFeet(radius) {
  return Math.ceil(Math.PI * radius * radius);
}

function calculateCansRequired(squareFeet) {
  return Math.ceil(squareFeet / GALLON_SQAURE_FEET_COVERATE);
}

function pluralize(words, count) {
  return count > 1 ? words[1] : words[0];
}

function isNumeric(value) {
  return !isNaN(parseInt(value));
}

function squareRoom() {
  const length = getUserInput("What is the length of your room? ", prompt);
  const width = getUserInput("What is the width of your room? ", prompt);

  if (!isNumeric(length)) {
    console.log("Length should be a number!");
    return;
  }

  if (!isNumeric(width)) {
    console.log("Width shoud be a number!");
    return;
  }

  return calculateSquareFeet(length, width);
}

function circleRoom() {
  const radius = getUserInput("What is the radius of your room? ", prompt);

  return calculateCircleSquareFeet(radius);
}

function main() {
  let input = getUserInput("Enter 1 for square, Enter 2 for circle.", prompt);
  let roomsSquareFeet = 0;
  if (input == 1) {
    roomsSquareFeet = squareRoom();
  } else {
    roomsSquareFeet = circleRoom();
  }
  const cansRequired = calculateCansRequired(roomsSquareFeet);

  console.log(
    `You will need to purchase ${cansRequired} ${pluralize(
      ["gallon", "gallons"],
      cansRequired
    )} of paint to cover ${roomsSquareFeet} square feet.`
  );
}

main();
