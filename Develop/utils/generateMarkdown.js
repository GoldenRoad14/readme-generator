// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `<img src="https://img.shields.io/badge/license-${license}-brightgreen.svg">`;
  } else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `* [License](#license)`;
  } else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License
    This project is licensed under the ${license} license.` 
    // Learn more about this license [here](${licenseURL}).
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  
    ${renderLicenseBadge(data.license)}

    ## Description

    ${data.description}

    ## Table of Contents
    * [Installation](#installation)

    ## Installation
    ${data.installation}
 
`
;
}

module.exports = generateMarkdown;


// ## Description
// ${data.description}

// ## Table of Contents

// * [Installation](#installation)
// * [Usage](#usage)
// ${renderLicenseLink(data.license)}
// * [Contributors](#contributors)
// * [Tests](#tests)
// * [FAQ](#faq)


// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage}

// ${renderLicenseSection(data.license)}

// ## Contributors
// ${data.contributors}

// ## Tests
// ${data.tests}

// ## FAQ
// ${data.questions}
// For additional questions please contact me at: <${data.emailAddress}>
// Github: [${data.gitUserName}](https://www.github.com/${data.gitUserName}/)