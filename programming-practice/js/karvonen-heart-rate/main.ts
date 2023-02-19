import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function calculateTargetHeartRate(
  age: number,
  restingHR: number,
  intensity: number
) {
  return (220 - age - restingHR) * intensity + restingHR;
}

function main() {
  const age = promptForInput("How old are you? ", prompt);
  const restingHR = promptForInput("What is your resting heartRate? ", prompt);

  console.log(`Resting pulse: ${restingHR} Age: ${age}\n`);
  console.log(`Intensity    | Rate`);
  console.log(`-------------|--------`);

  for (let i = 55; i <= 100; i += 5) {
    const intensityStr = `${i}%`.padEnd(12);
    const rateStr = `${Math.round(
      calculateTargetHeartRate(parseInt(age), parseInt(restingHR), i / 100)
    )} BPM`;
    console.log(`${intensityStr} | ${rateStr}`);
  }
}

main();
