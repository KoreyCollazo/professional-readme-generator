// Function that returns a license badge based on which license is passed in
function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "Boost Software License 1.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  };
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "Mozilla Public License 2.0"){
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };

// Function to generate markdown for README
function generateMarkdown(data) {
  //Generate Table of contents
  if (data.toc === "YES"){
    var toc = `
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  `
  } else {
    var toc = ""
  }
  //confirm installation
  if (data.installation === ``){
    var install = "N/A"
  } else {
    var install = data.installation
  }
  //confirm credits
  if (data.credits === ``){
    var credits = "N/A"
  } else {
    var credits = data.credits
  }
  //confirm tests
  if (data.tests === ``){
    var tests = "N/A"
  } else {
    var tests = data.tests
  }

  return `# ${data.title}

## Description
${data.description}
${toc}
## Installation
${install}

## Usage
${data.usage}
![${data.altText}](assets/images/screenshot.png)

## Credits   

${credits}
 
## License
${licenseBadge(data)}

## Tests

${tests}

## Questions
For additional projects my github username is [${data.github}](https://github.com/${data.github})

If you have any questions or wish to contact me, please reach out to ${data.email}. Thanks!

`;
}

module.exports = generateMarkdown;
