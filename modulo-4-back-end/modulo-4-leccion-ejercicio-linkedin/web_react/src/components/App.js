import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// components
import Login from "./Login";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import Filters from "./Filters";
// services
import getApiData from "../services/api";
import ls from "../services/local-storage";

const App = () => {
  // state
  const cachedContacts = ls.get("contacts", []);

  const [userId, setUserId] = useState("");
  const [loginError, setLoginError] = useState("");

  const [contacts, setContacts] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  const [filterCities, setFilterCities] = useState(ls.get("filterCities", []));

  // effects
  useEffect(() => {
    if (cachedContacts.length === 0) {
      getApiData(userId).then((contactsData) => {
        setContacts(contactsData);
      });
    }
  }, [cachedContacts.length, userId]);

  useEffect(() => {
    ls.set("contacts", contacts);
  }, [contacts]);

  useEffect(() => {
    ls.set("contacts", contacts);
    ls.set("filterName", filterName);
    ls.set("filterGender", filterGender);
    ls.set("filterCities", filterCities);
  }, [contacts, filterName, filterGender, filterCities]);

  // event handlers
  const handleLogin = (data) => {
    return fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dataLogin) => {
        if (dataLogin.success === false) {
          setLoginError(dataLogin.error);
        } else {
          setUserId(dataLogin.userId);
        }
      });
  };

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    } else if (data.key === "city") {
      if (filterCities.includes(data.value)) {
        const newFilterCities = filterCities.filter(
          (city) => city !== data.value
        );
        setFilterCities(newFilterCities);
      } else {
        filterCities.push(data.value);
        setFilterCities([...filterCities]);
      }
    }
  };

  // render

  const filteredContacts = contacts
    .filter((contact) => {
      return contact.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((contact) => {
      if (filterGender === "") {
        return true;
      } else {
        return contact.gender === filterGender;
      }
    })
    .filter((contact) => {
      if (filterCities.length === 0) {
        return true;
      } else {
        return filterCities.includes(contact.city);
      }
    });

  const renderContactDetail = (props) => {
    const routeContactId = props.match.params.contactId;
    const foundContact = contacts.find((contact) => {
      return contact.id === routeContactId;
    });

    if (foundContact !== undefined) {
      return <ContactDetail contact={foundContact} />;
    } else {
      return <p>Usuaria no encontrada</p>;
    }
  };

  const getCities = () => {
    const contactCities = contacts.map((contact) => contact.city);
    let uniqueCities = [...new Set(contactCities)];
    return uniqueCities;
  };

  return (
    <>
      {userId === "" ? (
        <Login handleLogin={handleLogin} loginError={loginError} />
      ) : (
        <Switch>
          <Route exact path="/">
            <>
              <header className="header">
                <h1 className="title--big">Directorio de personas</h1>
              </header>
              <div className="col2">
                <Filters
                  filterName={filterName}
                  filterGender={filterGender}
                  filterCities={filterCities}
                  cities={getCities()}
                  handleFilter={handleFilter}
                />
                <ContactList contacts={filteredContacts} />
              </div>
            </>
          </Route>
          <Route path="/contact/:contactId" render={renderContactDetail} />
        </Switch>
      )}
    </>
  );
};

export default App;
