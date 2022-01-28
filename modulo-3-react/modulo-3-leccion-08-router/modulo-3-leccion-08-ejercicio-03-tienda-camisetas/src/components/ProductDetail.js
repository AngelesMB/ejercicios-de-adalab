import { Link, useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const routeData = useParams();
  const getProduct = () => {
    // comprobamos que la ruta exista y no sea undefined
    if (routeData) {
      const routeId = routeData.id;
      const selectedProduct = products.find(
        (eachProduct) => eachProduct.id === routeId
      );
      // comprobamos que el producto existe y sino lanzamos error de producto no encontrado
      if (selectedProduct) {
        return (
          <>
            <h3>{selectedProduct.description}</h3>
            <p>Precio: {selectedProduct.price}</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              omnis corrupti quasi iste similique. Modi nesciunt consectetur
              voluptate magni, dignissimos aut impedit quibusdam minima dolorem
              iste, accusantium quod qui! A!
            </p>
          </>
        );
      } else {
        return <h3>Producto no encontrado</h3>;
      }
    }
  };

  return (
    <>
      {getProduct()}
      <Link to="/">Volver al catálogo</Link>
    </>
  );
};

export default ProductDetail;
