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
            const { choices } = answers;

            if (choices === 'View All Employees') {
                showEmployees();

            } else if (choices === 'Add Employee') {
                addEmployee();

            }


        })
}

showEmployees = () => {
    console.log('Showing Employees');

    const sql = `SELECT employee.id, 
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.dept_name AS department,
                      role.salary, 
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager
                      FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    connection.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
        // connection.promise().query(sql, (err, rows) => {
        // if (err) throw err; 
        // console.table(rows);
        // promptUser();

    });

};

addEmployee = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the Employee's first name?"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the Employee's last name?"
        },
        {
            type: 'number',
            name: 'role',
            message: "What is the Employee's role? ",
            

        },
        {
            type: 'number',
            name: 'manager',
            message: "Who is the employee's manager?",
           

        }

    ])
        .then(answers => {
            const sql =      `SELECT employee.id, 
            CONCAT (employee.first_name, " ", employee.last_name) AS name, 
            role.title, 
            role.salary,
            CONCAT (manager.first_name, " ", manager.last_name) AS manager,
            department.name AS department 
            FROM employee 
             JOIN role ON employee.role_id = role.id
             JOIN department ON role.department_id = department.id
             LEFT JOIN employee manager ON employee.manager_id = manager.id`;
            
             connection.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
                 (sql, (err,answers) => {

                
                if (err) throw err;
                console.table(answers);
                promptUser();
            })
             )
        });
}
