import React from "react";
import "./Cart.css";
function Cart({ cart }) {
  return (
    <div>
      {cart.map((shoe, i) => {
        return (
          <table className="table-container1">
            <thead>
              <th>shoes Names</th>
              <th>shoes size</th>
              <th> shoes price</th>
              <th>Shoes Image</th>
            </thead>
            <tbody>
              <tr key={i} className="shoes-table">
                <td>{shoe.name}</td>
                <td>{shoe.size}</td>
                <td>{shoe.price}</td>
                <td>
                  <img src={shoe.imgUrl} height="40px" width="40px" />
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
export default Cart;
