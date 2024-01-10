import './style.css'

/* 
When the page loads:
* fetch pikachu (make sure to catch any errors)
* render pikachu data to the screen
* add an event listener for the form

When the form is submitted:
* grab data from the form
* use that data to fetch a new pokemon (make sure to catch any errors)
* render that pokemon to the screen
*/

const getPokemonData = (pokemonName) => {
  const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  promise
    .then((response) => response.json())
    .then((data) => {
      // render the data
      console.log(data);
      const img = document.querySelector("#pokemon-picture>img")
      const p = document.querySelector("#pokemon-picture>p")
      img.src = data.sprites.front_default;
      p.textContent = data.name
    })
    .catch((error) => console.error(error.message));
}

const searchForPokemon = (e) => {
  // stop the reload/redirect
  e.preventDefault();

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  console.log('here is your data:', formObj.pokemon);

  getPokemonData(formObj.pokemon)

  form.reset();
}

const main = () => {
  getPokemonData("pikachu");

  // add a submit event listener to the form
  const form = document.querySelector("#pokemon-search-form")
  form.addEventListener('submit', searchForPokemon)
}

main(); // running when the page loads