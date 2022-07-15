import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  const tablerows = cart.map((shoe, i) => {
    return (
      <tr key={i} className="shoes-row">
        <td>{shoe.name}</td>
        <td>{shoe.size}</td>
        <td>{shoe.price}</td>
        <td>
          <img src={shoe.imgUrl} height="40px" width="40px" alt="shoe" />
        </td>
      </tr>
    );
  });
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="shoes-row">
            <th>shoes Names</th>
            <th>shoes size</th>
            <th> shoes price</th>
            <th>Shoes Image</th>
          </tr>
        </thead>

        <tbody>{tablerows}</tbody>
      </table>
    </div>
  );
}
export default Cart;
