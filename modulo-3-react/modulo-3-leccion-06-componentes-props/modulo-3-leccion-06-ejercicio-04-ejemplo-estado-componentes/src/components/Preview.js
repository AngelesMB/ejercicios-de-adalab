const Preview = (props) => {
  console.log("Renderizando el componente Preview con las props", props);
  return (
    <section>
      <p>Tu nombre es {props.name}</p>
      <p>Tu email es {props.email}</p>
    </section>
  );
};

export default Preview;
