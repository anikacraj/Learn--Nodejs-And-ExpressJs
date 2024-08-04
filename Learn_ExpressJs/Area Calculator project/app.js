const express =require('express');
const app =express();
const userRoutes =require('./Routes/home.user');

app.use(userRoutes);
//midleware error
// app.use((req,res,next)=>{
//     res.send("404 bad url");
// })
// app.use((err,req,res,next)=>{
//   res.status(500).send("something broke!");
// })

module.exports =app;