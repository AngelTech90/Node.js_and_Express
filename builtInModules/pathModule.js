//*Here we'll work with the built in module "path":

const path = require('path');

//*Here we can see the separator of the current path using "sep propertie":
console.log(path.sep);

//*We abstract the path of a specific element we have the "join()" method:
const moduleProvePath = path.join('../moduleOfNotes.js');

console.log(`Here we have our module prove path: ${moduleProvePath}`);

//*For acces to last element of path we have "basename()" method:

console.log(`${path.basename(moduleProvePath)}`);

//*We can get the absolute path from a file with "resolve()" method, this is useful for don't have troubles getting the correct path for use a module or a specific file
const absolutePath = path.resolve('../moduleOfNotes.js');

console.log(`Here's yout absolute path of your prove module for the course notes: ${absolutePath}`)