const prompt = require("prompt-sync")({ sigint: true });

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function getUserInput(display, prompt) {
  return prompt(display);
}

function calculateReturn(principal, rate, time) {
  const amount = principal * (1 + rate * time);
  return formatter.format(amount);
}

function main() {
  const principal = getUserInput("What is the principal: ", prompt);
  const rate = getUserInput("What is the rate: ", prompt);
  const years = getUserInput("Enter the number of years: ", prompt);

  const worth = calculateReturn(principal, rate / 100, years);
  console.log(
    `After ${years} years at ${rate}, the investment will be ${worth}.`
  );
}

main();
