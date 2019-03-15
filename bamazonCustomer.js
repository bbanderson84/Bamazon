var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({

    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Spartan1026!",
    database: "bamazon_db"
  });
  
  connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected as id " + connection.threadId);
      start();
  });

function start() {
var query = "SELECT item_id, product_name, price FROM products";
connection.query(query, function(error, response) {
    for (var i = 0; i < response.length; i++) {
        console.log("Item Id: " + response[i].item_id + " || Product Name: " + response[i].product_name  + " || Price: " + response[i].price);
    }

    itemSearch();
    });
  }

  function itemSearch() {
        // if (err) throw err;
      inquirer
      .prompt([
        {
          name: "productSearch",
          type: "input",
          message: "What is the ID # of the item you would like to purchase?",
          validate: function(value){
              if (isNaN(value) === false) {
                  return true;
              }

              return false;
          }
        },
        {
          name: "productQuantity",
          type: "input",
          message: "How many items of this product would you like to purchase?",
        }
    ])
    .then(function(answer){

        connection.query("SELECT * FROM products where item_id=?", answer.productSearch, function (error, response){

        for (var i = 0; i < response.length; i++){

            if (answer.productQuantity > response[i].stock_quantity){

                console.log("\n--------------------------" + "\nSorry! We do not have that amount of that item in stock!" + "\n--------------------------");

                start();

            } else {

            }
        }
        // var query = "SELECT item_id, stock_quantity FROM products";
        // connection.query(query, function (error, response){
        // var searchedItem;
        // for (var i = 0; i < response.length; i++) {
        //     if (response[i].item_id === answer.productSearch) {
        //         searchedItem = response[i];
        //         console.log(searchedItem);
        //         }
        //     }

        // if (searchedItem.stock_quantity > parseInt(answer.productQuantity)) {
        //         console.log("IT WORKS");
        //         // // connection.query(
        //         //     // "UPDATE products SET ? WHERE ?",

        //         // )
        //     }
        });

    });
}
    
