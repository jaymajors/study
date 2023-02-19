import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

const responses = ["Yes", "No", "Maybe", "Ask again later."];

function main() {
  while (true) {
    const question = promptForInput("What is your question? ", prompt);
    if (question.toLowerCase() === "q") {
      return;
    }
    const answer = responses[Math.floor(Math.random() * 4)];
    console.log(answer);
  }
}

main();
