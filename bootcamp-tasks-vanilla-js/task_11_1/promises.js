// create a variable for the pokemon data
let pokemon;
//do a fetch call to the API and return a promise
fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  // then convert JSON response to an object that we can use
  .then((res) => res.json())
  // then drop the returned object into result so we can log it inside the function
  .then((result) => {
    // pass the result(the object) into the pokemon variable
    pokemon = result;

    // log the details of the pokemon object neatly
    console.log(
      `Name:\n${pokemon.name}
        \nWeight:\n${pokemon.weight}
        \nAbilities:
        `
    );
    // Log pokemon.abilities in a seperate console.log call because JS handles complex(nested) objects inside template literals differently - otherwise it just prints [object Object].
    console.log(pokemon.abilities);
  })
  // Catch the error at any point a promise is rejected and log it to the console
  .catch((error) => {
    console.log(error);
  });
