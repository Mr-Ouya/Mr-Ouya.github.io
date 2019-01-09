var mySql = require('mysql');
var connection = mySql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'bamazon_db'

})

var bamazonConnect = function () {
    connection.connect()
}
module.exports = {
    connection:connection,

    bamazonConnect:bamazonConnect
}