const http =require('http');
const fs =require('fs');
const port =4000;
const hostname = '127.0.0.1';

const server=http.createServer((req,res)=>{
 
    const handleRoute =(statusCode,htmlFile)=>{
        fs.readFile(htmlFile,(err,data)=>{
            res.writeHead(statusCode,{"content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }

   if(req.url ==='/'){
handleRoute(200,"./views/home.html");
   }
   else if(req.url === '/about'){
    handleRoute(200,"./views/about.html");
   }
   else if(req.url === '/contact'){
    handleRoute(200,"./views/contact.html");
    }
   else{
    res.end("404 not found");
   }

})
server.listen(port ,hostname, () => {
    console.log(`location at http://${hostname}:${port}`);
});

