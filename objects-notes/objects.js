let firstObj = {
  name: 'Bob',
  age: 20,
};

console.log(firstObj.name);

//using dot key on new object does add property
firstObj.isAdmin = 'Yes he is an admin';

console.log(firstObj.isAdmin);

delete firstObj.name;

firstObj = {
  'likes flowers': 'Yes I like flowers',
};
console.log(firstObj['likes flowers']);

// [Computed properties]
//        let fruit = prompt('Which fruit to buy?', 'apple');
let fruit = 'apple';
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag[fruit]); // 5 if fruit="apple"

// most critical function for making objects - THE SHORTHAND

// name: name, is the same as "name,"
function makeUser(name, age, height) {
  return {
    name: name,
    age: age,
    height, // is the same as hieght:height,
    // ...other properties
  };
}

let user = makeUser('John', 30);
console.log(user.name); // John

// THE ACTUAL SHORTHAND IN PRACTICE:

function makeUser(name, age, height) {
  return {
    name,
    age,
    height,
  };
}
