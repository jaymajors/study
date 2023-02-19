import { Console } from "console";
import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

const monthTranslator = {
  spanish: [
    "Enero",
    "Febraro",
    "Marzo",
    "Arbil",
    "Mayo",
    "Junio",
    "Julio",
    "Augusto",
    "Septiembre",
    "Octobre",
    "Noviembre",
    "Deciembre",
  ],
  english: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

function main() {
  console.log("Available languages: Spanish / English");
  const language = promptForInput("What is your preferred language ", prompt);
  if (
    language.toLowerCase() === "spanish" ||
    language.toLowerCase() === "english"
  ) {
    const input = promptForInput(
      "Please enter the number of the month: ",
      prompt
    );
    const monthNumber = parseInt(input);
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      console.log("Invalid month entered");
    } else {
      console.log(
        `The name of the month is ${
          language.toLowerCase() === "spanish"
            ? monthTranslator.spanish[monthNumber - 1]
            : monthTranslator.english[monthNumber - 1]
        }`
      );
    }
  } else {
    console.log("Invalid language selected.");
  }
}

main();
