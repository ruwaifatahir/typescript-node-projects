import { question } from "readline-sync";

/**
 * Number Guessing Game
 * Computer will pick a random number between 0 to max
 * Player have to guess the number
 * If guess is right player will be rewarded a point,
 * and if wrong computer will be rewarded a point whoever
 * completes the target first wins.
 * Max number and target can be set by the user
 */

//Change this number to increase or decrease the max number e.g if number is set to 5 then computer will pick a number between 0 to 5.
const MAX_NUMBER: number = 5;

//Change this number to increase or decrease the target e.g if number is set to 5 then whoever reaches 5 points first wins.
const TARGET: number = 10;

//Main
async function main(): Promise<void> {
  let playerScore: number = 0;
  let computerScore: number = 0;
  let playerGuess: number;
  let computerGuess: number;

  while (playerScore < TARGET && computerScore < TARGET) {
    playerGuess = parseInt(question("Enter your guess: \n"));
    computerGuess = getRandomInt(MAX_NUMBER);
    if (playerGuess === computerGuess) {
      playerScore++;
      logScore(computerGuess, playerScore, computerScore);
    } else {
      computerScore++;
      logScore(computerGuess, playerScore, computerScore);
    }
  }

  if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else {
    console.log("Computer Wins!");
  }
}

main().catch((error) => {
  console.error(error);
});

//Helpers
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function logScore(cGuess: number, pPoints: number, cPoints: number): void {
  console.log("Computer Guess: ", cGuess, "\n");
  console.log("Player Score: ", pPoints, "\n");
  console.log("Computer Score: ", cPoints, "\n");
}
