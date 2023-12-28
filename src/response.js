let url = require("url")

var decode_url, build_path='';


function _replace(pattern, string, replacement){
    var re = new RegExp(pattern, 'g')
    return string.replace(re,replacement)
}

const handler = (request, response)=>{
    response.writeHead(200, {"Content-Type":"application/json"});
    let pathname = request.url;

    // exclude favicon ico from the returned path
    if (pathname == '/favicon.ico'){
        return false }
        
    // uriComponent replace with space 
    // wrapper _replace remove those spaces
    decode_url = _replace(' ',decodeURIComponent(pathname),'');

    response.end(JSON.stringify({
        data: "Hello World",
    }));
}


module.exports = handler; 