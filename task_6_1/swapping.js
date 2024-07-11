let number = prompt('Please enter a number of atleast three digits');

//create a new number for the final output
let newNumber = '';

//iterate through the length of the number
for (let i = 0; i < number.length; i++) {
  //when index reaches index 1 (position 2 of the string)
  if (i === 1) {
    //add the last number this position (which in this part of the loop is position 2)
    newNumber += number.at(number.length - 1);
  }
  //if the loop reaches the last index of the string
  else if (i === number.length - 1) {
    //add the number at position 2(index 1)
    newNumber += number.at(1);
  }
  //else add every other number in the string in the standard order(i.e. dont swap anything else)
  else {
    newNumber += number[i];
  }
}
//output
console.log(newNumber);
