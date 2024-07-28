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
