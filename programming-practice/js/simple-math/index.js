const prompt = require("prompt-sync")({ sigint: true });

function promptForInput(display, prompt) {
  return prompt(display);
}

function takeInput(prompt) {
  const number1 = parseInt(promptForInput("Enter the first number: ", prompt));
  const number2 = parseInt(promptForInput("Enter the second number: ", prompt));
  return { number1, number2 };
}

function calculate(number1, number2) {
  return {
    number1,
    number2,
    sum: number1 + number2,
    diff: number1 - number2,
    product: number1 * number2,
    divide: number1 / number2,
  };
}

function createOutput(number1, number2) {
  const results = calculate(number1, number2);

  return {
    sum: `${number1} + ${number2} = ${results.sum}`,
    diff: `${number1} - ${number2} = ${results.diff}`,
    product: `${number1} * ${number2} = ${results.product}`,
    divide: `${number1} / ${number2} = ${results.divide}`,
  };
}

module.exports = { calculate, takeInput, promptForInput, createOutput };
