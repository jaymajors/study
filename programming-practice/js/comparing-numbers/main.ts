import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  const number1 = promptForInput("Enter the first number: ", prompt);
  const number2 = promptForInput("Enter the second number: ", prompt);
  const number3 = promptForInput("Enter the third number: ", prompt);

  if (number1 === number2 || number2 == number3 || number1 == number3) {
    console.log("Be sure to enter 3 unique numbers");
  }

  let largest = parseFloat(number1);

  if (parseFloat(number2) > largest) {
    largest = parseFloat(number2);
  }

  if (parseFloat(number3) > largest) {
    largest = parseFloat(number3);
  }

  console.log(`The largest number is ${largest}`);
}

main();
