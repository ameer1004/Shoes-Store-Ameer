import React from "react";
import { useState } from "react";

function Shoes({ products, addToCart, setShoes }) {
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
  const transferValue = (event) => {
    console.log("submit");
    event.preventDefault();
    const shoees = {
      shoesname,
      shoesize,
      shoesprice,
      shoesimage,
    };
    const result = validateform(shoees);
    console.log(shoees);
    if (result) {
      setShoes((prevshoees) => [...prevshoees, shoees]);
      clearState(shoees);
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
              <h2>{shoe.name}</h2>
              <img src={shoe.imgUrl} className="Img" alt="Adidas Shoe" />
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
      return (
      <div className="formcontainer">
        <h3>Form: Add Shoes Product</h3>

        <form>
          <table className="table-formshoes">
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
                  vlaue={shoesimage}
                />
              </td>
            </tr>
            <button className="btn" onClick={transferValue}>
              Add Shoes Products
            </button>
          </table>
        </form>
      </div>
      );
    </div>
  );
}
function validateform(shoees) {
  const validFirstName = Validateshoesname(shoees.shoesname);
  if (!validFirstName) {
    return false;
  }
  const validLastName = Validateshoessize(shoees.shoesize);
  if (!validLastName) {
    return false;
  }
  const validTitle = Validateshoesprice(shoees.shoesprice);
  if (!validTitle) {
    return false;
  }
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
