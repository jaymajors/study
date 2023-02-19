import { Prompt } from "prompt-sync";

const prompt: Prompt = require("prompt-sync")({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function calculateYearsToDouble(rate: number) {
  return (72 / rate).toFixed(2);
}

function main() {
  let running = true;

  while (running) {
    const input = promptForInput("What is the rate of return? ", prompt);
    const rate = parseFloat(input);
    if (isNaN(rate) || rate == 0) {
      console.log("Sorry. That's not a valid input.");
    } else {
      console.log(
        `It will take ${calculateYearsToDouble(
          rate
        )} years to double your initial investment.`
      );
      running = false;
    }
  }
}

main();
