import ModalWindow from "./ModalWindow";

const App = () => {
  return (
    <div>
      <h1>Jugando con ventanas modales</h1>
      <ModalWindow>
        <h1>Contenido de una ventana modal</h1>
      </ModalWindow>
      <ModalWindow>
        <h4>Contenido de la segunda ventana modal</h4>
        <h5>Hola mundo</h5>
      </ModalWindow>
    </div>
  );
};

export default App;
