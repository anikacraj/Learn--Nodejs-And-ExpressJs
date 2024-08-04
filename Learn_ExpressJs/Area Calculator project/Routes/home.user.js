const express = require('express');
const router= express.Router();
const path = require('path');

const bodyParser =require('body-parser');

const { getCircle,postCircle } = require('../Controllers/circle.controllers');
const { getTriangle, postTriangle } = require('../Controllers/triangle.controllers');
const { getHome } = require('../Controllers/home.userControllers');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/",getHome);
router.get("/circle",getCircle);
router.get("/triangle",getTriangle);
router.post("/circle",postCircle);
router.post("/triangle",postTriangle)
module.exports =router