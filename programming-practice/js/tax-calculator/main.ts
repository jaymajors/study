const myPrompt = require("prompt-sync")({ sigint: true });

function promptForInput(display: string, prompt: any): string {
  return prompt(display);
}

function calculateTax(amount: number, rate: number) {
  return amount * rate;
}

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function main() {
  const orderAmount = parseFloat(
    promptForInput("What is the order amount? ", myPrompt)
  );
  const state = promptForInput("What is the state? ", myPrompt).toLowerCase();

  console.log(`The subtotal is ${formatter.format(orderAmount)}`);
  let tax = 0;
  if (state === "wi" || state == "wisconsin") {
    tax = calculateTax(orderAmount, 0.055);
    console.log(`The tax is ${formatter.format(tax)}`);
  }
  console.log(`The total is ${formatter.format(orderAmount + tax)}`);
}

main();
