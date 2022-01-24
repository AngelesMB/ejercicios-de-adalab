const Button = (props) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleButton();
  };
  return (
    <button
      className={`button ${props.class}`}
      disabled={props.disabled}
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
};
export default Button;
