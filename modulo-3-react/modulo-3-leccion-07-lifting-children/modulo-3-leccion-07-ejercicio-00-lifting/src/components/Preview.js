const Preview = (props) => {
  // Este componente recibe email por props y lo pinta.
  // Y nada más.
  return (
    <div className="preview">
      <p>Tu email es: {props.email}.</p>
      <p>
        Pulsa en <a href={`mailto:${props.email}`}>{props.email}</a> para enviar
        un email.
      </p>
    </div>
  );
};

export default Preview;
