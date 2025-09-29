"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();

console.log("Welcome to the Game!");

// Target number
const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
    const input = prompt("Guess a number (1-100): ");
    const guess = Number(input); // convert string → number
    guesses++;

    if (isNaN(guess)) {
        console.log("⚠️ Please enter a valid number.");
        continue;
    }

    if (guess > target) {
        console.log("Your guess is too high !!");
    } else if (guess < target) {
        console.log("Your guess is too low !!");
    } else {
        console.log("🎉 Congratulations !!! You got it correct.");
        break;
    }
}

console.log(`You got it correct in ${guesses} tries.`);
