// --------------[ 1. Importing Required Module ]--------------
// readline is a built-in Node.js module for taking input from the console.
import * as readline from "readline";

// --------------[ 2. Creating Interface for Input/Output ]--------------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 Mini AI Chatbot Activated! (type 'bye' to exit)\n");

// --------------[ 3. Defining Types & Predefined Chatbot Responses ]--------------

// Define the structure of a response
interface ChatResponse {
  keywords: string[];
  reply: string;
}

// This is an array of objects. Each object has:
// - keywords: words that user might type
// - reply: the chatbot's response
const responses: ChatResponse[] = [
  { keywords: ["hello", "hi", "hey"], reply: "Hey there! 👋" },
  {
    keywords: ["how are you", "how's it going"],
    reply: "I'm just a bunch of code, but feeling awesome! 😎",
  },
  {
    keywords: ["name"],
    reply: "I go by 'MiniBot', your personal console buddy 🤖",
  },
  {
    keywords: ["joke", "funny"],
    reply: "Why do programmers hate nature? Too many bugs! 🐞",
  },
  {
    keywords: ["bye", "exit"],
    reply: "Goodbye! See you soon! 👋",
  },
];

// --------------[ 4. Function to Process User Input ]--------------
// This checks the message for any keyword match and returns a response.
function getResponse(input: string): string {
  const normalized = input.toLowerCase().trim();
  let reply = "Hmm... I don't know how to respond to that 🤔";

  // Loop through responses
  responses.forEach((item: ChatResponse) => {
    item.keywords.forEach((word: string) => {
      if (normalized.includes(word)) {
        reply = item.reply;
      }
    });
  });

  return reply;
}

// --------------[ 5. Chat Loop Function ]--------------
// Keeps asking the user for input until they type 'bye'
function chat(): void {
  rl.question("You: ", (message: string) => {
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

/*
 Concepts Covered:
 - Variables: const, let
 - Data types: strings, arrays, objects, custom interfaces
 - Loops: forEach, nested loops
 - Conditionals: if, includes() checks
 - Functions: parameters, return values, recursion
 - Scope: global vs inside functions
 - String methods: toLowerCase(), trim(), includes()
 - Array methods: forEach
 - Modular thinking: breaking code into reusable parts
*/
