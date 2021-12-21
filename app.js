// Return an array containing the command line arguments or inputs
// const profileDataArgs = process.argv.slice(2);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// combine the above variables into one below
// const [name, github] = profileDataArgs;

const inquirer = require('inquirer');
// const fs = require('fs');
// const { generate } = require('rxjs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

/*const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs); */

/*const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // sum would be 8
console.log(sum)*/



// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type:'input',
      name: 'github',
      message: 'Enter your Github Username',
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself',
    }
  ]);
};



const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type:'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with?',
      choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
    type:'input',
    name: 'link',
    message: 'Enter the Github link to your project (Required)',
    },
    {
      type:'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
      },
      {
      type:'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
      }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });