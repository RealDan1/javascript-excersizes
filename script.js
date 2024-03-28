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

text = "      Apple, Banana";
let trimmedText = text.trimStart();
console.log(trimmedText);
let pad = trimmedText.padStart(6, 5);
console.log(pad);