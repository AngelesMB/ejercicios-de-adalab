const callToApi = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      const dataFromApi = response.results.map((eachResponse) => {
        const result = {
          name: eachResponse.name.first + " " + eachResponse.name.last,
          gender: eachResponse.gender,
          age: eachResponse.dob.age,
          image: eachResponse.picture.thumbnail,
        };
        return result;
      });
      return dataFromApi;
    });
};

export default callToApi;
