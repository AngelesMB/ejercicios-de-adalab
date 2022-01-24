const ModalWindow = (props) => {
  return (
    <section className="modal-window">
      <p>Esto es una ventana modal</p>
      {props.children}
    </section>
  );
};

export default ModalWindow;
