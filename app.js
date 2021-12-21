// Return an array containing the command line arguments or inputs
const profileDataArgs = process.argv.slice(2);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// combine the above variables into one below
const [name, github] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template.js');


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



fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
