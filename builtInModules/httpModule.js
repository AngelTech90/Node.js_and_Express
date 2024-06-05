const http = require('http'); 

//*createServer() method:

/*This method let us works a require that we'll be the information that we'll receive to our server and response that we'll be the parameter that our server we'll return: */

const server = http.createServer((req,res) => {

    res.write('Server running');//*write function write in our work enviroment, just like "echo" in php.

    res.end()//*Here we finish our server request

})

//*Server is an created object in Node.js that let us works with different methods:

//*listen method:
/* This method receive for first param the port number were we'll locate our server*/

server.listen(5000);