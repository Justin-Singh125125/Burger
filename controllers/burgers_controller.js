var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');


//on load, grab every burger from the database
router.get("/", function (req, res) {

    burger.selectAll(function (data) {
        console.log(data);
        res.render("index", ({ burgers: data }));
    })


})
router.post("/", function (req, res) {

})
router.put("/", function (req, res) {

})
router.delete("/", function (req, res) {

})


module.exports = router;