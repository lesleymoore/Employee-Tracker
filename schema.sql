DROP DATABASE IF EXISTS employeedb;

CREATE DATABASE employeedb;

USE employeedb;

CREATE TABLE employee (
    id INT AUTOINCREMENT, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT FK,
    manager_id INT FK,
    PRIMARY KEY (id)
)