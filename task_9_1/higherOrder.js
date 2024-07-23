inputArray = [
  'Evelyn',
  'Oliver',
  'Max',
  'Alexander',
  'Sophia',
  'Charlotte',
  'Liam',
  'Daniel',
  'Michaelangelo',
  'Ava',
];

//I wrote this task with the filter function partly in long form so I could understand the logic better. The shortform arrow function in the hyperion pdf was a bit confusing.

// //create filterFunction
// let myFilterFunction = function (arr) {
//   return (fn) => {
//     const arrayAfterFilter = [];
//     //iterate through the whole input array
//     for (let i = 0; i < arr.length; i++) {
//       //if the input function is given the input array item and returns true
//       if (fn(arr[i])) {
//         //add the current item to the new array
//         arrayAfterFilter.push(arr[i]);
//       }
//     }
//     //return the new array for output
//     return arrayAfterFilter;
//   };
// };

// //callback function that returns true if input string length is six
// const lengthIsSix = (item) => {
//   if (item.length === 6 && typeof item === 'string') {
//     return true;
//   } else {
//     return false;
//   }
// };

// //output the function plus the required arguments
// console.log(myFilterFunction(inputArray)(lengthIsSix));

//create filterFunction
let myFilterFunction = function (arr, fn) {
  const arrayAfterFilter = [];
  //iterate through the whole input array
  for (let i = 0; i < arr.length; i++) {
    //if the callback function is given the input array item and returns true
    if (fn(arr[i])) {
      //add the current item to the new array
      arrayAfterFilter.push(arr[i]);
    }
  }
  //return the new array for output
  return arrayAfterFilter;
};

//callback function that returns true if input string length is six
const lengthIsSix = (item) => {
  if (item.length === 6 && typeof item === 'string') {
    return true;
  } else {
    return false;
  }
};

//output the function plus the required arguments
console.log(myFilterFunction(inputArray)(lengthIsSix));
