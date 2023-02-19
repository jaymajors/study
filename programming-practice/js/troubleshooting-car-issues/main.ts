import { Console } from "console";
import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  const silent = promptForInput(
    "Is the car silent when you turn the key? ",
    prompt
  );
  if (silent.toLowerCase() === "y") {
    carSilent();
  } else {
    carNotSilent();
  }
}

function carNotSilent() {
  const clicking = promptForInput(
    "Does the car make a clicking noise? ",
    prompt
  );
  if (clicking.toLowerCase() === "y") {
    console.log("Replace the battery.");
  } else {
    const failToStart = promptForInput(
      "Does the car crank up but fail to start? ",
      prompt
    );
    if (failToStart.toLowerCase() === "y") {
      console.log("Check spark plug connections");
    } else {
      const startThenDie = promptForInput(
        "Does the engine start then die? ",
        prompt
      );
      if (startThenDie.toLowerCase() === "y") {
        const fuelInjection = promptForInput(
          "Does your car have fuel injection? ",
          prompt
        );
        if (fuelInjection.toLowerCase() === "y") {
          console.log("Get it in for service.");
        } else {
          console.log("Check to ensure the choke is opening and closing.");
        }
      } else {
        console.log("Get it in for service");
      }
    }
  }
}

function carSilent() {
  const corroded = promptForInput(
    "Are the battery terminals corroded? ",
    prompt
  );
  if (corroded.toLowerCase() === "y") {
    console.log("Clean terminals and try starting again.");
  } else {
    console.log("Replace cables and try again.");
  }
}

main();
