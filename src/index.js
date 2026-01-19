const http = require('http');

let server = http.createServer((req,res)=>{
    console.log("Server is running on http://localhost:3030")
    res.writeHead(200,{'content-type':'text-plain'});
    res.end('Hello everyone');
});
server.listen(3030)