//*Here we'll prove the os built-in module:

const os = require('os');

//*Getting information about Operative System version:

console.log(`Here's your operative system version: ${os.version}`);

console.log(`Here's your operative system current version: ${os.version()}`);
console.log(`Here's your operative system current free memory in bytes: ${os.freemem()}`);
console.log(`Here's your operative system current total memory in bytes: ${os.totalmem()}`);
console.log(`Here's your operative system current home directory: ${os.homedir()}`);



