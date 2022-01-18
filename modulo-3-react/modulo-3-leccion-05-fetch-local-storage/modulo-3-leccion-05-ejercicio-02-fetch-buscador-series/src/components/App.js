import "../styles/App.css";
import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  const URL = "https://api.tvmaze.com/search/shows?q=";

  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (ev) => {
    setSearchValue(ev.currentTarget.value);
  };

  // API
  useEffect(() => {
    callToApi(URL, searchValue).then((response) => {
      setData(response);
    });
  }, [searchValue]);

  const listHtml = data.map((eachData) => {
    return (
      <li key={eachData.id}>
        Título: {eachData.name} - ID: {eachData.id}
      </li>
    );
  });

  return (
    <div>
      <h1>Buscador de series</h1>
      <label htmlFor="search">
        Busca tu serie:
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={handleSearch}
        />
      </label>
      <ol>{listHtml}</ol>
    </div>
  );
}

export default App;
