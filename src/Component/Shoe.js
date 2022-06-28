import React from "react";
import ADIDAS from "../assets/images/adidas.jpg";
import Nike from "../assets/images/Nike.jpg";
import Reebok from "../assets/images/reebok.jfif";
import Tommy from "../assets/images/tommy.jpg";
import Filla from "../assets/images/FILLA.jpeg";

function Shoes(props) {
  //Child
  return (
    <div className="container">
      <div className="shoe">
        <h2>Adidas Shoe</h2>
        <img src={ADIDAS} className="shoe" alt="Adidas Shoe" />
        <ul>
          <li>
            {" "}
            <strong>Shoe Brand:</strong> {props.companyname1}
          </li>
          <li>
            <strong>Shoe Size:</strong> {props.Companysize1}
          </li>
          <li>
            {" "}
            <strong>Shoe Price:</strong> {props.Companyprice1}
          </li>
        </ul>
      </div>
      <div className="shoe">
        <h2>Nike Shoe</h2>
        <img src={Nike} className="shoe" alt="Nike Shoe" />
        <ul>
          <li>
            {" "}
            <strong>Shoe Brand:</strong> {props.companyname2}
          </li>
          <li>
            <strong>Shoe Size:</strong> {props.Companysize2}
          </li>
          <li>
            {" "}
            <strong>Shoe Price:</strong> {props.Companyprice2}
          </li>
        </ul>
      </div>
      <div className="shoe">
        <h2>Reebok Shoe</h2>
        <img src={Reebok} className="shoe" alt="Reebok Shoe" />
        <ul>
          <li>
            {" "}
            <strong>Shoe Brand:</strong> {props.companyname3}
          </li>
          <li>
            <strong>Shoe Size:</strong> {props.Companysize3}
          </li>
          <li>
            {" "}
            <strong>Shoe Price:</strong> {props.Companyprice3}
          </li>
        </ul>
      </div>
      <div className="shoe">
        <h2>Tommy Shoe</h2>
        <img src={Tommy} className="shoe" alt="Tommy Shoe" />
        <ul>
          <li>
            {" "}
            <strong>Shoe Brand:</strong> {props.companyname4}
          </li>
          <li>
            <strong>Shoe Size:</strong> {props.Companysize4}
          </li>
          <li>
            {" "}
            <strong>Shoe Price:</strong> {props.Companyprice4}
          </li>
        </ul>
      </div>
      <div className="shoe">
        <h2>Filla Shoe</h2>
        <img src={Filla} className="shoe" alt="Filla Shoe" />
        <ul>
          <li>
            {" "}
            <strong>Shoe Brand:</strong> {props.companyname5}
          </li>
          <li>
            <strong>Shoe Size:</strong> {props.Companysize5}
          </li>
          <li>
            {" "}
            <strong>Shoe Price:</strong> {props.Companyprice5}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Shoes