import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function calculateBMI(weight: number, height: number) {
  const heightInInches = height * 12;
  return (weight / (heightInInches * heightInInches)) * 703;
}

function main() {
  const weight = promptForInput("What is yourr weight in pounds? ", prompt);
  const height = promptForInput(
    "What is your height in feet (ex 6.1)? ",
    prompt
  );

  console.log("");
  const bmi = calculateBMI(parseFloat(weight), parseFloat(height));

  console.log(`Your BMI is ${bmi.toFixed(2)}`);
  if (bmi > 25) {
    console.log("You are overweight. You should see your doctor.");
  } else {
    console.log("You are within the ideal weight range.");
  }
}

main();
