"use strict";

var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });

var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0; i < k.length; i++) {
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
      }
      __setModuleDefault(result, mod);
      return result;
    };
  })();

Object.defineProperty(exports, "__esModule", { value: true });

// --------------[ 1. Importing Required Module ]--------------
// readline is a built-in Node.js module for taking input from the console.
const readline = __importStar(require("readline"));

// --------------[ 2. Creating Interface for Input/Output ]--------------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 Mini AI Chatbot Activated! (type 'bye' to exit)\n");

// --------------[ 3. Predefined Responses ]--------------
const responses = [
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
function getResponse(input) {
  const normalized = input.toLowerCase().trim();
  let reply = "Hmm... I don't know how to respond to that 🤔";

  responses.forEach((item) => {
    item.keywords.forEach((word) => {
      if (normalized.includes(word)) {
        reply = item.reply;
      }
    });
  });

  return reply;
}

// --------------[ 5. Chat Loop Function ]--------------
function chat() {
  rl.question("You: ", (message) => {
    if (message.toLowerCase().includes("bye")) {
      console.log("Bot: Goodbye! 👋");
      rl.close();
      return;
    }
    console.log(`Bot: ${getResponse(message)}`);
    chat(); // recursive loop
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
