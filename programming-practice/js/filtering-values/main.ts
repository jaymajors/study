import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string) {
  return prompt(displayText);
}

function main() {
  const input = promptForInput("Enter a list of numbers separated by spaces: ");
  console.log(
    `Here are the even numbers ${filterEvenNumbers(input.split(" "))}.`
  );
}

function filterEvenNumbers(numbers: string[]) {
  return numbers.filter((n) => Number(n) % 2 == 0);
}

main();
