// create an array for the pokemon data
let pokemon = [];
fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  // convert JSON response to a object that we can use
  .then((res) => res.json())
  // drop the returned object into result
  .then((result) => {
    // pass result(the object) into pokemon array
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
