import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  const orderAmount = promptForInput("What is the order amount? ", prompt);
  const state = promptForInput("What state do you live in ? ", prompt);
  let taxRate = 1.0;
  if (state === "Wisconsin") {
    const county = promptForInput("What county do you live in? ", prompt);
    if (county === "Eau Claire") {
      taxRate += 0.05;
    } else if (county === "Dunn") {
      taxRate += 0.04;
    }
  } else if (state === "Illinois") {
    taxRate += 0.08;
  }

  const total = parseFloat(orderAmount) * taxRate;
  if (taxRate > 1) {
    console.log(
      `The tax is ${formatter.format(parseFloat(orderAmount) * (taxRate - 1))}`
    );
  }

  console.log(`The total is ${formatter.format(total)}`);
}

main();
