import { Prompt } from "prompt-sync";

const prompt: Prompt = require("prompt-sync")({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  const age = parseInt(promptForInput("What is your age? ", prompt));
  age >= 16
    ? console.log("You are old enough to legally drive.")
    : console.log("You are not old enough to legally drive.");
}

main();
