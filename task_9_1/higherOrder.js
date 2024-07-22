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

// let myFilterFunction = (arr) => (fn) => {
//   const arrayAfterFilter = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 6) {
//       arrayAfterFilter.push(fn(arr[i]));
//     }
//   }
//   return arrayAfterFilter;
// };

// startArray = myFilterFunction(inputArray);
// console.log(startArray());

//write this in long form so i understand it
// let myFilterFunction = (arr) => (fn) => {
//   const arrayAfterFilter = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrayAfterFilter.push(fn(arr[i]));
//   }
//   return arrayAfterFilter;
// };

//I wrote this task with the filter function partly in long form so I could understand the logic better.

//create filterFunction
let myLongFilterFunction = function (arr) {
  //filter function must return another function (which is anonymous), it uses a function as its argument(fn which contains the function that )
  return (fn) => {
    const arrayAfterFilter = [];
    for (let i = 0; i < arr.length; i++) {
      arrayAfterFilter.push(fn(arr[i]));
    }
    return arrayAfterFilter;
  };
};

const filterType = (item) => {
  if (item.length === 6) {
    return item;
  }
};

console.log(myLongFilterFunction(inputArray)(filterType));
