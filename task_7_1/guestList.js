let names = [];
//loop input for all 10 names and add to the array

outerloop: for (let i = 0; i < 10; i++) {
  names[i] = prompt(
    'Input a name of a person you would like to invite to the dinner party'
  );

  //check if input contains any numbers(thus not a name in russia and certain american states apparently)
  for (let j = 0; j < 10; j++) {
    //j is inner loop, i is outer loop
    if (names[i].includes(j)) {
      alert(
        'No numbers are allowed, please input only letters for the names. Please refresh the page and try again'
      );
      //break to outerloop so that it doesnt carry on asking to input more names
      break outerloop;
    }
  }
}

let isReplacing = prompt(
  'You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no: '
);

if (isReplacing === 'yes') {
}
