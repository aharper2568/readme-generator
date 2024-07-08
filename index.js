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
function generateREADME(answers) {
  const licenseBadge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPLv2': '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': ''
  };

  return `
# ${answers.title}

${licenseBadge[answers.license]}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can reach me at:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
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
