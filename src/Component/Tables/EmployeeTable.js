import React from "react";
import "./EmployeeTable.css";

function TableData({ employees }) {
  const tableRows = employees.map((employee, i) => {
    return (
      <tr key={i} className="employee-row">
        <td>{employee.fname}</td>
        <td>{employee.lname}</td>
        <td>{employee.title}</td>
        <td>{employee.country}</td>
        <td>{employee.city}</td>
        <td>{employee.birthdate}</td>
        <td>
          <img src={employee.image} height="30px" alt="employee" />
        </td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="employee-row">
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Title</th>
            <th>Country</th>
            <th>City</th>
            <th>BirthDate</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      {/* <Employees func={addRows} /> */}
    </div>
  );
}

export default TableData;
