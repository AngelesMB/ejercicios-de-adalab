import { useEffect, useState } from "react";
import callToApi from "../services/api";

const App = () => {
  // Estados
  const [shows, setShows] = useState([]);
  // useEffect
  useEffect(() => {
    callToApi().then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setShows(response);
    });
  }, []);

  const showsList = shows.map((eachShow, index) => {
    return <li key={index}>{eachShow.name}</li>;
  });
  
  return (
    <div>
      <h1>Paranormal activity</h1>
      <ul>{showsList}</ul>
    </div>
  );
};
export default App;
