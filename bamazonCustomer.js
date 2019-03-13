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
  
  connection.connect(function(error) {
      if (error) throw error;
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
      inquirer
      .prompt([
        {
          name: "buyItem",
          type: "input",
          message: "What is the ID # of the item you would like to purchase?",
        }
    ])
} 
