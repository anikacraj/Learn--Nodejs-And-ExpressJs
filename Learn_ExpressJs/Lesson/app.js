const express =require('express');
const app =express();
const userRoutes =require('./Routes/route.user');

app.use(userRoutes);
// app.use("/api/user",userRoutes);


app.use("/c", (req,res)=>{
    res.sendFile(__dirname + "/views/contact.html");
})

app.use((req,res)=>{
    res.send("404");
});
// app.post("/",(req,res)=>{
//     res.send("This is a post Req")
// });

// app.put("/",(req,res)=>{
//     res.send("This is a put Req")
// });
// app.delete("/",(req,res)=>{
//     res.send("This is a delete Req")
// });



module.exports =app;