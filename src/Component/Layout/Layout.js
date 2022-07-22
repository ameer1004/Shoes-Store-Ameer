import React, { useState } from "react";
import Header from "../Header/Header";
import Menue from "../Menue/Menue";
import Routing from "../Routes/Route";
import "./Layout.css";
import ADIDAS from "../../assets/images/adidas.jpg";
import Nike from "../../assets/images/Nike.jpg";
import Reebok from "../../assets/images/reebok.jfif";
import Tommy from "../../assets/images/tommy.jpg";
import Filla from "../../assets/images/FILLA.jpeg";

const getDefaultProducts = () => {
  const storage = localStorage.getItem("products");
  if (storage) {
    return JSON.parse(storage);
  }

  return [
    { name: "Adidas", size: "32-47", price: "80$", imgUrl: ADIDAS },
    {
      name: "NIKE",
      size: "30-46",
      price: "100$",
      imgUrl: Nike,
    },
    {
      name: "Reebok",
      size: "32-47",
      price: "70$",
      imgUrl: Reebok,
    },
    {
      name: "Tommy",
      size: "32-46",
      price: "170$",
      imgUrl: Tommy,
    },
    {
      name: "Filla",
      size: "29-47",
      price: "65$",
      imgUrl: Filla,
    },
  ];
};

function Layout() {
  const [employees, setEmployees] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProductsOriginal] = useState(getDefaultProducts());

  const setProducts = (cb) => {
    setProductsOriginal((prevProducts) => {
      const newState = cb(prevProducts);
      localStorage.setItem("products", JSON.stringify(newState));
      return newState;
    });
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="Layout">
      <header>
        <Menue cart={cart} />
        <Header />
      </header>

      <main>
        <Routing
          employees={employees}
          setEmployees={setEmployees}
          products={products}
          setProducts={setProducts}
          addToCart={addToCart}
          cart={cart}
        />
      </main>
    </div>
  );
}

export default Layout;
