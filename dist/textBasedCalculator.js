"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function getNumber(numberString) {
    while (true) {
        const input = prompt("Enter Number " + numberString + ": ");
        const number = parseFloat(input);
        if (isNaN(number)) {
            console.log("Enter a valid number");
        }
        else {
            return number;
        }
    }
}
const number1 = getNumber("One");
const number2 = getNumber("Two");
const operator = prompt("Enter Sign (+, -, *, /): ");
let result;
let valid = true;
switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if (number2 === 0) {
            console.log("Zero Division Error");
            valid = false;
        }
        else {
            result = number1 / number2;
        }
        break;
    default:
        console.log("Invalid input.. Try Again");
        valid = false;
        break;
}
if (valid && result !== undefined) {
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
