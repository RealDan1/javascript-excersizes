let inputWord = prompt('Please enter a word');
let reverseWord = '';

let i = inputWord.length;
while (i > 0) {
  i--;
  reverseWord += inputWord[i];
}

if (inputWord === reverseWord) {
  console.log(`${inputWord} is a palindrome`);
} else if (inputWord !== reverseWord) {
  console.log(`${inputWord} is not a palindrome`);
}
