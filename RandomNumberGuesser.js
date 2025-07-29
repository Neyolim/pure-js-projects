const prompt = require("prompt-sync")();

console.log("Welcome to the Game!");

const target = Math.round(Math.random() * 100);

// console.log(target); (used for testing)


let guesses = 0; 
while (true) {
  let guess = Number(prompt("Guess a number (1-100): "));
  guesses++;
  
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
