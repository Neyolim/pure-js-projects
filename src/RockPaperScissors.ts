import promptSync from "prompt-sync";

const prompt = promptSync();

let wins: number = 0;
let draws: number = 0;
let losses: number = 0;

type Choice = "rock" | "paper" | "scissors";

console.log("Welcome to Rock Paper Scissors! Let's see if you can beat the computer.");

while (true) {
  const playerInput: string = prompt("Choose rock, paper, or scissors (q to quit): ").toLowerCase();
  
  if (playerInput === "q") {
    console.log("\nThanks for playing Rock Paper Scissors!");
    console.log(`Final Score → Wins: ${wins} | Draws: ${draws} | Losses: ${losses}`);
    console.log("Goodbye and see you next time!");
    break;
  }

  // validate input
  if (!["rock", "paper", "scissors"].includes(playerInput)) {
    console.log("Oops! Please enter a valid choice (rock, paper, or scissors).");
    continue;
  }

  const playerChoice = playerInput as Choice;
  const choices: Choice[] = ["rock", "paper", "scissors"];
  const computerChoice: Choice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`\nYou chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("It's a draw this round!");
    draws++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win this round!");
    wins++;
  } else {
    console.log("You lose this round!");
    losses++;
  }

  console.log(`Score → Wins: ${wins} | Draws: ${draws} | Losses: ${losses}\n`);
}
