import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import Main from "./Main";

function App() {
  // states
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const URL = "https://randomuser.me/api/?results=15";

  // effects api
  useEffect(() => {
    callToApi(URL).then((response) => {
      setData(response);
    });
  }, []);

  // handlers
  const updateSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header />
      <Main updateSearch={updateSearch} data={data} searchValue={searchValue} />
    </div>
  );
}

export default App;
