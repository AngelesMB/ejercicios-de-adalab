function getMovies() {
  return fetch(
    "https://beta.adalab.es/pw-recursos/apis/adamdb-v1/books_with_id.json"
  ).then((response) => response.json());
}

export default getMovies;
