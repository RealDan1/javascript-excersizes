let firstObj = {
  name: 'Bob',
  age: 20,
};

console.log(firstObj.name);

//using dot key on new object does add property
//=================================================
firstObj.isAdmin = 'Yes he is an admin';

console.log(firstObj.isAdmin);

delete firstObj.name;

firstObj = {
  'likes flowers': 'Yes I like flowers',
};
console.log(firstObj['likes flowers']);

// Computed properties
//====================
//        let fruit = prompt('Which fruit to buy?', 'apple');
let fruit = 'apple';
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag[fruit]); // 5 if fruit="apple"

// most critical function for making objects - THE SHORTHAND
//===============================================================

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

let obj23 = {
  0: 'test', // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj23['0']); // test
console.log(obj23[0]); // test (same property)

//Test if property exists:
//========================
user = { name: 'John', age: 30 };

console.log('age' in user); // true, user.age exists
console.log('blabla' in user); // false, user.blabla doesn't exist
// use this instead of undefined to test propert because undefined can be stored as a value
// (and if tested will return undefined but the property actually exists)

//FOR.. IN LOOP
//=============
user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}

//for..in loop with numbers - nb cheat by addding "+"":
let codes = {
  '+49': 'Germany',
  '+41': 'Switzerland',
  '+44': 'Great Britain',
  // ..,
  '+1': 'USA',
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}
