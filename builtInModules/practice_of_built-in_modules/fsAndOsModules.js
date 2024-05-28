
//*Here we have an example of how we can use the destructuring of objects in JS withh our built-in modules:
const {version, release, totalmem, freemem } = require('os');

console.log(version());
console.log(release());
console.log(totalmem());
console.log(freemem());


const {readFileSync, writeFileSync} = require('fs');


//*Here we read the notes md file of theis course:
console.log(readFileSync('C:/Users/Angel/OneDrive/Escritorio/GitHub_repos/Node.js_and_Express_FreeCodeCamp/Course_Notes.md', 'utf-8'));

//*Here we read the js notes files of this course:
console.log(readFileSync('C:/Users/Angel/OneDrive/Escritorio/GitHub_repos/Node.js_and_Express_FreeCodeCamp/mainNotes.js','utf-8'));
