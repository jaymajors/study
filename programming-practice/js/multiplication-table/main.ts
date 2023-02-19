import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function main() {
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
}

main();
