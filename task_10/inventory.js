function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

let shoe1 = new Shoes('nike', 'A1', '100', 'R1000');
let shoe2 = new Shoes('adiddas', 'A2', '20', 'R900');
let shoe3 = new Shoes('vans', 'A3', '40', 'R600');
let shoe4 = new Shoes('dc', 'A4', '200', 'R400');
let shoe5 = new Shoes('hoka', 'A5', '120', 'R800');

let shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5];
