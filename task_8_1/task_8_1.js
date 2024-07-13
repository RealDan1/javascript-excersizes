//standard findsum function
let findSum = (sumArray) => {
  let total = 0;
  for (item of sumArray) {
    total += item;
  }
  return total;
};

//I wanted to use the new ...rest functionality for practice.
//I used it briefly before but didnt enforce it properly.
//If I understand this correctly:
//...rest will not accept an array and function the same way as findSum()
//but will accept indefinite individual arguments and add them together.
//So for the purpose of this excersize ignore it, my submission to this question is just the above standard findSum().
//Apologies I document all my excersizes on Github for later.
const findSumRest = (...rest) => {
  let total = 0;
  for (const item of rest) {
    total += item;
  }
  return total;
};

const subtractNumbers = (a, b) => a - b;

const multiplyNumbers = (a, b) => a * b;

const divideNumbers = (a, b) => {
  if (b === 0) {
    console.log("You can't divide by zero");
  } else {
    return a / b;
  }
};

console.log(divideNumbers(1, 0));
