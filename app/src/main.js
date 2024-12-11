import { fetchPokemon } from "./fetching-helpers";
import { showPokemon } from "./dom-helpers";

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const pokemonName = form.pokemonName.value;

  fetchPokemon(pokemonName)
    .then((pokemonData) => {
      showPokemon(pokemonData);
    });
  form.reset();
}

const main = () => {
  fetchPokemon('jigglypuff')
    .then((pokemonData) => {
      showPokemon(pokemonData);
    });

  document
    .querySelector('form')
    .addEventListener('submit', handleSubmit)
}

main();