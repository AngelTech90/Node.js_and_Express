//*Prove of ES modules:

let newMessage = require('./moduleOfNotes')

const name = 'Angel Molina';
const age = 17;


//*Here we define what info we use with the modules
module.exports = {name, age};

console.log(newMessage.message);