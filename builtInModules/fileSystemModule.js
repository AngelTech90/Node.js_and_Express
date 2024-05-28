//*Here's our file system built-in module:
const fs = require('fs');


//*Once of the methods of this modules is the "read" and "write" file sync, so we can destructure the methods of the module for use it:

const {readFileSync, writeFileSync} = require('fs');

//*Here we are reading the text inside the files in the path of the first param:
const osModule = readFileSync('./osModule.js', 'utf-8');
const pathModule = readFileSync('./pathModule.js', 'utf-8');


console.log(osModule);
console.log(pathModule);


//*And we can write the text in second param with "writeFileSync()" method inside the file selected in the path inside the first param, and for prevent have problems overwriting our files, we can use a third param that works with a object with "flag" propertie that have the value "a":

writeFileSync('./osModule.js','//Little prove of text', {flag:'a'});
writeFileSync('./pathModule.js', '//Little prove of text',{flag:'a'});