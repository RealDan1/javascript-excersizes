// bigint
let a = 123456789012345678901234567890123456789123451340n;
console.log(a);
console.log(typeof a);

// backtick strings(extended capability)
let name1 = "John Smith";
console.log(`Your name is ${name1}`);

// escape character '\'
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

//String method - charAt(position)
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);

//String method - at()
const name2 = "W3Schools";
let letter1 = name2.at(2);
console.log(letter1);

//String method - Property Access [ ] - same technique as at
const name3 = "W3Schools";
console.log(name3[3]);

// There are 3 methods for extracting a part of a string:

// slice(start, end) - note the end char is cut off(not included)
// substring(start, end)
// substr(start, length)
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

//negative counts from end of string
text = "Apple, Banana, Kiwi";
part = text.slice(-12,-6);
console.log(part); 

//trimStart() and trimEnd();
text = "      Apple, Banana";
let trimmedText = text.trimStart();
console.log(trimmedText);
let pad = trimmedText.padStart(20, 0); // count is total char count, not just adding a number of times
console.log(pad);
text = text.trimStart();

//replace() 
let replaced = text.replace("Banana", "Strawberry");
console.log(replaced);

//replace all matches in string (\g global) 
//and case insensitive (\i insensitive) 
//gi combines both
text = "Banana Banana banana banana"
replaced = text.replace(/Banana/gi, "Strawberry");
console.log(replaced);
// replaced = text.replace(/Banana/i, "Strawberry");
// console.log(replaced);  
//no need for this code anymore^

//first array:
text = "Hello world";
let myArray = text.split("");
console.log(typeof(myArray));

//first if statement:
let time = new Date().getHours();
let greeting = "Good evening";
if (time < 18 && time > 11) {
    greeting = "Good Day"
    console.log(greeting);

} else if (time < 11 && time > 0) {
    greeting = "Good morning"
    console.log(greeting);
}
else {
    console.log(greeting);
}

//test not
console.log (!null);
//inverts truthy/falsy value to boolean
//!! double invert = essentially converts it to a normal boolean

//If else excersize:
// let value = prompt("enter any number");
// if (value > 0) {
//     alert("1");
// } else if (value == 0) {
//     alert("0");
// } else {
//     alert("-1");
// }

//Ternary
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

//small ternary test
a = 1;
let b = 2;
let result = (a + b < 4)? 'below' : 'over' ;
console.log(result);

// test switch/case:
let x = 20;
switch(x) {
    case 3:
        console.log("its one");
    break;
    case 20:
    case 22:
        console.log("its 20 or 22");
    break;
}

// first function: format test
function nameAndAge(name, age){
    return "hello my name is " + name + ", and my age is " + age + ".";

}
console.log (nameAndAge("alex", 24));
//try something quick - make a console log function:
function logThis1(text1) {
return console.log(text1);
}

logThis1(nameAndAge("daneel",24));
//wow it worked...

