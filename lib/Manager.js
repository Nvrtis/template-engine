const Employee = require("./Employee.js")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return this.role = "Manager"
    }
}

module.exports = Manager