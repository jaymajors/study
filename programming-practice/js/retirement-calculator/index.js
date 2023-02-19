const prompt = require("prompt-sync")({ sigint: true });

const age = prompt("What is your current age? ");
const retirementAge = prompt("What age do you want to retire? ");

const currentYear = new Date().getFullYear();

const yearsUntilRetirement = retirementAge - age;
const yearCanRetire = currentYear + yearsUntilRetirement;

if (yearsUntilRetirement < 0) {
  console.log("You can already retire!");
} else {
  console.log(
    `You have ${yearsUntilRetirement} years left until you can retire`
  );
  console.log(`It's ${currentYear}, so you can retire in ${yearCanRetire}`);
}
