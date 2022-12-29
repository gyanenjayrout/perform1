const express = require('express');
var router = express.Router();
const app = express();
var db = require('../db')


// GET users listing
router.get('/',function(req, res, next){
    res.json({name: "Suryakanta Nayak"});
    // res.send("Router is working");
});

module.exports = router ;