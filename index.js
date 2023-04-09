// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Enter a title');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Enter your Github username');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? address?',
      },
      {
          type: 'list',
          name: 'license',
          message: 'What kind of license do you use or your project?',
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
          type: 'input',
          message: 'description',
          name: 'Enter a short description for your project?',
      },
      {
        type: 'input',
        message: 'install',
        name: 'What command should be run to install your project?',
        default: 'npm i',
        
    

    
    
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}
function writeReadme(data) {
  const fileName = 'README.md';
  writeToFile(fileName, data);
}


// TODO: Create a function to initialize app
async function init() {
  const responses = await inquirer.prompt(questions);
  const data = generateMarkdown({...responses });

  console.log('GENERATING README...')

  writeReadme(data);
}

// Function call to initialize app
init();
