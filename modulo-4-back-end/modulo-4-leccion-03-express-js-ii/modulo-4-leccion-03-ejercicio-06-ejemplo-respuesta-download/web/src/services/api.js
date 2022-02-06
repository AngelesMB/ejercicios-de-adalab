const callToApi = (URL) => {
  // const callToApi = (URL, searchValue) => {
  return fetch(URL)
      //   return fetch(`${URL}?search=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((eachData) => {
          return {
            name: eachData.name.first + " " + eachData.name.last,
            photo: eachData.picture.medium,
            id: eachData.login.uuid,
            city: eachData.location.city,
            age: eachData.dob.age,
            gender: eachData.gender,
            email: eachData.email,
          };
        });
        return cleanData;
      })
};

export default callToApi;
