import "../stylesheets/App.scss";
import { useState, useEffect } from "react";
import getMovies from "../services/fetchMovies";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMoviesData(data));
  }, []);

  return (
    <div className="App page darkmode">
      <Header />
      <Main moviesData={moviesData} />
    </div>
  );
}

export default App;
