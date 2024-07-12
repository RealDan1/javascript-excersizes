//create translator map with a constructor for faster initialisation
//made keys lowercase so that input can be checked against keys in lowercase
let translator = new Map([
  ['good', 'Gut'],
  ['day', 'Tag'],
  ['dog', 'Hund'],
  ['cat', 'Katze'],
  ['umbrella', 'Regenschirm'],
  ['room', 'Zimmer'],
  ['please', 'Bitte'],
  ['friend', 'Freund'],
  ['house', 'Haus'],
]);

//add 10th word with .set() just for practice(in practice I will use .set for dynamic input, constructor for repetitive input)
translator.set('yes', 'ja');

//get user input "chosen word" for translation
let input =
  prompt(`please select one of the ten words to translate from english to german:
  1. Good
  2. Day
  3. Dog
  4. Cat
  5. Umbrella
  6. Room
  7. Please
  8. Friend
  9. House
  10. Yes`);

//make selected word lowercase for key check
input = input.toLowerCase();
//check if translator contains the word (with map.has()), otherwise display "incorrect input"
if (translator.has(input)) {
  //output selected word with .get()
  console.log(translator.get(input));
} else {
  console.log('Please only choose from the list of words');
}
