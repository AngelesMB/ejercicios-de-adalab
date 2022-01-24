import Product from "./Product";

const ProductList = (props) => {
  return (
    <ul className="cards">
      <li>
        <Product
          productId={props.productId}
          imgSrc={props.imgSrc}
          name={props.name}
          description={props.description}
          addToCart={props.addToCart}
        />
      </li>
    </ul>
  );
};

export default ProductList;
