const Employee = require("./Employee.js")
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return this.role = "Intern"
    }
}

module.exports = Intern