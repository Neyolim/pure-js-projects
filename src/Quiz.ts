import promptSync from "prompt-sync";  
const prompt = promptSync();

console.log("Welcome to Computer Hardware Quiz!");

let correctAnswers: number = 0;
const totalQuestions: number = 3;

const correctAnswer1: string = "CPU";
const answer1: string = prompt("What is the brain of the computer ? : ");
if (answer1.trim().toUpperCase() === correctAnswer1.toUpperCase()) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!!");
}

const correctAnswer2: string = "3090ti";
const answer2: string = prompt("What is better a 3090ti or a 4060 ?: ");
if (answer2.trim().toLowerCase() === correctAnswer2.toLowerCase()) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!!");
}

const correctAnswer3: string = "16GB";
const answer3: string = prompt("What is recommended amount of RAM in 2025 ?: ");
if (answer3.trim().toUpperCase() === correctAnswer3.toUpperCase()) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!!");
}

const percent: number = Math.round((correctAnswers / totalQuestions) * 100);

console.log(`You got ${correctAnswers} questions correct!!!`);
console.log(`You got ${percent}% !!!`);
