let number = prompt('Please enter a number of atleast three digits');

let secondDigit = number[1];
let lastDigit = number.at(number.length - 1);

let newNumber = '';
for (let i = 0; i < number.length; i++) {
  if (i === 1) {
    newNumber += number.at(number.length - 1);
  } else if (i === number.length - 1) {
    newNumber += number.at(1);
  } else {
    newNumber += number[i];
  }
}
console.log(newNumber);
