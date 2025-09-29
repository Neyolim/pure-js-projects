import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("Welcome to the Game!");

// Target number
const target: number = Math.round(Math.random() * 100);

let guesses: number = 0;

while (true) {
  const input: string = prompt("Guess a number (1-100): ");
  const guess: number = Number(input); // convert string → number
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
