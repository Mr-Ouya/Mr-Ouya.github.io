var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        var hbsObject = {
            burgers: data
        }

        //console.log(hbsObject);
        res.render("index", hbsObject);
    })

})

router.post("/api/burgers", function (req, res) {

    burger.create([
        "burger_name",
    ], [
        req.body
    ], function (result) {

        res.json({
            burgers: result.insertId
        })
    })

})

router.put("/api/burgers/:id", function (req, res) {

    burger.update({

        devoured: rew.params.devoured

    }, condition, function (result) {

        if (result.changeRows === 0) {
            return res.status(404).end()
        } else {
            res.status(202).end()
        }
    })


})




module.exports = router;