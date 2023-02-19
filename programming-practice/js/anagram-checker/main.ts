import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function isAnagram(first: string, second: string) {
  if (first.split("").sort().join("") === second.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}

function main() {
  const first = promptForInput("Enter the first string: ", prompt);
  const second = promptForInput("Enter the second string: ", prompt);

  console.log(
    `${first} and ${second} ${
      isAnagram(first, second) ? "are" : "are not"
    } anagrams.`
  );
}

main();
