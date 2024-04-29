// bigint
let a = 123456789012345678901234567890123456789123451340n;
console.log(a);
console.log(typeof a);

// Backtick strings(extended capability)
let name1 = "John Smith";
console.log(`Your name is ${name1}`);

// Escape character '\'
const bigmouth = "I've got no right to take my place…";
console.log(bigmouth);

// String method - charAt(position)
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);

// String method - at()
const name2 = "W3Schools";
let letter1 = name2.at(2);
console.log(letter1);

// String method - Property Access [ ] - same technique as at
const name3 = "W3Schools";
console.log(name3[3]);

// There are 3 methods for extracting a part of a string:

// slice(start, end) - note the end char is cut off(not included)
// substring(start, end)
// substr(start, length)
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

// Negative counts from end of string
text = "Apple, Banana, Kiwi";
part = text.slice(-12, -6);
console.log(part);

// TrimStart() and trimEnd();
text = "      Apple, Banana";
let trimmedText = text.trimStart();
console.log(trimmedText);
let pad = trimmedText.padStart(20, 0); // count is total char count, not just adding a number of times
console.log(pad);
text = text.trimStart();

//replace()
let replaced = text.replace("Banana", "Strawberry");
console.log(replaced);

// Replace all matches in string (\g global)
// and case insensitive (\i insensitive)
// gi combines both
text = "Banana Banana banana banana";
replaced = text.replace(/Banana/gi, "Strawberry");
console.log(replaced);
// replaced = text.replace(/Banana/i, "Strawberry");
// console.log(replaced);
// No need for this code anymore^

// first array:
text = "Hello world";
let myArray = text.split("");
console.log(typeof myArray);

// first if statement:
let time = new Date().getHours();
let greeting = "Good evening";
if (time < 18 && time > 11) {
    greeting = "Good Day";
    console.log(greeting);
} else if (time < 11 && time > 0) {
    greeting = "Good morning";
    console.log(greeting);
} else {
    console.log(greeting);
}

// Test not
console.log(!null);
// inverts truthy/falsy value to boolean
// !! double invert = essentially converts it to a normal boolean

//If else excersize:
// let value = prompt("enter any number");
// if (value > 0) {
//     alert("1");
// } else if (value == 0) {
//     alert("0");
// } else {
//     alert("-1");
// }

// Ternary
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// Small ternary test
a = 1;
let b = 2;
let result = a + b < 4 ? "below" : "over";
console.log(result);

// Test switch/case:
let x = 20;
switch (x) {
    case 3:
        console.log("its one");
        break;
    case 20:
    case 22:
        console.log("its 20 or 22");
        break;
}

// First function: format test
function nameAndAge(name, age) {
    return "hello my name is " + name + ", and my age is " + age + ".";
}
console.log(nameAndAge("alex", 24));
// Try something quick - make a console log function:
function logThis1(text1) {
    return console.log(text1);
}

logThis1(nameAndAge("daneel", 24));
// Wow it worked...

//function to perform action
function testFunction(name) {
    message = "hello, " + name;
    console.log(message);
}
testFunction("hamsworth");

// Function to return a value
function returnMe() {
    let value = "its a lonely world";
    return value;
}
console.log(returnMe());

// Test arrow func tion:
const namevar = (name1) => `Hello, ${name1}!`;
const greet = namevar("Dan1");
console.log(greet);

// Fucntion w empty return that stops the function halfway
function age_test(age) {
    if (age <= 18) {
        console.log("are you sure you are old enough?");
        return;
    }
    console.log("Proceed");
}
age_test(18);

// Test a prompt function
// Let age = prompt("what is your age?");
// This creates popup dialogue

// Odinproject Javascript script excersize:
// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// LastLetter("abcd") should return "d"

// 1
function add7(n) {
    return n + 7;
}
console.log(add7(3));

// 2
let multiply = (n, y) => n * y;
console.log(multiply(2, 4));

// 3
function capitalize(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("signAl"));

// 4
function lastLetter(word) {
    let stringCount = word.length;
    return word.charAt(stringCount - 1);
}
console.log(lastLetter("abcd"));

// Testing map() in arrays:

// function toUpper(string) {
//     return string.toUpperCase();
//   }

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map((string) => string.toUpperCase());
// I refined the code here by =>
console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// Test for loop even outputter
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        //alert(i);
    }
}

// Replace for with while
// let i = 0;
// while (i < 3) {
//     //alert(`number ${i}!`);
//     i++;
// }

// My computer did not like this code.. at all
// let k = 0;
// let userInput;
// while (k <= 100) {
//     userInput = prompt("please enter a number more than");
//     if (userInput <= 100) {
//         userInput = prompt("please enter a number more than1111111");
//     } else if (!userInput) {
//         k = 1001;
//         break;
//     } else {
//         alert("code done");
//         k = 1001;
//         break;
//     }
// }

// This was the correct code
// let num;

// do {
//     num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let n = parseInt(prompt("please input n larger than one please"));
// let printString = "";
// for (let i = 1; i < n; i++) {
//     if (i % 1 === 0 && i % n == 0) {
//         printString = printString + "," + i;
//     }
// }
// console.log(printString);
