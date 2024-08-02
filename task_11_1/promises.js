//output results
let pokemon = [];
fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  //convert JSON response to a object that we can use
  .then((res) => res.json())
  //drop the returned object into result
  .then((result) => {
    // pass result(the object) into pokemon array
    pokemon = result;
    //log the details of the pokemon object neatly
    console.log(
      `Name:\n${pokemon.name}
        \nWeight:\n${pokemon.weight}
        \n${pokemon.abilities.ability[0].name}

        `
    );
    let abilities1 = pokemon.abilities;
    for (const ability in abilities1) {
      console.log(`\nAbilities:\n${ability.name}`);
    }
  })
  //catch the error at any point a promise is rejected and log it to the console
  .catch((error) => {
    console.log(error);
  });
