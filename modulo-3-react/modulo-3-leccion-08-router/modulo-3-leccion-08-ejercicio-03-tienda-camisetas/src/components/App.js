import "../styles/App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import Catalog from "./Catalog";
import ProductDetail from "./ProductDetail";

function App() {
  const [products, setProducts] = useState([]);

  const URL =
    "https://beta.adalab.es/pw-recursos/apis/tshirt-eshop-v1/products.json";

  // API
  useEffect(() => {
    callToApi(URL).then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <h1>Tienda de camisetas</h1>
      <Switch>
        <Route exact path="/">
          <ul>
            <Catalog products={products} />
          </ul>
        </Route>
        <Route exact path="/product-detail/:id">
          <ProductDetail products={products} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
