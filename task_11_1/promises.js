//output results
let pokemon = [];
fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  //convert response to a json object
  .then((res) => res.json())
  //output results
  .then((result) => {
    pokemon = result;
    console.log(
      `name:
${pokemon.name}

weight:
${pokemon.weight}`
    );
  });
