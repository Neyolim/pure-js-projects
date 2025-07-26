const prompt = require("prompt-sync")();
const contacts = [];

function printInfo() {
  console.log("Contact Management System");
  console.log("---------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View Contacts");
  console.log("4. Search Contacts");
  console.log("5. Exit");
}

printInfo();

function addContact() {
  const name = prompt("Enter name: ");
  const email = prompt("Enter email: ");
  const contact = {
    name: name,
    email: email,
  };
  contacts.push(contact);
  console.log("Contact added successfully");
}

function deleteContact() {}

function viewContact(contacts) {
  for (let contact of contacts) {
    console.log("###########");
    console.log("Name:", contact.name);
    console.log("Email:", contact.email);
  }
}

function searchContact() {}

keepGoing = true;
while (keepGoing) {
  const number = prompt("Enter a number (1-5):");
  switch (number) {
    case "1":
      addContact();
      break;
    case "2":
      deleteContact();
      break;
    case "3":
      viewContact(contacts);
      break;
    case "4":
      searchContact();
      break;
    case "5":
      console.log("Exiting the program");
      keepGoing = false;
      break;

    default:
      break;
  }
}
