import "../styles/App.css";
import { useState } from "react";

function App() {
  // const [title, setTitle] = useState("");
  // const [synopsis, setSynopsis] = useState("");
  // const [language, setLanguage] = useState("");

  // const handleTitleChange = (ev) => {
  //   const newValue = ev.currentTarget.value;
  //   setTitle(newValue);
  // };
  // const handleSynopsisChange = (ev) => {
  //   const newValue = ev.currentTarget.value;
  //   setSynopsis(newValue);
  // };
  // const handleLanguageChange = (ev) => {
  //   const newValue = ev.currentTarget.value;
  //   setLanguage(newValue);
  // };

  // Mejor crear OBJETO
  const [data, setData] = useState({
    title: "",
    synopsis: "",
    language: "",
    age: "",
    // Para checkbok usaríamos un array y tendríamos que hacer spread y splice
    //category: [],
  });

  const handleTitleChange = (ev) => {
    const newValue = ev.currentTarget.value;
    // setData({
    //   title: newValue,
    //   synopsis: data.synopsis,
    //   language: data.language,
    // });

    // Mejor usar operador SPREAD
    setData({
      ...data,
      title: newValue,
    });
  };
  const handleSynopsisChange = (ev) => {
    const newValue = ev.currentTarget.value;
    setData({
      ...data,
      synopsis: newValue,
    });
  };
  const handleLanguageChange = (ev) => {
    const newValue = ev.currentTarget.value;
    setData({
      ...data,
      language: newValue,
    });
  };

  const handleRadioChange = (ev) => {
    const newValue = ev.currentTarget.value;
    setData({
      ...data,
      age: newValue,
    });
  };

  // Opción usando 1 sola función para TODOS LOS INPUTS (cambiar función onChange para probar)
  // const handleInputChange = (ev) => {
  //   const prop = ev.currentTarget.id;
  //   const newValue = ev.currentTarget.value;
  //   setData({
  //     ...data,
  //     [prop]: newValue,
  //   });
  // };
  // Si usáramos el atributo name para recoger todos los datos en lugar de id podríamos coger todos los valores juntos (de todos los inputs: tanto text como radio)

  // Si ponemos el preventDefault a todo el form no hace falta colocarlo en cada botón
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleReset = () => {
    setData({
      title: "",
      synopsis: "",
      language: "",
      age: "",
    });
  };

  return (
    <div>
      <header>
        <h1>AdaMDB</h1>
      </header>
      <main>
        <form action="" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Ej: ET"
              onChange={handleTitleChange}
              value={data.title}
            />
          </div>
          <div className="container">
            <label htmlFor="synopsis">Sinopsis</label>
            <textarea
              name="synopsis"
              id="synopsis"
              cols="30"
              rows="10"
              placeholder="Érase una vez..."
              onChange={handleSynopsisChange}
              value={data.synopsis}
            ></textarea>
          </div>
          <div className="container">
            <label htmlFor="language">Idioma</label>
            <select
              name="language"
              id="language"
              onChange={handleLanguageChange}
              value={data.language}
            >
              <option disabled defaultValue value="">
                Escoge una opción
              </option>
              <option value="es">Español</option>
              <option value="cat">Catalán</option>
              <option value="gal">Gallego</option>
              <option value="eus">Euskera</option>
            </select>
          </div>
          <label htmlFor="">
            <input
              type="radio"
              name="age"
              id="age-tp"
              value="tp"
              onChange={handleRadioChange}
              checked={data.age === "tp"}
            />
            TP
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="age"
              id="age-7"
              value="7"
              onChange={handleRadioChange}
              checked={data.age === "7"}
            />
            +7
          </label>
          <button>Enviar</button>
          <button onClick={handleReset}>Borrar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
