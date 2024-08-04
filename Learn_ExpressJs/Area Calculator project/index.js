require('dotenv').config();
const app =require('./app');
const port =process.env.port||5001;

// 

// app.use(middleware);
// app.get("/",middleware,(req,res)=>{
//     console.log(req.currentTime);
//     res.send("hello use middlewaee");
// });

app.listen( port, ()=>{  console.log(`location at http://localhost:${port}`);
})