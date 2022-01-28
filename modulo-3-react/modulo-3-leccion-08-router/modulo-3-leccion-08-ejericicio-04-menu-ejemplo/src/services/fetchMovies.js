function getMoviesFromApis() {
  return fetch(
    "https://beta.adalab.es/pw-recursos/apis/adamdb-v1/books_with_id.json"
  ).then((response) => {
    return response.json();
  });
}

export default getMoviesFromApis;
