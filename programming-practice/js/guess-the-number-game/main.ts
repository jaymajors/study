import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

function getDifficulty() {
  let askForDifficulty = true;

  while (askForDifficulty) {
    const input = promptForInput(
      "Pick a difficulty level (1,2, or 3): ",
      prompt
    );
    const difficulty = parseInt(input);
    if (difficulty === NaN) {
      console.log(`You entered ${input} please enter a number!`);
    } else {
      return difficulty;
    }
  }
}

function getRandomNumber(maxNumber: number) {
  return Math.floor(Math.random() * maxNumber + 1);
}

function getWinningNumber(difficulty: number) {
  switch (difficulty) {
    case 1:
      return getRandomNumber(10);
    case 2:
      return getRandomNumber(100);
    case 3:
      return getRandomNumber(1000);
    default:
      throw "Oh no!!";
  }
}

function playGuessing(winningNumber: number) {
  let playing = true;

  let guess = parseInt(
    promptForInput(`I have my number. What's your guess? `, prompt)
  );

  let guessCount = 1;

  while (playing) {
    if (guess === NaN) {
      guess = parseInt(promptForInput("Please enter a number: ", prompt));
    } else if (guess < winningNumber) {
      guess = parseInt(promptForInput("Too low. Guess again: ", prompt));
      guessCount++;
    } else if (guess > winningNumber) {
      guess = parseInt(promptForInput("Too high. Guess again: ", prompt));
      guessCount++;
    } else if (guess === winningNumber) {
      console.log(`You got it in ${guessCount} guesses!`);
      const again = promptForInput("Play again? ", prompt);
      return again.toLocaleLowerCase() === "y";
    }
  }
}

function main() {
  console.log(`Let's play Guess the Number.`);
  const difficulty = getDifficulty();
  let number = getWinningNumber(difficulty);

  let keepPlaying = true;
  while (keepPlaying) {
    if (!playGuessing(number)) {
      keepPlaying = false;
    }
  }
  console.log("Goodbye!");
}

main();
