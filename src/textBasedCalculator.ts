import promptSync from "prompt-sync";

const prompt = promptSync();

function getNumber(numberString: string): number {
  while (true) {
    const input: string = prompt("Enter Number " + numberString + ": ");
    const number: number = parseFloat(input);

    if (isNaN(number)) {
      console.log("Enter a valid number");
    } else {
      return number;
    }
  }
}

const number1: number = getNumber("One");
const number2: number = getNumber("Two");

const operator: string = prompt("Enter Sign (+, -, *, /): ");

let result: number | undefined;
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
    } else {
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
