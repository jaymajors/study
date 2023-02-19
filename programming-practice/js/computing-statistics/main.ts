import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function computeAverage(times: number[]) {
  if (!times || times.length == 0) return 0;

  let sum = 0;

  times.forEach((time) => {
    sum += time;
  });

  return sum / times.length;
}

function computeStandardDeviation(mean: number, times: number[]) {
  const timeDiff: number[] = [];

  times.forEach((time) => {
    timeDiff.push((time - mean) * (time - mean));
  });

  let sum = 0;
  timeDiff.forEach((time) => {
    sum += time;
  });

  let stdmean = sum / timeDiff.length;
  return Math.sqrt(stdmean);
}

function main() {
  let capturing = true;

  const times = [];

  while (capturing) {
    const input = promptForInput("Enter a number: ", prompt);
    const time = parseInt(input);
    console.log(time);
    if (isNaN(time)) {
      capturing = false;
    } else {
      times.push(time);
    }
  }

  const average = computeAverage(times);
  const std = computeStandardDeviation(average, times);

  console.log(`The average is ${average}`);
  console.log(`The standard deviation is ${std}`);
}

main();
