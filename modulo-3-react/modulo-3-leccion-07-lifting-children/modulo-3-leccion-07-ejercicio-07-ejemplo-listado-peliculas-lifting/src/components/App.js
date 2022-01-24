import "../stylesheets/App.scss";
import { useState, useEffect } from "react";
import getMovies from "../services/fetchMovies";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    getMovies().then((data) => setMoviesData(data));
  }, []);

  // const handleChangeNewTitle = (ev) => {
  //   setNewTitle(ev.currentTarget.value);
  // };
  // const handleChangeNewDescription = (ev) => {
  //   setNewDescription(ev.currentTarget.value);
  // };

  // Ahora con una función en lugar de 2 que reciben el evento entero
  const changeForm = (name, value) => {
    if (name === "newTitle") {
      setNewTitle(value);
    } else if (name === "newDescription") {
      setNewDescription(value);
    }
  };

  const handleNewMovie = () => {
    setMoviesData([
      ...moviesData,
      { title: newTitle, synopsis: newDescription, id: Math.random() * 1000 },
    ]);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <div className="App page darkmode">
      <Header />
      <Main
        moviesData={moviesData}
        newTitle={newTitle}
        newDescription={newDescription}
        changeForm={changeForm}
        handleNewMovie={handleNewMovie}
        // handleChangeNewTitle={handleChangeNewTitle}
        // handleChangeNewDescription={handleChangeNewDescription}
      />
    </div>
  );
}

export default App;
