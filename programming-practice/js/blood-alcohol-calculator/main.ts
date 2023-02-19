import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  const ounces = promptForInput("How many ounces of alcohol? ", prompt);
  const abv = promptForInput("Whats the abv? ", prompt);
  const weight = promptForInput("How much do you weight? ", prompt);
  const hours = promptForInput(
    "How many hours since your last drink? ",
    prompt
  );
  const gender = promptForInput("Are you male or female? ", prompt);

  const ditroRatio = gender.toLowerCase() === "m" ? 0.73 : 0.66;
  const bac =
    ((parseFloat(ounces) * parseFloat(abv)) / parseFloat(weight)) * ditroRatio -
    0.15 * parseFloat(hours);

  console.log(`Your BAC is ${bac}`);
  if (bac > 0.08) {
    console.log("It is not legal to drive.");
  } else {
    console.log("Its legal to drive");
  }
}

main();
