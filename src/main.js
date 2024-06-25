const eventEmitter = require('node:events');

const emitter = new eventEmitter();

emitter.on("book ticket", (name, destination) => {
  console.log(`Hi ${name}, A ticket to ${destination} was booked successfully`);
});

emitter.on("Print ticket", (name) => {
  console.log(`Hi ${name}, Please Print ticket here`);
});

console.log("Welcome User");
console.log()
