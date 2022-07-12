import React, { useState } from "react";
import "./Employee.css";
let arr = [];
if (localStorage.getItem("EmployeesData")) {
  arr = JSON.parse(localStorage.getItem("EmployeesData"));
} else {
  arr = [];
}

function Employees({ setEmployees }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [image, setImage] = useState("");

  const changeFname = (event) => {
    setFname(event.target.value);
  };
  const changeLname = (event) => {
    setLname(event.target.value);
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeCountry = (event) => {
    setCountry(event.target.value);
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const changeBirthdate = (event) => {
    setBirthdate(event.target.value);
  };
  const changeImage = (event) => {
    setImage(event.target.value);
  };
  const transferValue = (event) => {
    event.preventDefault();
    const employee = {
      fname,
      lname,
      title,
      country,
      city,
      birthdate,
      image,
    };
    arr.push(employee);
    localStorage.setItem("EmployeesData", JSON.stringify(arr));
    const result = validateform(employee);
    console.log(employee);
    if (result) {
      setEmployees((prevEmployees) => [...prevEmployees, employee]);
      clearState(employee);
    }
  };

  const clearState = () => {
    setFname("");
    setLname("");
    setTitle("");
    setCountry("");
    setCity("");
    setBirthdate("");
    setImage("");
  };

  return (
    <div className="Form">
      <h2>Workers SignUp Page</h2>
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>First Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={fname}
                    onChange={changeFname}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Last Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={lname}
                    onChange={changeLname}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Title:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    id="title"
                    onChange={changeTitle}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Country:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={changeCountry}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>City:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={changeCity}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Birth Date:</label>
                </td>
                <td>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={birthdate}
                    onChange={changeBirthdate}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Add you image</label>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    name="img"
                    id="img"
                    onChange={changeImage}
                    value={image}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            value="Add"
            id="Addworkers"
            className="btnform"
            onClick={transferValue}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
function validateform(employee) {
  const validFirstName = Validatefname(employee.fname);
  if (!validFirstName) {
    return false;
  }
  const validLastName = Validatelname(employee.lname);
  if (!validLastName) {
    return false;
  }
  const validTitle = Validatetitle(employee.title);
  if (!validTitle) {
    return false;
  }

  const validCountry = validatecountry(employee.country);
  if (!validCountry) {
    return false;
  }
  const validCity = validatecity(employee.city);
  if (!validCity) {
    return false;
  }
  return true;
}

function Validatefname(fname) {
  if (String(fname).length >= 2 && String(fname).length <= 30) {
    return true;
  } else {
    alert("The first name is invalid");
    return false;
  }
}
function Validatelname(lname) {
  if (String(lname).length >= 2 && String(lname).length <= 30) {
    return true;
  } else {
    alert("The last name is invalid");
    return false;
  }
}
function Validatetitle(title) {
  if (String(title).length >= 5 && String(title).length <= 20) {
    return true;
  } else {
    alert("The title is invalid");
    return false;
  }
}

function validatecountry(country) {
  if (String(country).length >= 3 && String(country).length <= 30) {
    return true;
  } else {
    alert("The country name is invalid");
    return false;
  }
}
function validatecity(city) {
  if (String(city).length >= 2 && String(city).length <= 30) {
    return true;
  } else {
    alert("The city name is invalid");
    return false;
  }
}

export default Employees;
