//import
const mysql = require('mysql2')
const inquirer = require('inquirer')
const cTable = require('console.table')

require('dotenv').config();

//To connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
});



