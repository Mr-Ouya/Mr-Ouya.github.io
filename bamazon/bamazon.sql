
CREATE TABLE products (

item_id INT(11) NOT NULL AUTO_INCREMENT,

product_name VARCHAR(20),

department_name VARCHAR(20),

price decimal(5, 2),

stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Gatorade", "Food", 2.99, 71);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Red Bull", "Food", 2.99, 68);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Risk", "Board Games", 31.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Left 4 Dead 2", "Electronics", 25.99, 19);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Interview With The Vampire", "Books", 12.99, 29);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Gushers", "Food", 9.99, 60);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Taltos", "Books", 14.99, 34);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bose QuietComfort 25", "Electronics", 211.99, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Das kleine Böse Buch 2", "Books", 25.99, 11);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Sunchips Harvest Cheddar(40x40g)", "Food", 65.99, 9);