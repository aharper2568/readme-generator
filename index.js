// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = ['Project Name:', 'Language','Usage','Github', 'Repo Name:', 'Authors'];
const [question1,question2,question3,question4,question5,question6] = questions;



const buildReadMe = (response) => `
# ---${response.project}---
## Intro
This is an application built in ${response.language} that autogenerates a readme.
## Usage\n
${response.usage}
## Live URLs\n
[Github Repo](https://github.com/${response.liveURL})\n
[Deployed Website](https//${response.github}.github.com/${response.liveURL})\n
## Author
Coded in **VSCode** by **${response.author}**


`;
// TODO: Create a function to write README file
const writeToFile = (data) => {
  fs.writeFile('readme.md', data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file created successfully!');
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  console.log(question1)
  inquirer
  .prompt([
    {
      type:"input",
      name:"project",
      message:question1,
      default: "README GENERATOR"
    },
    {
      type:"input",
      name:"language",
      message:question2,
      default: "nodeJS"
    },
    {
      type:"input",
      name:"usage",
      message:question3,
      default:"Answer questions asked by prompt"
    },
    {
      type:"input",
      name:"github",
      message:question4,
      default:"aharper2568"
    },
    {
      type:"input",
      name:"liveURL",
      message:question5,
      default:"readme-generator"
    },
    {
      type:"input",
      name:"author",
      message:question6,
      default:"Anthony Harper"
    },
  ])
  .then((response) => {
    const readmeContent = buildReadMe(response);
    writeToFile(readmeContent);
  })
  .catch((err) => {
    console.error(err);
  });
}

// Function call to initialize app
init();
