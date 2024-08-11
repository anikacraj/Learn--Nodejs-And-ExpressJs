const express = require("express");

const app = express();
const router = require("./Router/home.router")
app.use(router);
// ----multer setup---------


module.exports =app;