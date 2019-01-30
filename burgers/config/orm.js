var connection = require("../config/connection.js");

var orm = {


    selectAll: function (table, cb) {
//get all info from entire table
        var queryString = "SELECT * FROM " + table + ";";
//query table
        connection.query(queryString, function (err, result) {
//if error, throw. Else get results
            if (err) {
                throw err;

            }
            cb(result);
        })
    },

    insertOne: function (table, cols, cb) {

        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString()
        queryString += ") "
        queryString += "Values ("
        queryString += "?";
        queryString += ") "
        connection.query(queryString, function (err, result) {

            if (err) throw err;

            cb(result)
        })
    },

    updateOne: function (table, objColValue, condition, cb) {

        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objColValue;
        queryString += " WHERE ";
        queryString += condition;

        console.log(querstring);
        connection.query(queryString, function (err, result) {

            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;