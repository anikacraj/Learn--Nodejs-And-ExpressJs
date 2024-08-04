const {totalmem,freemem} = require('os');

// console.log(os);
// console.log(os. userInfo());
// console.log(os. version());
// console.log(os. hostname());
console.log(totalmem());
console.log(freemem());
// ---------------path------------------
const path = require('path');
// const extensionName =path.extname("index.html");
// console.log(extensionName);
const joinName = path.join(__dirname + "/../Lesson1");
// const joinName = path.join(__dirname + "/Lesson1");
console.log(joinName);