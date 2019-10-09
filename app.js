const http = require('http')

http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello world');
}).listen(3000);

console.log('server running at http://127.0.0.1:3000/');
