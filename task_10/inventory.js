function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

//store all shoes
let shoe1 = new Shoes('Nike', 'A1', 100, 1000);
let shoe2 = new Shoes('Adiddas', 'A2', 20, 900);
let shoe3 = new Shoes('Vans', 'A3', 40, 600);
let shoe4 = new Shoes('DC', 'A4', 200, 400);
let shoe5 = new Shoes('Hoka', 'A5', 120, 800);

let shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5];
// console.table(shoesArray);

// Define a search function that takes a string and an Array of objects as arguments and outputs the details of the found object if it matches the string or outputs an error if not
//It also returns the object for further processing if found
let searchArray = (searchFor, inputArray) => {
  //Define a "returnObject" variable to return later - if the search finds nothing this will remain null and an error message will be shown
  let returnObject = null;

  //loop through shoesArray(or any array)
  for (let i = 0; i < inputArray.length; i++) {
    //if (at the index of the current array item) the name contains the search value
    if (inputArray[i].name.includes(searchFor)) {
      //firstly console.log the index of the item:
      //then present the full object in a table (to see all the details of the shoe)
      console.log(
        `The item was found at index ${i} \nThe item details are as follows:`
      );
      console.table(inputArray[i]);

      //also store the item to return it later - if the search finds nothing this will remain null and an error will be displayed
      returnObject = inputArray[i];
      //stop the loop because a match was found
      break;
    }
  }
  //if the returnObject hasn't been filled(null), log: "not found", because then the search did not find a match
  if (returnObject === null) {
    console.log(
      `The item was not found at any of the indexes, please note the search is case sensitive`
    );
  } else {
    //otherwise the object was found - return the object for further processing if needed
    return returnObject;
  }
};

//test the search function
searchArray('Vans', shoesArray);
