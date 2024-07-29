function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

let shoe1 = new Shoes('Nike', 'A1', 100, 1000);
let shoe2 = new Shoes('Adiddas', 'A2', 20, 900);
let shoe3 = new Shoes('Vans', 'A3', 40, 600);
let shoe4 = new Shoes('DC', 'A4', 200, 400);
let shoe5 = new Shoes('Hoka', 'A5', 120, 800);

let shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5];
// console.table(shoesArray);

//define a search function that takes a string and an Array as arguments and returns the found array or nothing if not found
let searchArray = (searchFor, inputArray) => {
  let returnArray = null;
  //loop through shoesArray(or any array)
  for (let i = 0; i < inputArray.length; i++) {
    //if (at the index of the current array item) the name contains the search value
    if (inputArray[i].name.includes(searchFor)) {
      //store the index of the found item
      let foundItem = i;
      //firstly console.log the number of the item:
      //then present the full object in a table (to see all its details)
      console.log(
        `The item was found at index ${foundItem} \nThe item details are as follows:`
      );
      //table
      console.table(inputArray[foundItem]);

      //also return the item object incase its needed for further processing:
      returnArray = inputArray[i];
      break;
    } else {
      returnArray = null;
    }
  }
  //if the returnArray hasn't been found, log: "not found"
  if (returnArray === null) {
    console.log(`The item was not found at any of the indexes`);
  } else {
    //otherwise return the array for further processing if needed
    return returnArray;
  }
};

//test the search function
searchArray('vans', shoesArray);
