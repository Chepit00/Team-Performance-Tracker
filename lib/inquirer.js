const inquirer = require('inquirer');

//importing functions from query file
const {
    viewEmployees,
    addEmployee,
    updateEmployeeRole,
    viewAllRoles,
    addRole,
    viewAllDepartmetns,
    addDepartment,
} = require ('./query.js');

console.log("TEAM PERFORMANCE TRACKER");

//renders list to user in terminal
const listInquirer = () => {
inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do today?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Exit"
      ],
      name: "tracker",
    }
  ])
  .then((response) => {
    switch (response.tracker) {
      case "View All Employees":
        viewEmployees(listInquirer);
        break;
      case "Add Employee":
        addEmployee(listInquirer);
        break;
      case "Update Employee Role":
        updateEmployeeRole(listInquirer);
        break;
      case "View All Roles":
        viewAllRoles(listInquirer);
        break;
      case "Add Role":
        addRole(listInquirer);
        break;
      case "View All Departments":
        viewAllDepartmetns(listInquirer);
        break;
      case "Add Department":
        addDepartment(listInquirer);
        break;
      default:
        console.log("Invalid choice");
      case "exit":
        process.exit();
    }
  })
};

  module.exports = listInquirer;