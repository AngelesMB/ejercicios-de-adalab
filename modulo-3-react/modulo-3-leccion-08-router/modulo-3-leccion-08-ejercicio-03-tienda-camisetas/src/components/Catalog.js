import { Link } from "react-router-dom";

const Catalog = ({ products }) => {
  return products.map((eachProduct) => {
    return (
      <li key={eachProduct.id}>
        <h3>{eachProduct.description}</h3>
        <p>Precio: {eachProduct.price}</p>
        <Link to={`/product-detail/${eachProduct.id}`}>
          Ver detalle del producto
        </Link>
      </li>
    );
  });
};
export default Catalog;
