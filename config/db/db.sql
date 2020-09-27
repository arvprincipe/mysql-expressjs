create database db_demo;

create table products(
	productId  INT(25) AUTO_INCREMENT NOT NULL,
	name varchar(300),
	description varchar(600),
	price varchar(20),
	brand varchar(20),
	CONSTRAINT pk_products PRIMARY KEY(productId)
);

