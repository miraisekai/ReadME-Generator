function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
    `;
  } else {
    return `
  ${data}
    `;
  }
}


function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return " ";
  }
}


function renderLicenseLink(license) {
  if (license !== "no license") {
    return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return " ";
  }
}


function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return " ";
  }
}


function renderLicenseTOC(license) {
  if (license !== "no license") {
    return `
  * [License](#license)
    `;
  } else {
    return " ";
  }
}


function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#description)

  ${data.description}

  ## [Installation](#table-of-contents)
  
  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:
  [GitHub](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
