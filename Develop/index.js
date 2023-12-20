// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license?',
        choices: ['MIT','GPL3.0','Apache-2.0','CCBY4.0','None'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any other contributors:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please explain how to run any tests associated with the project:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide any FAQs:',
    },
    {
        type: 'input',
        name: 'gitUserName',
        message: 'Please enter your github username:',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generateMarkdown({...answers}));
    })
    .catch((error) => {
        console.log('Error: ', error);
    });
}

// Function call to initialize app
init();
