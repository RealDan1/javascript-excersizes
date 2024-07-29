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

//Define a search function that takes a string and an Array of objects as arguments and outputs the details of the found object if it matches the string or outputs an error if not - it also returns the object for further processing if found
let searchArray = (searchFor, inputArray) => {
  let returnArray = null;

  //loop through shoesArray(or any array)
  for (let i = 0; i < inputArray.length; i++) {
    //if (at the index of the current array item) the name contains the search value
    if (inputArray[i].name.includes(searchFor)) {
      //store the index of the found item
      let foundItem = i;
      //firstly console.log the number of the item:
      //then present the full object in a table (to see all the details of the shoe)
      console.log(
        `The item was found at index ${foundItem} \nThe item details are as follows:`
      );
      console.table(inputArray[foundItem]);

      //also add the item to the "returnArray" variable for return later - if the search finds nothing this will remain null and an error message will be shown
      returnArray = inputArray[i];

      break;
    }
  }
  //if the returnArray hasn't been filled(null), log: "not found", because then the search did not find a match
  if (returnArray === null) {
    console.log(
      `The item was not found at any of the indexes, please note the search is case sensitive`
    );
  } else {
    //otherwise the array was found - return the array for further processing if needed
    return returnArray;
  }
};

//test the search function
searchArray('Vans', shoesArray);
