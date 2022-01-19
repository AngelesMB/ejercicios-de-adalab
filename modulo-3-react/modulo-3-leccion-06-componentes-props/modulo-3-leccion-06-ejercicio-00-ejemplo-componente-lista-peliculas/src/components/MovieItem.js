const MovieItem = (props) => {
  return (
    <li className="card">
      <h3 className="card__title">{props.title}</h3>
      <p className="card__description">{props.description}...</p>
    </li>
  );
};
export default MovieItem;
