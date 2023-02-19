const prompt = require("prompt-sync")({ sigint: true });

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function promptForInput(display, prompt) {
  return prompt(display);
}

function convertCurrency(amountfrom, rateto) {
  return amountfrom * rateto;
}

function main() {
  const euros = promptForInput("How many Euro's are you exchanging? ", prompt);
  const rate = promptForInput("What is the exchnage rate? ", prompt);

  console.log(`${euros} euros at an exchange rate of ${rate} is`);

  const usd = convertCurrency(euros, rate);
  console.log(`${formatter.format(usd)} U.S. dollars.`);
}

main();
