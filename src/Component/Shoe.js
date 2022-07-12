import React from "react";
import { useState } from "react";
import Footer from "./Footer/Footer";

function Shoes({ products, addToCart, setProducts }) {
  const [shoesname, setShoesname] = useState("");
  const [shoesize, setShoessize] = useState("");
  const [shoesprice, setShoesprice] = useState("");
  const [shoesimage, setShoesimage] = useState("");
  const changeShoesname = (event) => {
    setShoesname(event.target.value);
  };
  const changeShoessize = (event) => {
    setShoessize(event.target.value);
  };
  const changeShoesprice = (event) => {
    setShoesprice(event.target.value);
  };
  const changeShoesimage = (event) => {
    setShoesimage(event.target.value);
  };
  const addProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      name: shoesname,
      size: shoesize,
      price: shoesprice,
      imgUrl: shoesimage,
    };

    const Result = Validateform(newProduct);
    console.log(newProduct);
    if (Result) {
      setProducts((prevProduct) => [...prevProduct, newProduct]);
      clearState(newProduct);
    }
  };
  const clearState = () => {
    setShoesname("");
    setShoessize("");
    setShoesprice("");
    setShoesimage("");
  };
  return (
    <div className="parentcontainer">
      <div className="container1">
        {products.map((shoe, i) => {
          return (
            <div key={i} className="shoe">
              <h2 className="h2title">{shoe.name}</h2>
              <img src={shoe.imgUrl} className="Img" alt=" Shoe" />
              <ul>
                <li>
                  <strong>Shoes Brand:</strong> {shoe.name}
                </li>
                <li>
                  <strong>Shoes Size:</strong> {shoe.size}
                </li>
                <li>
                  <strong>Shoes Price:</strong> {shoe.price}
                </li>
              </ul>
              <button className="Addcart" onClick={() => addToCart(shoe)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <div className="formcontainer">
        <h3>Form: Add Shoes Product</h3>

        <form>
          <table className="table-formshoes">
            <tbody>
              <tr>
                <td>
                  <label>Shoes Brand:</label>
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeShoesname}
                    value={shoesname}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Shoes Size:</label>
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeShoessize}
                    value={shoesize}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Shoes Price:</label>
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeShoesprice}
                    value={shoesprice}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Shoes Image:</label>
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeShoesimage}
                    value={shoesimage}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn" onClick={addProduct}>
            Add Shoes Products
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
function Validateform(shoees) {
  console.log(shoees);
  const validShoestName = Validateshoesname(shoees.name);
  if (!validShoestName) {
    return false;
  }
  const validShoestSize = Validateshoessize(shoees.size);
  if (!validShoestSize) {
    return false;
  }
  const validShoesPrice = Validateshoesprice(shoees.price);
  if (!validShoesPrice) {
    return false;
  }

  return true;
}
function Validateshoesname(shoesname) {
  if (String(shoesname).length >= 3 && String(shoesname).length <= 8) {
    return true;
  } else {
    alert("The shoes name is invalid");
    return false;
  }
}
function Validateshoessize(shoesize) {
  if (Number(shoesize) >= 24 && Number(shoesize) <= 48) {
    return true;
  } else {
    alert("The shoes size is invalid");
    return false;
  }
}
function Validateshoesprice(shoesprice) {
  if (Number(shoesprice) >= 30 && Number(shoesprice) <= 250) {
    return true;
  } else {
    alert("The shoes price is invalid");
    return false;
  }
}

export default Shoes;
