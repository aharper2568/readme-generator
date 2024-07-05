// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:',
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
function generateREADME(answers) {

  return `
  # ${answers.title}
  ## Usage
${answers.usage}
## Questions
If you have any questions, you can reach me at:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
  `

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('README.md has been generated');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
// Function call to initialize app
init();
