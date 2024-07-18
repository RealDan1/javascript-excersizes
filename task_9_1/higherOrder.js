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

let myFilterFunction = (arr) => (fn) => {
  const arrayAfterFilter = [];
  for (let i = 0; i < arr.length; i++) {
    arrayAfterFilter.push(fn(arr[i]));
  }
  return arrayAfterFilter;
};

const filterType = (item) => {
  if (item.length === 6) {
    return item;
  }
};

console.log(myFilterFunction(inputArray)(filterType));
