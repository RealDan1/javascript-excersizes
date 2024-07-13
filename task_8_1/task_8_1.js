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
//Apologies I document all my excersizes for later.
let findSumRest = (...rest) => {
  let total = 0;
  for (item of rest) {
    total += item;
  }
  return total;
};
