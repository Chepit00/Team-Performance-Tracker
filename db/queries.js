class EmployeeQueries {
  constructor(database) {
    this.database = database;
  }

  showAllDepartments() {
    const sql = "SELECT * FROM department";
    return this.database.query(sql);
  }

  showAllRoles() {
    const sql = "SELECT * FROM role";
    return this.database.query(sql);
  }

  showAllEmployees() {
    const sql = "SELECT * FROM employee";
    return this.database.query(sql);
  }
}

module.exports = EmployeeQueries;