const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

/*const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // sum would be 8
console.log(sum)*/