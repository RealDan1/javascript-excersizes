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
        \nAbilities:
        `
    );
    let abilities = pokemon.abilities;
    for (const ability of abilities) {
      console.log(`\n${ability.ability.name}`);
    }
  })
  //catch the error at any point a promise is rejected and log it to the console
  .catch((error) => {
    console.log(error);
  });

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then((response) => response.json())
//   .then((data) => {
//     const abilities = data.abilities;
//     for (const ability of abilities) {
//       console.log(ability.ability.name); // access the ability name
//       console.log(ability.is_hidden); // access if the ability is hidden
//     }
//   });
