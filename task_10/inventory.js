function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

// Store all shoes
let shoe1 = new Shoes('Nike', 'A1', 100, 1000);
let shoe2 = new Shoes('Adiddas', 'A2', 20, 900);
let shoe3 = new Shoes('Vans', 'A3', 40, 600);
let shoe4 = new Shoes('DC', 'A4', 200, 400);
let shoe5 = new Shoes('Hoka', 'A5', 120, 800);

let shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5];

// define a search function that takes a string and an Array of objects as arguments and outputs its details if it matches the string or outputs an error if not found
// It also returns the object for further processing if found
function searchArray(search, inputArray) {
  // Define a "returnObject" variable to return later - if the search finds nothing this will remain null and an error message will be shown
  let returnObject = null;

  // Loop through shoesArray(or any array)
  for (let i = 0; i < inputArray.length; i++) {
    //If (at the index of the current array item) the name contains the search value
    if (inputArray[i].name.includes(search)) {
      // Firstly console.log the index of the item:
      // Then present the full object in a table (to see all the details of the shoe)
      console.log(
        `${search} was found at index ${i}. \n\nThe item details are as follows:`
      );
      console.table(inputArray[i]);

      // Also store the item to return it later - if the search finds nothing this will remain null and an error will be displayed
      returnObject = inputArray[i];
      // Stop the loop because a match was found
      break;
    }
  }
  // If the returnObject hasn't been filled(null), log: "not found", because then the search did not find a match
  if (returnObject === null) {
    console.log(
      `The item was not found at any of the indexes, please note the search is case sensitive`
    );
  } else {
    // Otherwise the object was found - return the object for further processing if needed
    return returnObject;
  }
}

// Define a function to find the lowest Value
function findLowest(inputArray) {
  // Use the array.sort function to arrange the input array in ascending order(so the lowest value will be first)
  inputArray.sort((firstShoe, secondShoe) =>
    // Select the .valuePerItem of the objects as the sort value
    firstShoe.valuePerItem < secondShoe.valuePerItem ? -1 : 1
  );
  // Output the first value in the newly sorted array(as it now contains the lowest value)
  console.log(
    `The cheapest shoe in the array is ${inputArray[0].name} with a value of R${inputArray[0].valuePerItem}. \n\nThe item details are as follows:`
  );
  console.table(inputArray[0]);
  // Return the item for processing(just the item, not its value)
  return inputArray[0];
}

// Define a function to find the highest Value
function findHighest(inputArray) {
  // Use the array.sort function to arrange the input array in descending order(so the Highest value will be first)
  inputArray.sort((firstShoe, secondShoe) =>
    // Select the .valuePerItem of the objects as the sort value
    firstShoe.valuePerItem > secondShoe.valuePerItem ? -1 : 1
  );
  // Output the first value in the newly sorted array(as it now contains the highest value)
  console.log(
    `The most expensive shoe in the array is ${inputArray[0].name} with a value of R${inputArray[0].valuePerItem}. \n\nThe item details are as follows:`
  );
  console.table(inputArray[0]);
  // Return the item for processing(just the item, not its value)
  return inputArray[0];
}

function editProperty(object, propertyToChange, newValue) {
  //validate that the property exists(I assumed we are only allowed to change existing properties)
  if (
    propertyToChange === 'name' ||
    propertyToChange === 'productCode' ||
    propertyToChange === 'quantity' ||
    propertyToChange === 'valuePerItem'
  ) {
    //computed value for the property to be changed using []
    object[propertyToChange] = newValue;
    //display the object for output validation
    console.log(
      `You chose to modify the object's "${propertyToChange}" property with the new value "${newValue}". \n\nThe item details are now as follows:`
    );
    console.table(object);
  } else {
    console.log(
      'This property does not exist, please only enter an existing property - NOTE: they are case sensitive'
    );
  }
}

function ascendingOrder(inputArray) {
  // Use the array.sort function to arrange the input array in ascending order
  inputArray.sort((firstShoe, secondShoe) =>
    // Select the .valuePerItem of the objects as the sort value
    firstShoe.valuePerItem < secondShoe.valuePerItem ? -1 : 1
  );
  console.log(
    `the array has now been sorted in ascending order based on the Value Per Item.\n\nThe new order is as follows:`
  );
  console.table(inputArray);
  // Return the inputArray for processing
  return inputArray;
}

// Test the search function:
searchArray('Vans', shoesArray);
// Test the find Lowest Value function:
findLowest(shoesArray);
// Test the find Highest Value function
findHighest(shoesArray);
// Test the ChangeProperty Function - NOTE: function requires you to select which shoe you want to change
editProperty(shoe1, 'name', 'NikeJordans');
// Test the ascendingOrder function
ascendingOrder(shoesArray);
