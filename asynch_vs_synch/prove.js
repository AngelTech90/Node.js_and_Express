const {readFile, writeFile, readFileSync, writeFileSync } = require('fs');


//*Synch functions:

/*This types of functios make that our program or our aplication stops for run the functions, and then our program keep going
 */

readFileSync('./prove.js','utf8');


//*Asynch functions:

/*This types of functions let us works and makes task don't depending of the current program flow*/

readFile('./prove.js','utf8');