const button = document.getElementById("get-pokemon");

function getPokemon(){
  const numPokemon = document.getElementById("num-pokemon").value;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`;

  axios.get(url).then(res => {
    res.data.results.forEach(pokemon => {
      const item = document.createElement("li");
      item.innerText = pokemon.name;
      document.getElementById("pokemon-list").appendChild(item);
    })
  });
}

button.addEventListener("click", getPokemon);