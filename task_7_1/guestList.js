let names = [];

//loop input for all 10 names and add to the array
outerloop: for (let i = 0; i < 11; i++) {
  names[i] = prompt(
    'Input a name of a person you would like to invite to the dinner party'
  );

  //check if input contains any numbers(thus not a name in russia and certain states apparently)
  for (let j = 0; j < 11; j++) {
    //j is inner loop, i is outer loop
    if (names[i].includes(j)) {
      alert(
        'No numbers are allowed, please input only letters for the names. Please refresh the page and try again'
      );
      //break to outerloop so that it doesnt carry on asking to input more names, user must then refresh.
      break outerloop;
    }
  }
}

//check if user will be replacing
let isReplacing = prompt(
  'You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no: '
);
isReplacing.toLowerCase;
//check if replacing or not
if (isReplacing === 'yes') {
  let nameToReplace = prompt('Enter the name of the person to be replaced');
  //find index of chosen name
  let indexToReplace = names.indexOf(nameToReplace);
  //replace that name with nameToReplace
  names.splice(indexToReplace, 1, names[10]);
  //delete the 11th name
  names.splice(10, 1);
  //then print the names with commas in between
  console.log(names.join(', '));
} else if ((isReplacing = 'no')) {
  //if no, delete the 11th name
  names.splice(10, 1);
  //then print the names with commas in between
  console.log(names.join(', '));
} else {
  console.log('Please input "yes" or "no" only');
}
