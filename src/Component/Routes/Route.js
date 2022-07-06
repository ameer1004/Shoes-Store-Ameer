import { useRoutes } from "react-router-dom";
import React from "react";
import Employees from "../EmployeesArea/Employee.js";
import Home from "../HomeArea/Home";
import Cart from "../Cart/Cart";
import App from "../../App";
import EmployeeTable from "../Tables/EmployeeTable";
function Routing({
  setEmployees,
  employees,
  products,
  addToCart,
  cart,
  setProducts,
}) {
  return useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/app",
      element: (
        <App
          setProducts={setProducts}
          products={products}
          addToCart={addToCart}
        />
      ),
    },
    {
      path: "/employees",
      element: <Employees setEmployees={setEmployees} />,
    },

    {
      path: "/employee-table",
      element: <EmployeeTable employees={employees} />,
    },
    {
      path: "/cart",
      element: <Cart cart={cart} />,
    },
  ]);
}

export default Routing;
