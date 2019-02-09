var orm = require("../config/orm.js")
var path = require("fs")
var burger = {

    all: function (call) {
        orm.selectAll("burgers", function (res) {
           
            cb(call);
        })
    },




    create: function (cols, val, call) {
        orm.insertOne("burgers", cols, val, function (res) {
            cb(res);
        })
    },


    update: function (burger, condition, call) {

        orm.updateOne("burgers", condition, function (res) {
            call(res)
        })
    }
};

module.exports = burger;