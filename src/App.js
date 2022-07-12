import React from "react";
import Shoes from "./Component/Shoe";
import ClockTime from "./Component/Time";
import "./Component/Shoe.css";

function App({ products, addToCart, setProducts }) {
  //Parent

  return (
    <div>
      <ClockTime />

      <Shoes
        setProducts={setProducts}
        products={products}
        addToCart={addToCart}
      />
    </div>
  );
}
export default App;
