const http =require('http');
const port=3000;
const hostname = '127.0.0.1'
//status code 
const myServer= http.createServer((req,res) => {
//res.end("Hello It is my First Server");
// res.writeHead(202 ,{'content-type':'text/html'});
// res.write("<h1> Hello </h1>");
// });

res.writeHead(202 ,{'content-type':'text/plain'});
res.write("<h1> Hello </h1>");
res.write("<h1> Hello </h1>");
res.write("<h1> Hello </h1>");
res.end();
});
myServer.listen(port,hostname,()=>{
    console.log(
        `server is running at http://${hostname}:${port}`
    )
})



