"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let wins = 0;
let draws = 0;
let losses = 0;
console.log("Welcome to Rock Paper Scissors! Let's see if you can beat the computer.");
while (true) {
    const playerInput = prompt("Choose rock, paper, or scissors (q to quit): ").toLowerCase();
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
    const playerChoice = playerInput;
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`\nYou chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("It's a draw this round!");
        draws++;
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")) {
        console.log("You win this round!");
        wins++;
    }
    else {
        console.log("You lose this round!");
        losses++;
    }
    console.log(`Score → Wins: ${wins} | Draws: ${draws} | Losses: ${losses}\n`);
}
