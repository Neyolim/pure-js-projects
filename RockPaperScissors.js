const prompt = require("prompt-sync")();

let wins = 0;
let draws = 0;
let losses = 0;

console.log("Welcome to Rock Paper Scissors! Let's see if you can beat the computer.");

while (true) {
  let playerChoice = prompt(" Choose rock, paper, or scissors (q to quit): ").toLowerCase();

  if (playerChoice === "q") {
    console.log("\n Thanks for playing Rock Paper Scissors!");
    console.log(` Final Score → Wins: ${wins} | Draws: ${draws} | Losses: ${losses}`);
    console.log("Goodbye and see you next time! ");
    break;
  }

  if (!["rock", "paper", "scissors"].includes(playerChoice)) {
    console.log(" Oops! Please enter a valid choice (rock, paper, or scissors).");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log(`\n You chose: ${playerChoice}`);
  console.log(` Computer chose: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("It's a draw this round!");
    draws++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(" You win this round!");
    wins++;
  } else {
    console.log(" You lose this round!");
    losses++;
  }

  console.log(` Score → Wins: ${wins} | Draws: ${draws} | Losses: ${losses}\n`);
}
