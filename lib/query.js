const inquirer = require('inquirer')
const db = require('../db/db');
const { response } = require('express');

//function to view all employees
function viewEmployees(callback) {
    const sql = 'SELECT * FROM employees';

    
    db.query(sql, (error, rows) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            console.table(rows);
        }
        callback();
    });
}

//allows user to add employee 
function addEmployee(callback) {
    //use inquirer to get details about new employee
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter employee's first name:",
            name: 'first_name',
        },
        {
            type: 'input',
            message: "Enter employee's last name:",
            name: 'last_name',
        },
        {
            type: 'input',
            message: "Enter employee's role ID:",
            name: 'role_id'
        },
        {
            type: 'input',
            message: "Enter the manager's ID (If any, otherwise press Enter):",
            name: 'manager_id'
        },
    ]).then((answers) => {
        //new employee is added to the DB
        const sql = 'INSERT INTO employees  (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        const values = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id || null];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.err('Error adding employee:', err);
            } else {
                console.log('Employee added successfully!');
            }
            callback();
        });
    });
}

//function gets list of employees/roles and updates
function updateEmployeeRole(callback) {
    //Getting list of employees
    db.query(`SELECT * FROM employees`, (err, rows) => {
        if (err) {
            console.log('Something went wrong getting employees.');
            return;
        }
        const employeeList = rows.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));
        db.query(`SELECT * FROM role`, (err, rows) => {
            if (err) {
                console.error("Something went wrong getting roles.", err);
                return;
            }
            const roleList = rows.map(({ id, title }) => ({
                name: title,
                value: id
            }));
            inquirer
                .prompt([
                {
                    name: 'employee_id',
                    type: 'list',
                    message: "Which employee's role would you like to update?",
                    choices: employeeList
                },
                {
                    name: 'role_id',
                    type: 'list',
                    message: "Which role do you want to assign the selected employee?",
                    choices: roleList
                    }
                ]).then((response) => {
                    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
                    db.query(sql, [response.role_id, response.employee_id], (err) => {
                        if (err) {
                            console.error("Role update not successful.", err);
                            return;
                        }
                        console.log("Updated employee's role.")
                        callback();
                    })
            })
        })
   }) 
}





module.exports = {
    viewEmployees, addEmployee, updateEmployeeRole
}