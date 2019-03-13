var mysql = require("mysql");

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
      // CALL FUNCTIONS
  });

  