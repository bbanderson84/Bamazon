-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;

-- Creates the database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect database --
USE bamazon_db;

-- Creates the table "product" within database --
CREATE TABLE products (

-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
item_id INTEGER NOT NULL AUTO_INCREMENT,

-- Makes a string column called "product_name" which cannot contain null --
product_name VARCHAR(20) NOT NULL,

-- Makes a string column called "department_name" --
department_name VARCHAR(20),

-- Makes an numeric column called "price" --
price INTEGER(6000) NOT NULL,

-- Makes an numeric column called "stock_quantity" --
stock_quantity INTEGER(6000) NOT NULL,

-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Playstation 4", "Electronics", $400, 30);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Snowboard", "Sporting Goods", $500, 10);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Car", "Automobiles", $2000, 2);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Boat", "Automobiles", $5000, 1);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Shirt", "Clothes", $5, 3000);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Guitar", "Instruments", $1000, 200);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Phone", "Electronics", $600, 5555);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Helmet", "Sporting Goods", $40, 450);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Television", "Electronics", $5060, 234);

INSERT INTO products (product_name, department_name, price, stock quantity)
VALUES ("Computer", "Electronics", $1020, 4);
