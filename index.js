// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for promt
const questions = () => {
  return inquirer.prompt([
  {
      type: 'input',
      message: 'Please enter your project title (Required)',
      name: 'title',
      validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your project title!");
            return false;
          }
        },
  },
  {
      type: `input`,
      message: `Please provide a short description explaining the project. (Required)`,
      name: `description`,
      validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter your project description!");
            return false;
          }
        },
  },
  {
      type: `list`,
      message: `Would you like to include this generic table of contents? (YES OR NO)
      - [Installation](#installation)
      - [Usage](#usage)jhy
      - [Credits](#credits)
      - [License](#license)`,
      name: `toc`,
      choices: ["YES", "NO"],
  },
  {
      type: `input`,
      message: `What are the steps required to install your project?`,
      name: `installation`
  },
  {
      type: `input`,
      message: `Include any usage instructions here.`,
      name: `usage`
  },
  {
      type: `input`,
      message: `Please make sure there is an "assets/images" folder in your repository and upload "screenshot.png". Now provide an alt text description for a screenshot (Required)`,
      name: `altText`,
      validate: (altTextInput) => {
          if (altTextInput) {
            return true;
          } else {
            console.log("Please enter your alt text!");
            return false;
          }
      },
  },
  {
      type: `input`,
      message: `Please enter any contribution details.`,
      name: `credits`
  },
  {
      type: `input`,
      message: `Please provide any instructions for testing.`,
      name: `tests`
  },
  {
      type: `input`,
      message: `Please enter your github username. (required)`,
      name: `github`,
      validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your github username!");
            return false;
          }
      },
  },
  {
      type: `input`,
      message: `Please enter your email.`,
      name: `email`
  },
  {
      type: `input`,
      message: `Please enter intructions for contacting.`,
      name: `contactMe`
  },
  ])
};

// Function to initialize app
function init() {
  questions()
  .then((inquirerRepsonse) => {
    console.log(inquirerRepsonse)
    fs.writeFile('ReadMe.md', generateMarkdown(inquirerRepsonse), err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    console.log("ReadMe was successfully created!");
  })
  .catch((err) => {
    console.log(err);
  })
}


// Function call to initialize app
init();
