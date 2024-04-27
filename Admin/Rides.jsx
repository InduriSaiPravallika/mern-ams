import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import Button from "../../../components/Button";

const Rides = () => {
    const styles = {
        display: "block",
        color: "black",
        borderBottom: "4px solid green",
      };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <nav className="bg-slate-200 text-gray-500 px-3 py-2 font-bold flex items-center">
        <NavLink
          to="."
          end
          className="hover:text-black mr-4"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Driver
        </NavLink>
        <NavLink
          to="passenger"
          className="hover:text-black"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Passenger
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Rides;
