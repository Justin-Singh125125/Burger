DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;

USE burgers;


CREATE TABLE burger(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(121) NULL,
devoured BOOLEAN NULL,
PRIMARY KEY(id)
);