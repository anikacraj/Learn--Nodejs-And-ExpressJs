const path = require('path');

exports.getTriangle =(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/triangle.html'));
}
exports.postTriangle = (req,res)=>{
    const {height,width} =req.body;
    const r =0.5* height*width;
    res.send(`<h1>area of Triangle ${r}</h1>`);
}