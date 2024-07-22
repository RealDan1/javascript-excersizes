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

//I wrote this task with the filter function partly in long form so I could understand the logic better.

//create filterFunction
let myLongFilterFunction = function (arr) {
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
