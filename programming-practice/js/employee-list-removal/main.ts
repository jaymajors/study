import { Console } from "console";
import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

let employees = [
  "John Smith",
  "Jackie Jackson",
  "Chris Jones",
  "Amanda Cullen",
  "Jeremy Goodwin",
];

function printEmployees(employees: string[]) {
  console.log(`\nThere are ${employees.length} employees.`);
  employees.forEach((e) => console.log(e));
}

function main() {
  printEmployees(employees);

  const nameToRemove = promptForInput(
    "Enter an employee name to remove: ",
    prompt
  );
  const index = employees.findIndex((e) => e === nameToRemove);

  if (index === -1) {
    console.log("The name entered does not exist.");
  } else {
    employees = employees.filter((e) => e !== nameToRemove);
    printEmployees(employees);
  }
}

main();
