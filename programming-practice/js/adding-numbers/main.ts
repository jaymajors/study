import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function promptForFiveNumbers() {
  const numbers: number[] = [];
  for (let i = 0; i < 5; i++) {
    const input = promptForInput("Enter a number: ", prompt);
    numbers.push(parseInt(input));
  }
  return numbers;
}

function main() {
  const numbers = promptForFiveNumbers();
  const sum = numbers.reduce((previous, current) => previous + current, 0);
  console.log(`The total is ${sum}.`);
}

main();
