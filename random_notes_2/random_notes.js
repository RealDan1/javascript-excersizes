//Objects
//=======
const playerOne = {
  name: 'tim',
  marker: 'X',
};

const playerTwo = {
  name: 'jenn',
  marker: 'O',
};

function printName(player) {
  console.log(player.name);
}

printName(playerTwo);

//evauluate cars in objects:
//==========================
// Defined a constructor function to create car objects
function Car(brand, model, year, colour) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.colour = colour;
}
// Created 3 car objects using the Car constructor
let car1 = new Car('Tesla', 'Model S', 2023, 'Gray');

let car2 = new Car('Audi', 'e-tron', 2022, 'Red');
let car3 = new Car('Porsche', 'Taycan', 2021, 'Blue');
// Create an array to store the car objects
let cars = [car1, car2, car3];
// Define a function to find the most recently manufactured car
function findNewestCar(array) {
  // Sort the array of cars based on the manufacturing year in descending order
  array.sort((firstCar, secondCar) =>
    firstCar.year > secondCar.year ? -1 : 1
  );
  // Use template and string literals to display the details
  console.log(`The most recently manufactured car is the ${array[0].brand}
 ${array[0].model}, which was made in ${array[0].year}`);
}
// Call the findNewestCar function
findNewestCar(cars);

// Define an edit function that takes 3 parameters
function editColour(cars, carColour, newColour) {
  // Loop through each car object in the array
  for (let i = 0; i < cars.length; i++) {
    // If current car colour matches the value passed to the carColour
    //parameter;
    if (cars[i].colour === carColour) {
      // Update the colour property to the value passed to the newColour
      //parameter;
      cars[i]['colour'] = newColour;
      // Return the updated car object
      return cars[i];
    }
  }
}
// Call the function to change the colour of a car from "Gray" to "White".
editColour(cars, 'Gray', 'White');
/* Display the updated car details in a table. This is the first time you’re seeing the .table built-in function in action! */
console.log('\nThe updated table:');
console.table(cars);

//test out console.table on objects
function fruit(name, shape, color) {
  this.name = name;
  this.shape = shape;
  this.color = color;
}

let orange = new fruit('orange', 'round', 'orange');
let apple = new fruit('apple', 'round', 'green');

let fruitArr = [orange, apple];
console.table(fruitArr);

//Promises:
// Create an empty array to store quotes
let items = [];
// Fetch random quotes from the API
fetch('https://api.quotable.io/random')
  //Fetch returns an object which is called res by default
  //Parse the response as a JSON object
  .then((res) => res.json())
  // Callback used to parse the data
  .then(
    (result) => {
      // Assign and store the data in the items array
      items = result;
      // Return the data in the console
      console.log(items.content);
    }, //end arrow function
    // ), // end .then
    // Error handling is executed if fetch fails
    (error) => {
      // Return an error in the console
      console.log(error);
    }
  ); // end .then

//custom promise function:
//=======================
// Create a new Promise object taking in the resolve and reject parameters
let myPromise = new Promise(function (resolve, reject) {
  // Store random number in a variable
  let randNumber = Math.floor(Math.random() * 10);
  // Promise is resolved if the random number is greater than or equal to 5.
  // Else it will be rejected
  if (randNumber >= 5) {
    resolve('Number was greater than or equal to 5 [RESOLVED]');
  } else {
    reject(Error('The number was less than 5 [REJECTED]'));
  }
});
// Return the resolved or rejected results
myPromise.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
// Return message to indicate the code is still running
console.log("I'll still be running though");

//test shorthand for OR |
let bool = true;
let bool2 = false;
if ((bool2 === true) | (bool === true)) {
  console.log('success----------');
}
