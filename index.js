const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log(await listContacts());
      break;
    case "get":
      console.log(await getContactById(id));
      break;
    case "add":
      console.log(await addContact(name, email, phone));
      break;
    case "remove":
      console.log(await removeContact(id));
      break;
    default:
      console.log("\x1B[31m Unknown action type!");
  }
}
invokeAction(options);
