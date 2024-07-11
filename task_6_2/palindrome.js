let inputWord = prompt('Please enter a word');
//create a new string for the reverse word since strings are immutable
let reverseWord = '';

//initialise while loop to length of the input word
let i = inputWord.length;
while (i > 0) {
  //iterate backwards from the length of the word to zero
  i--;
  //add each letter to the new string in this order(i.e. in reverse order)
  reverseWord += inputWord[i];
}

//check if palindrome or not
if (inputWord === reverseWord) {
  console.log(`${inputWord} is a palindrome`);
} else if (inputWord !== reverseWord) {
  console.log(`${inputWord} is not a palindrome`);
}
