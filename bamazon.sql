DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

item_id INTEGER NOT NULL AUTO_INCREMENT,

product_name VARCHAR(20) NOT NULL,

department_name VARCHAR(20),

price INTEGER(225),

stock_quantity INTEGER(225) NOT NULL,

PRIMARY KEY (item_id)

);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4", "Electronics", 400, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snowboard", "Sporting Goods", 500, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Car", "Automobiles", 2000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boat", "Automobiles", 5000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothes", 5, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guitar", "Instruments", 1000, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Phone", "Electronics", 600, 5555);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Helmet", "Sporting Goods", 40, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Television", "Electronics", 5060, 234);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 1020, 4);
