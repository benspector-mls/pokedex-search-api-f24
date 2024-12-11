export const showPokemon = (pokemonData) => {
  console.log(pokemonData);
  const imgSrc = pokemonData.sprites.front_default;
  const img = document.querySelector('#pokemon-picture>img')
  const nameP = document.querySelector('#pokemon-picture-name');
  img.src = imgSrc;
  nameP.textContent = pokemonData.name
}