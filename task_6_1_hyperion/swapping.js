let number = prompt('Please enter a number of atleast three digits');

let secondDigit = number[1]; // fetches secondDigit
let lastDigit = number.at(number.length - 1);

let newNumber = '';
for (let i = 0; i < number.length; i++) {
  if (i === 1) {
    //if replace second number
    newNumber += number.at(number.length - 1);
  } else if (i === number.length - 1) {
    //replace last number
    newNumber += number.at(1);
  } else {
    //else build new string as normal
    newNumber += number[i];
  }
}
console.log(newNumber);
