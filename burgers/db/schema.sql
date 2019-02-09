DROP  DATABASE if exists  burger_base;
CREATE DATABASE burger_base;
USE burgers_base;



CREATE TABLE burgers (


 id INT AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR(25) NOT NULL,
 devoured boolean DEFAULT false,
 primary key (id)
)