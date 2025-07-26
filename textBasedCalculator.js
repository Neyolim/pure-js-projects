const prompt = require("prompt-sync")();

function getNumber(numberString) {
  while (true) {
    const number = parseFloat(prompt("Enter Number" + numberString + ": "));
    if (isNaN(number)) {
      console.log("Enter a valid number");
    } else {
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
      console.log("Zero Divison Error");
    }
    valid = false;
    result = number1 / number2;
    break;

  default:
    console.log("Invalid input.. Try Again");
    valid = false;
    break;
}

if (valid) console.log(number1, operator, number2, "=", result);


/* 

-> Usage of Switch 
-> Usage of parseFloat 
-> Usage of   while loop 
-> Usage of isNaN 

*/