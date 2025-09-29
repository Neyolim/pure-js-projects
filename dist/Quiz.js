"use strict";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();

console.log("Welcome to Computer Hardware Quiz!");

let correctAnswers = 0;
const totalQuestions = 3;

// Question 1
const correctAnswer1 = "CPU";
const answer1 = prompt("What is the brain of the computer ? : ");
if (answer1.trim().toUpperCase() === correctAnswer1.toUpperCase()) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!!");
}

// Question 2
const correctAnswer2 = "3090ti";
const answer2 = prompt("What is better a 3090ti or a 4060 ?: ");
if (answer2.trim().toLowerCase() === correctAnswer2.toLowerCase()) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!!");
}

// Question 3
const correctAnswer3 = "16GB";
const answer3 = prompt("What is recommended amount of RAM in 2025 ?: ");
if (answer3.trim().toUpperCase() === correctAnswer3.toUpperCase()) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!!");
}

// Final score
const percent = Math.round((correctAnswers / totalQuestions) * 100);
console.log(`You got ${correctAnswers} questions correct!!!`);
console.log(`You got ${percent}% !!!`);
