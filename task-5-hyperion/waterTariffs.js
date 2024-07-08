let litres = prompt('How many litres of water have you used?');
litres = +litres;

let stringIndigent = prompt(
  'Is your household regular or indigent? please only enter "regular" or "indigent"'
);

let indigent;
let payment;

if (stringIndigent.toLowerCase() === 'regular') {
  indigent = false;
} else {
  indigent = true;
}

if (litres > 0 && litres <= 6000 && indigent) {
  console.log('You pay nothing. Its free');
} else if (litres > 0 && litres <= 6000 && !indigent) {
  console.log(`You pay R${(litres / 1000) * 15.73}`);
} else if (litres > 6000 && litres <= 10500 && indigent) {
  console.log('You pay nothing. Its free');
} else if (litres > 6000 && litres <= 10500 && !indigent) {
  payment = 15.73 * 6 + 22.38 * ((litres - 6000) / 1000);
  console.log(`You pay R${payment.toFixed(2)}`);
} else if (litres > 10500 && litres <= 35000 && indigent) {
  //code copypasted from here need to update these calculations
}
