const app =require('./app');
const port =5000;
const bodyParser =require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//using postman
// app.post("/user",(req,res)=>{
//     const name =req.body.nam;
    
//     res.send(`name ${name}`);
// });


app.listen(port,()=>{
    console.log(`location at http://localhost:${port}`);
});
