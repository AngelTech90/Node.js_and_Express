This is the start of my traveling od this course:

GLOBALS OBJECTS IN NODE:

__dirname : This object contains the name of the path were we are currently working.

__filename: This object contains the name of the file we we are currently working:

require: This is the function for consume and exports our ES modules.

module:  This object contains the module of the currently file were we are working for.

process: This object contains the info about were we are executing our program.


Modules:

In every sigle JavaScript file we have the global object "module", well this an object that give us some interesting properties, in that properties we have "exports".

The "exports" propertie let use a "require()" our module and then we can use the information of that required program to work with that information.


At the moment that we define a module.exports we can access directly with a require in other part of our program  like an object.

this object will contains in their properties the info that we put inside the export object

We can define directly new properties in the module export object too.
 

another thing that is very very important is that the a "require()" could actually consume and run the total code file that we select without using a module export


A very interesting and useful thing is that we can destructure objects properties in javaScript, and we can do the same with the modules:

For example we export in a module object 2 different vars called "Jose" and "Angelo", using this Js feature we can consume the vars using a require destructuring our object:


const {Jose, Angelo} = require('./exampleModule');


NODE BUILT-IN MODULES:

Every single method here have a loot of methods and other features that we can learn seeing the node.js documentation:


We can consume every single built-in module with a require with the difference that we don't need to access it from an specific path, we can write the keyword directly.


OS module:  This module contain all the things releated with our operative system.

for consume the module we use "require('os')".


--We stop at 1:41:51
