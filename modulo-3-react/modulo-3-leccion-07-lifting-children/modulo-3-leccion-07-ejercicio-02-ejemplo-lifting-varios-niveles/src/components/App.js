import ProductList from "./ProductList";

const App = () => {
  const addToCart = (productId) => {
    console.log("La usuaria quiere añadir a la cesta el producto:", productId);
  };

  return (
    <div>
      <h1>Tienda de camisetas frikis</h1>
      <ProductList
        productId="349"
        imgSrc="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
        name="Camiseta React JS"
        description="Camiseta para mujer de cuello ancho"
        addToCart={addToCart}
      />
    </div>
  );
};

export default App;
