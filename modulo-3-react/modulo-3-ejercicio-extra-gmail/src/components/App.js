import "../styles/App.scss";
import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import dataJSON from "../data/data.json";
import Header from "./Header";
import EmailDetail from "./EmailDetail";
import EmailListItem from "./EmailListItem";

function App() {
  // states
  const [data, setData] = useState(dataJSON.results);
  const [searchValue, setSearchValue] = useState("");
  const [deletedData, setDeletedData] = useState([]);

  // handlers
  const handleRestore = (ev) => {
    const id = ev.currentTarget.id;
    const cleanDeletedData = deletedData.filter(
      (eachData) => eachData.id !== id
    );
    setDeletedData(cleanDeletedData);
    const emailToRestore = deletedData.filter((eachData) => eachData.id === id);
    setData([...data, emailToRestore[0]]);
  };

  //update
  const updateSearch = (value) => {
    setSearchValue(value);
  };

  const updateEmailArrays = (id) => {
    const cleanData = data.filter((eachData) => eachData.id !== id);
    setData(cleanData);
    const deletedEmail = data.filter((eachData) => eachData.id === id);
    setDeletedData([...deletedData, deletedEmail[0]]);
  };

  // render
  const renderHtmlRows = () => {
    // Filtramos el listado
    const filteredData = data.filter((eachData) => {
      return (
        eachData.fromName.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachData.subject.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    // Si ningún elemento coincide con lo buscado, devolvemos mensaje
    if (filteredData.length === 0) {
      return (
        <tr className="table__row">
          <td>Ningún correo coincide con tu búsqueda.</td>
        </tr>
      );
      // Si hay coincidencias, devolvemos listado filtrado
    } else {
      return filteredData.map((eachData) => (
        <EmailListItem
          key={eachData.id}
          id={eachData.id}
          fromName={eachData.fromName}
          subject={eachData.subject}
          date={eachData.date}
          updateEmailArrays={updateEmailArrays}
        />
      ));
    }
  };

  const renderDeletedDataHtml = () => {
    // Filtramos el listado
    const filteredData = deletedData.filter((eachData) => {
      return (
        eachData.fromName.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachData.subject.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    // Si ningún elemento coincide con lo buscado, devolvemos mensaje
    if (filteredData.length === 0) {
      return (
        <tr className="table__row">
          <td>Ningún correo coincide con tu búsqueda.</td>
        </tr>
      );
      // Si hay coincidencias, devolvemos listado filtrado
    } else {
      return filteredData.map((eachData) => (
        <tr className="table__row notClickable" key={eachData.id}>
          <td>{eachData.fromName}</td>
          <td>{eachData.subject}</td>
          <td>{eachData.date}</td>
          <td>
            <i
              className="fa fa-trash-restore icon"
              aria-hidden="true"
              id={eachData.id}
              onClick={handleRestore}
            />
          </td>
        </tr>
      ));
    }
  };
  const emptyTrashMessageHtml = (
    <tr className="table__row notClickable">
      <td>No hay correos en la papelera.</td>
    </tr>
  );

  const emptyInboxMessageHtml = (
    <tr className="table__row notClickable">
      <td>No hay correos en la bandeja de entrada.</td>
    </tr>
  );

  const routeData = useRouteMatch("/email/:id");

  const getSelectedEmail = () => {
    const selectedEmailId = routeData !== null ? routeData.params.id : "";
    const selectedEmail = data.find(
      (eachData) => eachData.id === selectedEmailId
    );
    return selectedEmail;
  };
  return (
    <div>
      <Header searchValue={searchValue} updateSearch={updateSearch} />
      <Switch>
        <Route exact path="/">
          <main className="main">
            <div className="main__container">
              <table className="table">
                <thead className="table__header">
                  <tr>
                    <th colSpan="4">Bandeja de entrada</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length !== 0 ? renderHtmlRows() : emptyInboxMessageHtml}
                </tbody>
              </table>
            </div>
          </main>
        </Route>
        <Route exact path="/trash">
          <main className="main">
            <div className="main__container">
              <table className="table">
                <thead className="table__header">
                  <tr>
                    <th colSpan="4">Correos eliminados</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedData.length !== 0
                    ? renderDeletedDataHtml()
                    : emptyTrashMessageHtml}
                </tbody>
              </table>
            </div>
          </main>
        </Route>
        <Route exact path="/email/:id">
          <main className="main">
            <div className="main__container">
              <EmailDetail
                updateEmailArrays={updateEmailArrays}
                selectedEmail={getSelectedEmail()}
              />
            </div>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
