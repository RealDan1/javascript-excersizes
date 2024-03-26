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