// create our app 
const http = require('./src/server')
const handler = require('./src/response')

const hostname = process.env.host || "http://localhost";
const port = process.env.port || 9000 ;

//create the server 
const server = new http(hostname, port, handler)

server.listen();
