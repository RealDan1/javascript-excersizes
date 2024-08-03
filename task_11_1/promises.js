// output results
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
    // Log pokemon.abilities in a seperate console.log call because JS handles complex objects inside template literals strangely - this was not mentioned in the task and perhaps should be mentioned otherwise it prints [object Object] if placed inside a template literal.
    console.log(pokemon.abilities);
  })
  // catch the error at any point a promise is rejected and log it to the console
  .catch((error) => {
    console.log(error);
  });
