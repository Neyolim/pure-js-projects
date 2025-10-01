import PromptSync from "prompt-sync";
const prompt = PromptSync();

// 1. Define a Contact type using an interface
interface Contact {
  name: string;
  email: string;
}

// 2. Strongly type the contacts array
const contacts: Contact[] = [];

// 3. Print menu
function printInfo(): void {
  console.log("Contact Management System");
  console.log("---------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View Contacts");
  console.log("4. Search Contacts");
  console.log("5. Exit");
}

printInfo();

// 4. Add Contact
function addContact(): void {
  const name: string = prompt("Enter name: ");
  const email: string = prompt("Enter email: ");
  const contact: Contact = { name, email };
  contacts.push(contact);
  console.log("Contact added successfully");
}

// 5. Delete Contact
function deleteContact(): void {
  console.log("Contact IDs:");
  for (let i = 0; i < contacts.length; i++) {
    console.log(`${i + 1}: ${contacts[i].name}`);
  }

  const number: number = parseInt(prompt("Enter an ID: "));
  if (isNaN(number) || number < 1 || number > contacts.length) {
    console.log("Invalid contact ID");
    return;
  }

  contacts.splice(number - 1, 1);
  console.log("Contact deleted!");
}

// 6. View Contacts
function viewContact(list: Contact[]): void {
  if (list.length === 0) {
    console.log("No contacts found.");
    return;
  }
  for (let contact of list) {
    console.log("###########");
    console.log("Name:", contact.name);
    console.log("Email:", contact.email);
  }
}

// 7. Search Contact
function searchContact(): void {
  const searchString: string = prompt("Search: ").toLowerCase();
  const results: Contact[] = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchString)
  );
  viewContact(results);
}

// 8. Main Loop
let keepGoing: boolean = true;
while (keepGoing) {
  const number: string = prompt("Enter a number (1-5): ");
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
      console.log("Invalid choice, please select between 1-5");
  }
}
