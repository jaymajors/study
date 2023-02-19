const prompt = require("prompt-sync")({ sigint: true });

const SALES_TAX = 0.055;

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function getUserInput(display, prompt) {
  return prompt(display);
}

function isNumeric(value) {
  return !isNaN(parseFloat(value));
}

function calculateSalesTax(amount) {
  return amount * SALES_TAX;
}

function calculateAmount(items) {
  return items.reduce(
    (previous, current) => (previous += current.price * current.quantity),
    0
  );
}

function main() {
  let items = [];
  console.log("*** Simple Checkout ***");
  console.log("Enter x when all items entered");

  let enteringItems = true;
  while (enteringItems) {
    let price = prompt(`Enter the price of item ${items.length + 1}: `);
    if (price.toUpperCase() === "X") {
      enteringItems = false;
      continue;
    }
    if (!isNumeric(price) || price < 0) {
      console.log("Dude stop entering bogus prices!");
      break;
    }
    let quantity = prompt(`Enter the quantity of item ${items.length + 1}: `);
    if (!isNumeric(quantity) || quantity < 0) {
      console.log("Dude stop entering bogus quantities!");
      break;
    }

    items.push({ price, quantity });
  }

  const total = calculateAmount(items);
  const tax = calculateSalesTax(total);

  console.log(`\nSubtotal: ${formatter.format(total)}`);
  console.log(`Tax: ${formatter.format(tax)}`);
  console.log(`Total: ${formatter.format(total + tax)}`);
}

main();
