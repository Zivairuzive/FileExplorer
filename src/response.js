
const handler = (request, response)=>{
    console.log(request);
    response.writeHead(200, {"Content-Type":"application/json"});
    response.end(JSON.stringify({
        data: "Hello World",
    }));
}


module.exports = handler; 