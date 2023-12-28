let url = require("url")
const {SPACE, FAVICON, NO_SPACE, STATIC_FOLDER_NAME} = require('./constant');
const path = require("path");
const fs = require("fs");



var decode_url;

function _replace(pattern, string, replacement){
    var re = new RegExp(pattern, 'g')
    return string.replace(re,replacement)
}

const handler = (request, response)=>{
    response.writeHead(200, {"Content-Type":"text/html"});
    let pathname = request.url;

    //static BaseFile for file on the server
    const BaseStaticPath = path.join(__dirname,'..',STATIC_FOLDER_NAME);


    // exclude favicon ico from the returned path
    if (pathname == FAVICON){
        return false }

    // uriComponent replace with space 
    // wrapper _replace remove those spaces
    decode_url = _replace(SPACE,decodeURIComponent(pathname),NO_SPACE);
    // full static file rom url; 
    const FullPathName = path.join(BaseStaticPath, decode_url);
    // check if exist 
    let stat;
    if(!fs.existsSync(FullPathName)){
        response.write('404: File Not Found\n')
        response.end()
        return false;
        
    }else{
        try{
            stat = fs.lstatSync(FullPathName)
        }catch(er){
            console.log(`lstatSync Error:  ${err}`)
        }
    }

    // check if path is a directory
    if(stat.isDirectory()){
        let data = fs.readFileSync(
            path.join(
                BaseStaticPath, 'project_files/index.html')
                , 'utf-8')
        response.statusCode = 200;
        response.write(data);
        response.end()
    }
}


module.exports = handler; 