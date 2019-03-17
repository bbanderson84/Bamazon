var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({

    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password and username
    password: "",
    database: "bamazon_db"
  });
  
  connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected as id " + connection.threadId + "\n------------------------");

      start();
  });

  // function that prompts user if they would like to continue with order
function continueOrder() {
    orderContinue = "";
    inquirer
    .prompt([
      {
        name: "orderContinue",
        type: "input",
        message: "Would you like to continue shopping? Press Y for Yes, or N for No",
      },

  ])
  .then(function(answer){
      if (answer.orderContinue === "Y"){
          start();

      } else {
          console.log("Thank you for shopping at Bamazon. Please check back later for needed quantity." + "\n------------------------");
      }

  });

}

// start app function providing user with list of products
function start() {

var query = "SELECT item_id, product_name, price FROM products";

console.log("Welcome to Bamazon! Please browse our items in the list below. " + "\n------------------------" );

connection.query(query, function(error, response) {
    for (var i = 0; i < response.length; i++) {
        console.log("Item Id: " + response[i].item_id + " || Product Name: " + response[i].product_name  + " || Price: " + response[i].price);
    }

    itemSearch();
    });
  }

  // item search function that takes in ID of product and quantity that user wants
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

                continueOrder();

            } else { 
                console.log("Your total is: " + response[i].price * answer.productQuantity);

                var updatedStock = (response[i].stock_quantity -answer.productQuantity);

                var purchaseId = answer.productSearch;

                calculateOrder(updatedStock, purchaseId);

            }
        }
      
        });

    });
}
// function that calculates the user order based on the product and anount that they have selected
function calculateOrder(updatedStock, purchaseId) {
    inquirer
    .prompt([
        {
        name: "checkoutCost",
        type: "input",
        message: "Continue to checkout? Press Y for Yes, and N for No.",
    },

    ])
    .then(function(answer){
        if (answer.checkoutCost === "Y"){
            connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: updatedStock}, {item_id: purchaseId}], function (error, response){
                console.log("\n----------------------" + "\n Thank you for your purchase! Please come again soon!" + "\n----------------------");

            });  

        } else {
            console.log("No problem. Please visit Bamazon for your future product needs. See you next time!");

            start();

            }

        });
}


