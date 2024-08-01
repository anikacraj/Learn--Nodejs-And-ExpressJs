const fs =require('fs');
//console.log(fs);
fs.writeFile('demo1.text','My Name Is Anik .', (err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});

fs.appendFile('demo1.text','I am Student', (err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});

fs.readFile('demo.txt' ,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

fs.rename('demo1.text','demo.txt', (err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});

// fs.unlink('demo.txt', (err)=>{

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("successful");
//     }
// });
 //fs.exists('demo.txt', (err)=>{

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("successful");
//     }
// });