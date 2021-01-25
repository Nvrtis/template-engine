const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerArray = []
const engineerArray = []
const internArray = []

const buildManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameManager",
            message: "What is the name of the manager"
        }, {
            type: "input",
            name: "idManager",
            message: "What is the id of the manager",
        }, {
            type: "input",
            name: "emailManager",
            message: "What is the email of the manager"
        }, {
            type: "input",
            name: "officeNumberManager",
            message: "What is the office number of the manager"
        }
    ])
        .then(({ nameManager, idManager, emailManager, officeNumberManager } = answers) => {
            const manager = new Manager(nameManager, idManager, emailManager, officeNumberManager)
            managerArray.push(manager)
            buildTeam()
        })
}

buildManager()

const buildTeam = () => {
    inquirer.prompt([
        {
          type: "list",
          name: "teamMember",
          message: "Who is your next member?",
          choices: [
            "Engineer",
            "Intern",
            "Finished"
          ],
          default: "Engineer"
        }]).then((answer => {
            if(answer.teamMember === "Engineer"){
                buildEngineer()
            } else if (answer.teamMember === "Intern"){
                buildIntern()
            } else {
                managerTemplate(managerArray)
                engineerTemplate(engineerArray)
                internTemplate(internArray)
            }
        
        }))
    }


const buildEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameEngineer",
            message: "What is the name of the Engineer"
        }, {
            type: "input",
            name: "idEngineer",
            message: "What is the id of the Engineer",
        }, {
            type: "input",
            name: "emailEngineer",
            message: "What is the email of the Engineer"
        }, {
            type: "input",
            name: "githubEngineer",
            message: "What is the Github username of the Engineer"
        }
    ])
        .then(({ nameEngineer, idEngineer, emailEngineer, githubEngineer } = answers) => {
            const engineer = new Engineer(nameEngineer, idEngineer, emailEngineer, githubEngineer)
            engineerArray.push(engineer)
            buildTeam()
        })
}

const buildIntern= () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameIntern",
            message: "What is the name of the Intern"
        }, {
            type: "input",
            name: "idIntern",
            message: "What is the id of the Intern",
        }, {
            type: "input",
            name: "emailIntern",
            message: "What is the email of the Intern"
        }, {
            type: "input",
            name: "schoolIntern",
            message: "What is the School of the Intern"
        }
    ])
        .then(({ nameIntern, idIntern, emailIntern, schoolIntern } = answers) => {
            const intern = new Intern(nameIntern, idIntern, emailIntern, schoolIntern)
            internArray.push(intern)
            buildTeam()
        })
}
