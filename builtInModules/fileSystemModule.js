//*Here's our file system built-in module:
const fs = require('fs');


//*Once of the methods of this modules is the "read" and "write" file sync, so we can destructure the methods of the module for use it:

const {readFileSync, writeFileSync} = require('fs');
const {readFile, writeFile } = require('fs');

//*Here we are reading the text inside the files in the path of the first param:
const osModule = readFileSync('./osModule.js', 'utf-8');
const pathModule = readFileSync('./pathModule.js', 'utf-8');


console.log(osModule);
console.log(pathModule);


//*And we can write the text in second param with "writeFileSync()" method inside the file selected in the path inside the first param, and for prevent have problems overwriting our files, we can use a third param that works with a object with "flag" propertie that have the value "a":

writeFileSync('./osModule.js','//Little prove of text', {flag:'a'});
writeFileSync('./pathModule.js', '//Little prove of text',{flag:'a'});


//*At the moment that we use write or read file functions we can get in our third parameter a callback function that let us work with our file content value any any erro that we could get:


readFile('./pathModule.js','utf-8',(err,data) => {

    //*Here we check if we have some error:
    if(err){

        console.log(err);
        return;//*return in for stop our code flow

    }

    const firstData = data;

    console.log(firstData);


    //*We can read more files using the read function inside other too:
    readFile('./osModule.js','utf8',(err,data) => {

        //*Here we show our errors:
        if(err){
            
            console.log(err);
            return;

        }
        
        const secondData = data;

        console.log(secondData);

    });

})


//*With write files function we can get like data the value that we'll to write in our file:

writeFile('./osModule.js','//Culito',{flag:'a'},(err,result)=>{

    if(err){

        console.log(err);
        return;

    }

    const newComment = result;

    console.log(newComment);

})