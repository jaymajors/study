import { Console } from "console";
import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

const specialCharacters = ["%", "#", "+", "*"];

function generateSpecialCharacters(count: number) {
  let specials: string[] = [];
  for (let i = 0; i < count; i++) {
    specials.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }
  return specials;
}

function generateNumbers(count: number) {
  let numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  return numbers;
}

function main() {
  const minLenth = promptForInput("Whats the min length? ", prompt);
  const special = promptForInput("How many special characters? ", prompt);
  const numbers = promptForInput("How many numbers? ", prompt);

  const genSpecials = generateSpecialCharacters(parseInt(special));
  const genNumbers = generateNumbers(parseInt(numbers));

  console.log(genSpecials);
  console.log(genNumbers);
}

main();
