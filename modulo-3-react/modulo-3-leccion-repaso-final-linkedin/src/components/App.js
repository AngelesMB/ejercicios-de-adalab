// import "../styles/App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/contactsApi";
import UserList from "./UserList";
import Filters from "./Filters";
import UserDetail from "./UserDetail";
import ErrorDetail from "./ErrorDetail";

function App() {
  // states
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterGender, setFilterGender] = useState("all");
  // para checkbox debemos inicializar a array
  const [filterCities, setFilterCities] = useState([]);

  // effects api
  useEffect(() => {
    callToApi().then((response) => {
      setUsers(response);
    });
  }, []);

  // update
  const updateFilter = (obj) => {
    if (obj.key === "filterName") {
      setFilterName(obj.value);
    } else if (obj.key === "filterGender") {
      setFilterGender(obj.value);
    } else if (obj.key === "filterCity") {
      if (filterCities.includes(obj.value)) {
        const cleanFilterCities = filterCities.filter(
          (eachCity) => eachCity !== obj.value
        );
        setFilterCities(cleanFilterCities);
      } else {
        setFilterCities([...filterCities, obj.value]);
      }
    }
  };

  // filter
  const filteredUsers = users
    .filter((eachUser) => {
      return eachUser.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((eachUser) => {
      // si no han filtrado ("all"), devolvemos todos los usuarios, sino, los que coincidan con el filtro
      return filterGender === "all"
        ? eachUser
        : eachUser.gender === filterGender;
    })
    .filter((eachUser) => {
      // si no hay ciudades en el array (no han marcado nada), devolvemos todos los usarios, sino, los que tengan una ciudad que esté incluida en el array
      if (filterCities.length === 0) {
        return eachUser;
      } else {
        return filterCities.includes(eachUser.city);
      }
    });

  // get cities array
  const getCities = () => {
    // array con todas las ciudades de la api, repetidas incluidas
    const cities = users.map((eachUser) => eachUser.city);
    // hacemos un nuevo set (objeto) con las ciudades que NO se repiten
    const uniqueCitiesObj = new Set(cities);
    // creamos un array a partir de nuestro objeto de ciudades únicas
    const uniqueCitiesArr = [...uniqueCitiesObj];
    return uniqueCitiesArr;
  };

  const renderUserDetail = (props) => {
    const routeId = props.match.params.userId;
    const foundUser = users.find((eachUser) => eachUser.id === routeId);
    // si es undefined, la ruta no existe, return componente de error
    if (foundUser === undefined) {
      return <ErrorDetail />;
    } else {
      return <UserDetail user={foundUser} />;
    }
  };

  return (
    <>
      <h1>Directorio de personas</h1>
      <Switch>
        <Route exact path="/">
          <div className="main__container">
            <div className="filters__container">
              <Filters
                filterName={filterName}
                filterGender={filterGender}
                filterCities={filterCities}
                updateFilter={updateFilter}
                getCities={getCities()}
              />
            </div>
            <UserList users={filteredUsers} />
          </div>
        </Route>
        <Route exact path="/user/:userId" render={renderUserDetail}></Route>
      </Switch>
    </>
  );
}

export default App;
