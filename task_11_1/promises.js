//output results
let pokemon = [];
fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  //convert response to a json object
  .then((res) => res.json())
  //output results
  .then(
    (result) => {
      pokemon = result;
      console.log(
        `Name:
${pokemon.name}

Weight:
${pokemon.weight}`
      );
    },
    (error) => {
      // Log error in the console
      console.log(error);
    }
  );
