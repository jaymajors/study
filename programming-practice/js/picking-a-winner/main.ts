import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  let capturing = true;
  let names = [];
  while (capturing) {
    let name = promptForInput("Enter a name: ", prompt);
    if (name === "") {
      capturing = false;
    } else {
      names.push(name);
    }
  }

  const winner = names[Math.floor(Math.random() * names.length)];
  console.log(`The winner is... ${winner}`);
}

main();
