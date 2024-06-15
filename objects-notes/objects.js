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
// ===============================================================

// name: name, is the same as "name,"
function makeUser(name, age, height) {
  return {
    name: name,
    age: age,
    height, // is the same as hieght:height,
    // ...other properties
  };
}

let user1 = makeUser('John', 30);
console.log(user1.name); // John

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

// Test if property exists:
// ========================
user1 = { name: 'John', age: 30 };

console.log('age' in user1); // true, user1.age exists
console.log('blabla' in user1); // false, user1.blabla doesn't exist
// use this instead of undefined to test propert because undefined can be stored as a value
// (and if tested will return undefined but the property actually exists)

// FOR.. IN LOOP
// =============
user1 = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user1) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user1[key]); // John, 30, true
}

// for..in loop with numbers - nb cheat by addding "+"":
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

// SUMMARY
// =========
// 1. Objects are associative arrays with several special features.
// - Property keys must be strings or symbols (usually strings).
// - Values can be of any type.

// 2. To access a property, we can use:
// - The dot notation: obj.property.
// - Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].

// 3. Additional operators:
// - To delete a property: delete obj.prop.
// - To check if a property with the given key exists: "key" in obj.
// - To iterate over an object: for (let key in obj) loop.

// 4. What we’ve studied in this chapter is called a “plain object”, or just Object.
// There are many other kinds of objects in JavaScript:
// - Array to store ordered data collections,
// - Date to store the information about the date and time,
// - Error to store the information about an error.
// …And so on.

// 5. They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

// 6. Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.

// Objects Excersizes:
// ==================
// 1.
let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

delete user.name;

//2. test if object has ANY property whatsoever:
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

//object as object property
//=========================

let salaries = {
  John: { monthly: 100, yearly: 1200 },
};
console.log(salaries.John.yearly);

//Loop thru obj and multiply numeric properties
//=========================================

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
      console.log(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

multiplyNumeric(menu);

//Using my first 'this' inside an object:
//=====================================
const randObject = {
  coinSize: 20,
  value: 1,
  printValue: function () {
    console.log(
      `This coin is a ${this.value} coin sized at ${this.coinSize}mm`
    );
  },
};

randObject.printValue();

//reuse method inside another object(with this)
const dollarObject = {
  coinSize: 50,
  value: 2,
  printValue: randObject.printValue,
};

dollarObject.printValue();

//shorthand for writing method inside object:
const euroObject = {
  coinSize: 40,
  value: 4,
  printValue: randObject.printValue,
  alphaMethod() {
    console.log(
      `I'm the bestcoin because my value is ${this.value}. I am Euro.`
    );
  },
};
euroObject.alphaMethod();

function createCoin(name, coinSize, value) {
  const coin = {};
  coin.name = name;
  coin.coinSize = coinSize;
  coin.value = value;
  coin.introduceSelf = function () {
    console.log(
      `Hi! My Coin name is ${this.name}. My value is ${this.value}, my coinsize is ${this.coinSize}.`
    );
  };
  return coin;
}

const zimDollar = createCoin('zimDollar', 15, 0.1);
zimDollar.introduceSelf();
console.log(zimDollar.value);
