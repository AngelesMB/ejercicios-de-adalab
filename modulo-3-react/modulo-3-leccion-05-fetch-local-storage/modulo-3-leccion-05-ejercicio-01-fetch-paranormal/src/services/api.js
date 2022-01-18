const callToApi = () => {
  return fetch(`https://api.tvmaze.com/search/shows?q=paranormal`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
      const result = response.map((eachShow) => {
        return {
          name: eachShow.show.name,
        };
      });
      return result;
    });
};

export default callToApi;
