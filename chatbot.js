// --------------[ 1. Importing Required Module ]--------------
// readline is a built-in Node.js module for taking input from the console.
const readline = require("readline");

// --------------[ 2. Creating Interface for Input/Output ]--------------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🤖 Mini AI Chatbot Activated! (type 'bye' to exit)\n");

// --------------[ 3. Predefined Chatbot Responses ]--------------
// This is an array of objects. Each object has:
// - keywords: words that user might type
// - reply: the chatbot's response
const responses = [
  { keywords: ["hello", "hi", "hey"], reply: "Hey there! 👋" },
  { keywords: ["how are you", "how's it going"], reply: "I'm just a bunch of code, but feeling awesome! 😎" },
  { keywords: ["name"], reply: "I go by 'MiniBot', your personal console buddy 🤖" },
  { keywords: ["joke", "funny"], reply: "Why do programmers hate nature? Too many bugs! 🐞" },
  { keywords: ["bye", "exit"], reply: "Goodbye! See you soon! 👋" }
];

// --------------[ 4. Function to Process User Input ]--------------
// This checks the message for any keyword match and returns a response.
function getResponse(input) {
  input = input.toLowerCase().trim(); // normalize input
  let reply = "Hmm... I don't know how to respond to that 🤔";

  // Loop through responses
  responses.forEach(item => {
    item.keywords.forEach(word => {
      if (input.includes(word)) {
        reply = item.reply;
      }
    });
  });

  return reply;
}

// --------------[ 5. Chat Loop Function ]--------------
// Keeps asking the user for input until they type 'bye'
function chat() {
  rl.question("You: ", (message) => {
    if (message.toLowerCase().includes("bye")) {
      console.log("Bot: Goodbye! 👋");
      rl.close();
      return;
    }

    console.log(`Bot: ${getResponse(message)}`);
    chat(); // call itself again for next message
  });
}

// --------------[ 6. Start the Chat ]--------------
chat();
