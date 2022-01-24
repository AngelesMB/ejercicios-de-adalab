const Form = (props) => {
  // Cuando la usuaria cambia el input se ejecuta esta función manejadora del evento
  const handleEmail = (ev) => {
    // El componente App pasa a este componente la función updateEmail por props
    // Este componente ejecuta la función updateEmail cuando la usuaria cambia el input
    // Este componente pasa el valor del input a su madre
    props.updateEmail(ev.target.value);
  };

  return (
    <form>
      <label>
        Escribe un email:
        <input type="email" name="name" onChange={handleEmail} />
      </label>
    </form>
  );
};

export default Form;
