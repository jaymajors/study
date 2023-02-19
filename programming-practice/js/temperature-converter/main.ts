import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function convertToCelcius(farenheit: number) {
  return (((farenheit - 32) * 5) / 9).toFixed(2);
}

function convertToFarenheit(celcius: number) {
  return ((celcius * 5) / 9 + 32).toFixed(2);
}

function main() {
  console.log("Press C to convert from Fahrenheit to Celsius.");
  console.log("Press F to convert from Celsius to Fahrenheit.");
  const choice = promptForInput("Your choice: ", prompt);
  console.log("");
  const temperatureFrom = prompt(
    `Please enter the temperature in ${
      choice.toUpperCase() === "F" ? "Celcius" : "Fahrenheit"
    }: `
  );
  console.log(
    `The temperature in ${
      choice.toUpperCase() === "C" ? "Fahrenheit" : "Celcius"
    } is ${
      choice.toUpperCase() === "F"
        ? convertToFarenheit(parseFloat(temperatureFrom))
        : convertToCelcius(parseFloat(temperatureFrom))
    }.`
  );
}

main();
