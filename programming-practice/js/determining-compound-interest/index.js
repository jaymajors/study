const prompt = require("prompt-sync")({ sigint: true });

function promptForInput(display, prompt) {
  return prompt(display);
}

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function calculateCompoundInterest(principal, rate, years, intCalcs) {
  const r = rate / 100;
  return principal * Math.pow(1 + r / intCalcs, intCalcs * years);
}

function main() {
  const principal = promptForInput("What is the principal amount? ", prompt);
  const rate = promptForInput("What is the rate? ", prompt);
  const years = promptForInput("What is the number of years? ", prompt);
  const intCalcs = promptForInput(
    "What is the number of times the interest is compounded per year? ",
    prompt
  );

  const amount = calculateCompoundInterest(principal, rate, years, intCalcs);

  console.log(
    `${formatter.format(
      principal
    )} invested at ${rate}% for ${years} years compounded ${intCalcs} times per year is ${formatter.format(
      amount
    )}`
  );
}

main();
