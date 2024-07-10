let motherName = prompt('What is your mother’s first name?');

let street = prompt('What is the name of the street you grew up on?');

let color = prompt('What is your favourite colour as a child?');

let age = prompt('What is your current age?');

let number10 = prompt('Please enter a number between 1 and 10');

age = Number(age);

number10 = +number10;

console.log(`In ${number10} years you are going to meet your best friend named ${motherName} ${street}.
You will get married in ${age + number10} years and have ${
  age % number10
} children.
In ${Math.round(
  age / number10
)} years you are going to dye your hair ${color}.`);
