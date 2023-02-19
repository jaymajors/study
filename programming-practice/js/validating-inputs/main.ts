import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

const onlyNumbers = /^[0-9]+$/;
const employeeIDRegEx = /^[A-Z][A-Z]-[0-9][0-9][0-9][0-9]$/;

function isNotEmpty(input: string) {
  return input !== null;
}

function isValidNameLength(name: string) {
  return name.length >= 2;
}

function validateZipCode(zipCode: string) {
  const valid =
    zipCode.match(onlyNumbers) && zipCode.match(onlyNumbers).length > 0;
  if (!valid) {
    console.log("The ZIP code must be numeric");
  }
}

function validateEmployeeId(id: string) {
  const valid =
    id.match(employeeIDRegEx) && id.match(employeeIDRegEx).length > 0;
  if (!valid) {
    console.log(`${id} is not a valid ID`);
  }
}

function validateName(name: string) {
  if (!isNotEmpty(name)) {
    console.log(`The first name must be filled in.`);
  }
  if (!isValidNameLength(name)) {
    console.log(`${name} is not a valid first name. It is too short`);
  }
}

function main() {
  const firstName = promptForInput("Enter the first name: ", prompt);
  const lastName = promptForInput("Enter the last name: ", prompt);
  const zipCode = promptForInput("Enter the ZIP code: ", prompt);
  const employeeId = promptForInput("Enter an employee ID: ", prompt);

  validateName(firstName);
  validateName(lastName);
  validateZipCode(zipCode);
  validateEmployeeId(employeeId);
}

main();
