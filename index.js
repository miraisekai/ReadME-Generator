const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");


const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => !!input || "Enter the title of the project",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
    validate: (input) => !!input || "Enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (input) => !!input || "Enter your email address",
  },
  {
    type: "input",
    message: "Enter a short description for your project",
    name: "description",
    validate: (input) => !!input || "Enter a short description for your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide step-by-step installation instructions for your project.",
    validate: (input) => !!input || "Enter your installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use.",
    validate: (input) => !!input || "Enter your instructions and examples for use",
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
  },
  {
    type: "confirm",
    name: "confirmContributers",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Provide guidelines for contributing.",
    when: ({ confirmContributers }) => confirmContributers,
    validate: (input) => !!input || "Enter guidelines you would like contributors to follow",
  },
  {
    type: "input",
    name: "test",
    message: "Provide instructions on how to test the app.",
    validate: (input) => !!input || "Enter some test instructions",
  },
];


const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./destination/generated-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};


const promptQuestions = () => inquirer.prompt(questions);


promptQuestions()
  .then((readmeData) => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
  })
  .then((pageMD) => {
    return writeFile(pageMD);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });
