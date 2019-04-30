DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carrot Cuttor", "Food Appliances", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "Electronics", 350, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung 55 inch tv", "Electronics", 550, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twin-sized bed", "Furniture", 150, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fish tank", "Pet Housing", 200, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Speakers", "Electronics", 300, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("50 x lined papers", "School utensils", 1.50, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("10 x Pencils", "School utensils", 2.50, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("32 inch x 40 inch pants", "Cloths", 10, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Shredder", "Electronics", 30, 300);

