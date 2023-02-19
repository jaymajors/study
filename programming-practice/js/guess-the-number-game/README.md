## Guess The Number Game

Write a Guess the Number game that has three levels of difficulty. The first level of difficulty would be a number between 1 and 10. The second difficulty set would be between 1 and 100. The third difficulty set would be between 1 and 1000.

Prompt for the difficulty level, and then start the game. The computer picks a random number in that range and prompts the player to guess that number. Each time the player guesses, the computer should give the player a hint as to whether the number is too high or too low. The computer should also keep track of the number of guesses. Once the player guesses the correct number, the computer should present the number of guesses and ask if the player would like to play again.

Example Output

Let's play Guess the Number.

Pick a difficulty level (1, 2, or 3): 1

I have my number. What's your guess? 1

Too low. Guess again: 5

Too high. Guess again: 2

You got it in 3 guesses!

Play again? n

Goodbye!

**Constraints**

- Don’t allow any non-numeric data entry.

- During the game, count non-numeric entries as wrong guesses.

**Challenges**

- Map the number of guesses taken to comments:

- 1 guess: “You’re a mind reader!”

- 2–4 guesses: “Most impressive.”

- 3–6 guesses: “You can do better than that.”

- 7 or more guesses: “Better luck next time.”

- Keep track of previous guesses and issue an alert that the user has already guessed that number. Count this as a wrong guess.

Implement this as a graphical game with a grid of numbers. When a number is clicked or tapped, remove the number from the screen.
