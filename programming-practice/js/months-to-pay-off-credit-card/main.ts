import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function monthsToPay(dailyAPR: number, balance: number, payment: number) {
  const dailyRate = dailyAPR / 365;

  return (
    (-1 * Math.log(1 - (dailyRate * balance) / payment)) /
    Math.log(1 + dailyRate)
  );
}

function main() {
  const balance = promptForInput("What is your balance? ", prompt);
  const APR = promptForInput(
    "What is the APR on the card (as a percent)? ",
    prompt
  );
  const monthlyPayment = promptForInput(
    "What is the monthey payment you can make? ",
    prompt
  );

  const months = monthsToPay(
    parseFloat(APR),
    parseFloat(balance),
    parseFloat(monthlyPayment)
  );

  console.log(months);
}

main();
