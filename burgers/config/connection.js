var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_base"


});
connection.connect(function (err) {

    if (err) {

        throw(err)


    } else {

        console.log("Listening on Port " + port);
    }


});

module.exports = connection;