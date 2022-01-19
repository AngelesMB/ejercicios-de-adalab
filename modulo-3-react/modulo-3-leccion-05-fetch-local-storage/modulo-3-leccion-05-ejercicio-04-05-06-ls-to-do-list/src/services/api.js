const callToApi = (URL) => {
  // const callToApi = (URL, searchValue) => {
  return (
    fetch(URL)
      //   return fetch(`${URL}?search=${searchValue}`)
      .then((response) => response.json())
      .then((response) => {
        const result = {
          name: response.name,
          birthYear: response.birth_year,
          height: response.height,
          mass: response.mass,
          eyeColor: response.eye_color,
        };
        return result;
      })
  );
};

export default callToApi;
