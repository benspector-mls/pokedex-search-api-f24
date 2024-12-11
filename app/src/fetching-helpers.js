export const fetchPokemon = (pokemonName) => {
  console.log('fetching pokemon ' + pokemonName)

  // 1. Invoke fetch with an API endpoint. A promise is returned.

  // 2. Define promise handlers with .then and .catch
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      // 3. Check that the response is ok. If it isn't throw a useful error.
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`)
      }

      // 4. Start reading the response body's ReadableStream
      const readingPromise = response.json();
      return readingPromise
    })
    .then((responseBody) => {
      // 5. When the response body is read, do something with it!
      // What you do will depend on the API you're using
      // TIP: Print the structure of the body to see what you're working with.
      console.log(responseBody);
      return responseBody
    })
    .catch((err) => {
      // 6. Handle Errors
      console.error(err);
    })
}