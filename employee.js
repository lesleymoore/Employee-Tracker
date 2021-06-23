const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',

    password: 'Password',
    database: 'library-db',
  });

inquirer.prompt({
    type: 'list',
    name: 'orignal',
choices: [
    {
      name: "View All Employees",
      value: "VIEW_EMPLOYEES"
    },
    {
      name: "View All Employees By Department",
      value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
    },
    {
      name: "Add Employee",
      value: "ADD_EMPLOYEE"
    },
    {
      name: "Update Employee Role",
      value: "UPDATE_EMPLOYEE_ROLE"
    },
    {
      name: "View All Roles",
      value: "VIEW_ROLES"
    },
    {
      name: "Add Role",
      value: "ADD_ROLE"
    },
    {
      name: "View All Departments",
      value: "VIEW_DEPARTMENTS"
    },
    {
      name: "Add Department",
      value: "ADD_DEPARTMENT"
    },
    {
      name: "Quit",
      value: "QUIT"
    }
  ]})
  .then((answer => {
      if(answer.original == "View All Employees"){
          connection.query('SELECT * FROM employee', (err, res) =>{
              if(err) throw err;
              console.log(res);
              connection.end()
          });
      }
  }));