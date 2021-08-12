const inquirer = require("inquirer")
const fs = require('fs');

const generatePage = (answers) => {
  // "Apache", "MIT", "Mozilla", "IBM"
  var badge = ""
  switch (answers.license) {
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break

    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break

    case "Mozilla":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break
    default:
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }


  return `
# ${answers.title} 

## Description 

   ${answers.description} 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Tests](#test)
* [Contact](#contact)


## Installation

 ${answers.installation}


## Usage 

 ${answers.usage}
   

## Contributors

 ${answers.contributors}


## License

  ${badge}


## Tests

  ${answers.test}


## Contact
 
 ${answers.email}
  
[${answers.github}](https://github.com/${answers.github})
`;
};


inquirer.prompt([
  {
    type: "input",
    message: "What is the Title?",
    name: "title"
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "description"
  },
  {
    type: "input",
    message: "How do you install the application?",
    name: "installation"
  },
  {
    type: "input",
    message: "How do you use this application?",
    name: "usage"
  },
  {
    type: "input",
    message: "Who contributed to the project?",
    name: "contributors"
  },
  {
    type: "list",
    message: "Choose the following license",
    choices: ["Apache", "MIT", "Mozilla", "IBM"],
    name: "license"

  },
  {
    type: "input",
    message: "How do you test your application?",
    name: "test"
  },
  {
    type: "input",
    message: "What is your github",
    name: "github"
  },
  {
    type: "input",
    message: "What is your email",
    name: "email"
  }
])
  .then(function (answers) {
    fs.writeFileSync('README.md', generatePage(answers));
  })




