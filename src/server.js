//class for creating a js server 

const http = require("http");



class Server {
    constructor(hostname, port, handler){
        this.port = port;
        this.hostname = hostname;
        this.handler = handler
        this.server = http.createServer(handler)
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`listening on: ${this.hostname}:${this.port}`);
        })
    }

}

module.exports = Server;