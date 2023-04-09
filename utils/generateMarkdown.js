// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `- [License](#license)`;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License

This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me at [${data.email}](mailto:${data.email}).
You can find more of my work at [${data.github}](https://github.com/${data.github}).

${renderLicenseBadge(data.license)}
`;

}

module.exports = generateMarkdown;