import React from "react";
import { NavLink } from "react-router-dom";


const DropdownTour = () => {
  return (
    <div className="dropdown">
    <ul className="dropdown-menu">
      <li className="dropdown-content-left">
      <NavLink to="/shop">UPCOMING DATES</NavLink>
        <div className="overlay-left"></div>
        
      </li>
      <li className="dropdown-content-right">
        <div className="overlay-right"></div>
        <NavLink to="/shop">PAST DATES</NavLink>
      </li>
    </ul>
  </div>
  );
};

export default DropdownTour;
