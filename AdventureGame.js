const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log("Hello", name + ", welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.trim().toLowerCase() === "yes") {
    const leftOrRight = prompt("You entered a maze. Do you want to go left or right? ");

    if (leftOrRight.trim().toLowerCase() === "left") {
        console.log("You go left and see a bridge...");
        const cross = prompt("Do you want to cross the bridge? ");
        
        if (cross.trim().toLowerCase() === "yes") {
            console.log("You cross, but the bridge was weak and broke. You fell. You lost.");
        } else {
            console.log("Good choice... You win!");
        }

    } else if (leftOrRight.trim().toLowerCase() === "right") {
        console.log("You go right and fall off a cliff. You lost.");
    } else {
        console.log("You stand still and get eaten by spiders. Invalid move!");
    }

} else if (shouldWePlay.trim().toLowerCase() === "no") {
    console.log("Okay :( Maybe next time.");
} else {
    console.log("Invalid input...");
}


/* Here trim is used to avoid unnecessary spaces */