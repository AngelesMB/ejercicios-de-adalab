const callToApi = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      const data = response.items;
      return data;
    });
};

export default callToApi;
