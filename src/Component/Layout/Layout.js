import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menue from "../Menue/Menue";
import Routing from "../Routes/Route";
import "./Layout.css";
import ClockTime from "../Time";
import ADIDAS from "../../assets/images/adidas.jpg";
import Nike from "../../assets/images/Nike.jpg";
import Reebok from "../../assets/images/reebok.jfif";
import Tommy from "../../assets/images/tommy.jpg";
import Filla from "../../assets/images/FILLA.jpeg";

function Layout() {
  const [employees, setEmployees] = useState([]);
  const [shoesss, setShoes] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
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
  ]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="Layout">
      <header>
        <Menue cart={cart} />
        <Header />
      </header>
      <div>
        <ClockTime />
      </div>

      <main>
        <Routing
          employees={employees}
          setEmployees={setEmployees}
          products={products}
          setProducts={setProducts}
          addToCart={addToCart}
          cart={cart}
          shoesss={shoesss}
          setShoes={setShoes}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
