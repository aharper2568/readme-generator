// Import required packages
const inquirer = require('inquirer'); //For prompting user input
const fs = require('fs'); // To write and save files
const generateMarkdown = require('./utils/generateMarkdown'); // imported file generation function

// Prompt questions put into an array of objects
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];
// writing function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err); // log if error
    }
    console.log('README.md has been generated'); // log if successful
  });
}
// initialize function
function init() {
  inquirer // prompt users with array of questions
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
 // call init function
init();
