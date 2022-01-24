const Product = (props) => {
  // Ejecutamos handleAddToCartButton cuando la usuaria pulsa en Añadir a la cesta
  const handleAddToCartButton = () => {
    // Recibimos de nuestra madre la función addToCart y el productId
    props.addToCart(props.productId);
  };

  return (
    <article className="card">
      <img className="card__img" src={props.imgSrc} alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__description">{props.description}</p>
      <button className="card__btn" onClick={handleAddToCartButton}>
        Añadir a la cesta
      </button>
    </article>
  );
};

export default Product;
