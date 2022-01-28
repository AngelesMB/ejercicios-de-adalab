import { useParams } from "react-router-dom";

const Product = () => {
  // Con useParams meto en routeParams los parámetros de la ruta actual
  const routeParams = useParams();
  // El console muestra un objeto del tipo { productId: "43823" }
  console.log(routeParams);

  return (
    <div>
      <h2>Detalle del móvil con id: {routeParams.productId}</h2>
    </div>
  );
};

export default Product;
