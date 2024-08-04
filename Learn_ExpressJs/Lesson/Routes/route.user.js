const express = require('express');
const router= express.Router();

router.get("/",(req,res)=>{
    res.send("This is a get Request")
});

// http request with query parameter
router.get("/about",(req,res)=>{
   const {nam,id} = req.query
    res.send(`<h1>Student name is :${nam}
        </br> Student Id :${id}</h1>`);
})

//http request with route parameter
router.get("/userId/:no/userAge/:age ", (req,res) =>{
    const{no,age} =req.params;
    res.send(`<h2> User Id ${no} </br> USer age ${age}</h2>`)
});

//http request with header parameter
router.get("/header",(req,res)=>{
    const {num,namme}=req.header;
    res.send(`<h2> User Id ${num} </br> USer age ${namme}</h2>`)
})
const bodyParser =require('body-parser');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

// send and receive form data

router.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
});
router.post("/register",(req,res)=>{
   const{fullname,age}=req.body;
   res.send(`Name is :${fullname} </br>
    age:${age}`);
})
//regular expression in express routing wild card
// router.get("/stdId/:id ([0-9]+)",(req,res)=>{
//     res.send(`std id :${id}`)});

// router.use("*",(req,res)=>{
//     res.status(404).send({
//         message:"not a valid route",
//     })
// })

module.exports =router;