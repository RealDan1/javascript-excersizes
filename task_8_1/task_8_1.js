//standard findsum function expression
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
//but will accept an indefinite amount of individual arguments and add them together.
//So for the purpose of this excersize ignore it, my submission to this question is just the above standard findSum().
//Apologies I document all my excersizes on Github for later.
const findSumRest = (...rest) => {
  let total = 0;
  for (const item of rest) {
    total += item;
  }
  return total;
};

//arrow function subtractNumbers
const subtractNumbers = (a, b) => a - b;

//arrow function multiplyNumbers
const multiplyNumbers = (a, b) => a * b;

//arrow function divideNumbers
const divideNumbers = (a, b) => {
  //edge case divide by zero
  if (b === 0) {
    console.log("You can't divide by zero");
  } else {
    return a / b;
  }
};

//define the array and start test section of excersize
const array = [5, 4, 3];

console.log(findSum(array));

console.log(subtractNumbers(array[0], array[1]));

console.log(multiplyNumbers(array[2], array[0]));

console.log(divideNumbers(findSum(array), array[2]));
