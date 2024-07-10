// let inputWord = prompt('Please enter a word');
let inputWord = 'ace';
let reverseWord = '';

let i = inputWord.length;
while (i > 0) {
  i--;
  reverseWord += inputWord[i];
}

console.log(reverseWord);
