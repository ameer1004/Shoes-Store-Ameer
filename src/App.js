import React from "react";
import Shoes from "./Component/Shoe";
import ClockTime from "./Component/Time";
import "./Component/Shoe.css";

function App({ products, addToCart,shoesss }) {
  //Parent

  return (
    <div>
      <ClockTime />

      <Shoes products={products} addToCart={addToCart} shoesss={shoesss} />
    </div>
  );
}
export default App;
