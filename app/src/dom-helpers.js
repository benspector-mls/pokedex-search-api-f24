export const showPokemon = (pokemonData) => {
  console.log("rendering pokemon: " + pokemonData)
  
  const img = document.querySelector('#pokemon-picture>img')
  const nameP = document.querySelector('#pokemon-picture-name');

  img.src = pokemonData.sprites.front_default;
  nameP.textContent = pokemonData.name
}
