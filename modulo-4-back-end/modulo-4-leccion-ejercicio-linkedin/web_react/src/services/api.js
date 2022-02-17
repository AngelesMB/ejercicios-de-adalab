const getApiData = (userId) => {
  return fetch("http://localhost:3001/contacts", {
    method: "GET",
    headers: { userId: userId },
  })
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((user) => {
        return {
          id: user.uuid,
          gender: user.gender,
          email: user.email,
          city: user.city,
          country: user.country,
          image: user.picture,
          name: `${user.firstName} ${user.lastName}`,
        };
      });
      return cleanData;
    });
};

export default getApiData;
