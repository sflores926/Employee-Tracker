//import
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
// const { config } = require('dotenv');

require('dotenv').config();
// console.log(config)

//To connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Welcome to Employee Tracker!');
    promptUser();
});

//Create an array of questions with inquirer
const promptUser = () => {
     inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }



    ])

    .then((answers) => {
        const {choices} = answers;

        if(choices === 'View All Employees') {
            showEmployees();
        }


    })
 }
