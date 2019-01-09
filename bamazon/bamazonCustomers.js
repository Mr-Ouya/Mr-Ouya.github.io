var connects = require('./connection.js');
var columnify = require('columnify');

var connection = connects.connection;

connects.bamazonConnect();



connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log(columnify(results,  {
        columnSplitter: ' | '
      }));
      questions();
  });

function questions() {
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: 'id',
        message: 'Which item do you want to buy(ITEM_ID)'
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'How many units would you like to buy?'
    }
  ])
  .then(answers => {
    var userItem_id = answers.id;
    var quantity = answers.quantity;
    connection.query('SELECT * FROM products WHERE ITEM_ID =' + userItem_id, function (error, results, fields) {
        if (results[0].stock_quantity < quantity) {
            console.log('Not enough stock');
        } else {
            console.log("Here you go good sir");
            //modify stock_quantity values in server since we know there is enough stock
            connection.query('UPDATE products SET STOCK_QUANTITY = (STOCK_QUANTITY - ?) WHERE ITEM_ID = ?', [quantity, userItem_id],function (error, results, fields) {
                
                if (error) throw error;
                
              
                });
        }
    })
});
}