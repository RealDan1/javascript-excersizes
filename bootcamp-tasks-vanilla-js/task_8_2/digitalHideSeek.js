//define hide with location as argument
const hide = (location) => {
  //store location in hideLocation
  let hideLocation = location;
  //create new function inside hide called seek
  const seek = () => {
    //reference a variable outside the seek function but inside the hide() function, meaning it forms a closure over hideLocation because hide() will have already executed(closed) but seek can still access hide's variables, even though hide closed.
    return hideLocation; // accessing the variable in this case just returns it but we could have done other things with the variable in the function body (processed it another way). Is this all correct?
  };
  return seek; //returns seek function(without () means it doesnt call/activate the function, it just reutrns the reference to the function);
};

let startGame = hide('under the table'); // place hide into startgame with argument: "under the table", effectively placing seek into startGame - now startGame waits a call, which will effectively call seek(and seek still has access to hideLocation which technically is inside a function that closed already).

console.log(startGame()); //here is the call

console.log(hideLocation); //returns reference Error because hideLocation is defined within the local scope of the hide function and thus is not accessible in the global scope.
