const callToApi = (URL, searchValue) => {
  return fetch(URL + searchValue)
    .then((response) => response.json())
    .then((response) => {
      const data = response.map((eachResponse) => {
        const result = {
          name: eachResponse.show.name,
          id: eachResponse.show.id,
        };
        return result;
      });
      return data;
    });
};

export default callToApi;
