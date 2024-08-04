const path = require('path');

exports.postCircle =(req,res)=>{
    const radius =req.body.radius;
    const result =3.1416*radius*radius;
    res.send(`<h1>area of Circle ${result}</h1>`);
} 
exports.getCircle =(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/circle.html'));
}