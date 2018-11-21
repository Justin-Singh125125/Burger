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
router.post("/add-burger", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.status(200).end();
    })
})
router.put("/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})
router.delete("/delete/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, function (result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})


module.exports = router;