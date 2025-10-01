"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

const prompt_sync_1 = __importDefault(require("prompt-sync"));
const fs_1 = __importDefault(require("fs"));

const prompt = (0, prompt_sync_1.default)();

// Load questions from JSON file
function loadQuestions() {
    try {
        const data = fs_1.default.readFileSync("questions.json", "utf8");
        const questions = JSON.parse(data).questions;
        return questions;
    } catch (e) {
        console.log("Error occurred loading file", e);
        return [];
    }
}

// Get random questions
function getRandomQuestions(questions, numQuestions) {
    if (numQuestions > questions.length) {
        numQuestions = questions.length;
    }
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

// Ask a single question
function askQuestion(question) {
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

// Main quiz flow
const numQuestionsInput = prompt("Enter the number of questions: ");
const numQuestions = parseInt(numQuestionsInput);

if (isNaN(numQuestions) || numQuestions <= 0) {
    console.log("Invalid number of questions");
    process.exit(1);
}

const questions = loadQuestions();
const randomQuestions = getRandomQuestions(questions, numQuestions);

let correct = 0;
const startTime = Date.now();

for (const question of randomQuestions) {
    const isCorrect = askQuestion(question);
    console.log();
    if (isCorrect) correct++;
}

const totalTime = Date.now() - startTime;

console.log("Correct:", correct);
console.log("Time:", Math.round(totalTime / 1000) + "s");
console.log("Score:", Math.round((correct / numQuestions) * 100) + "%");
