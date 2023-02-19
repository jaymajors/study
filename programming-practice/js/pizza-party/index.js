const prompt = require("prompt-sync")({ sigint: true });

const SLICES_PER_PIZZA = 8;

function getUserInput(display, prompt) {
  return prompt(display);
}

function calculateSlicesPerPerson(pizzas, people) {
  return Math.floor((pizzas * SLICES_PER_PIZZA) / people);
}

function calculateSlicesLeftOver(pizzas, people) {
  return (pizzas * SLICES_PER_PIZZA) % people;
}

function pluralize(words, count) {
  return count > 1 ? words[1] : words[0];
}

function main(prompt) {
  const people = getUserInput("How many people? ", prompt);
  const pizzas = getUserInput("How many pizzas do you have? ", prompt);

  if (isNaN(parseInt(people))) {
    console.log("Please enter a numeric value for people.");
    return;
  }

  if (isNaN(parseInt(pizzas))) {
    console.log("Please enter a numeric value for pizzas.");
    return;
  }

  const slicesPerPerson = calculateSlicesPerPerson(pizzas, people);
  const slicesLeftOver = calculateSlicesLeftOver(pizzas, people);

  console.log("\n");

  console.log(
    `Each person gets ${slicesPerPerson} ${pluralize(
      ["piece", "pieces"],
      slicesPerPerson
    )} of pizza.`
  );
  console.log(`There are ${slicesLeftOver} left over pieces.`);
}

main(prompt);
