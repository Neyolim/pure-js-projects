import PromptSync from "prompt-sync";
import fs from "fs";

const prompt = PromptSync();

// 1. Define the structure of a question
interface Question {
  question: string;
  options: string[];
  answer: string;
}

// 2. Load questions from JSON file
function loadQuestions(): Question[] {
  try {
    const data = fs.readFileSync("questions.json", "utf8");
    const questions: Question[] = JSON.parse(data).questions;
    return questions;
  } catch (e) {
    console.log("Error occurred loading file", e);
    return [];
  }
}

// 3. Get random questions
function getRandomQuestions(questions: Question[], numQuestions: number): Question[] {
  if (numQuestions > questions.length) {
    numQuestions = questions.length;
  }

  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
}

// 4. Ask a single question
function askQuestion(question: Question): boolean {
  console.log(question.question);

  question.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  const choice = parseInt(prompt("Enter the number: "));
  if (isNaN(choice) || choice < 1 || choice > question.options.length) {
    console.log("Invalid. Incorrect choice");
    return false;
  }

  const choiceValue = question.options[choice - 1];
  return choiceValue === question.answer;
}

// 5. Main quiz flow
const numQuestionsInput: string = prompt("Enter the number of questions: ");
const numQuestions: number = parseInt(numQuestionsInput);

if (isNaN(numQuestions) || numQuestions <= 0) {
  console.log("Invalid number of questions");
  process.exit(1);
}

const questions: Question[] = loadQuestions();
const randomQuestions: Question[] = getRandomQuestions(questions, numQuestions);

let correct: number = 0;
const startTime: number = Date.now();

for (const question of randomQuestions) {
  const isCorrect = askQuestion(question);
  console.log();
  if (isCorrect) correct++;
}

const totalTime: number = Date.now() - startTime;

console.log("Correct:", correct);
console.log("Time:", Math.round(totalTime / 1000) + "s");
console.log("Score:", Math.round((correct / numQuestions) * 100) + "%");
