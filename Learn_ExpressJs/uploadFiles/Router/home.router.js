const express = require("express");
const { getHome, postHome } = require("../Controllers/home.controllers");
const router = express.Router();

router.get("/",getHome);
router.post("/",postHome);

module.exports =router;