import React from "react";
import { NavLink } from "react-router-dom";

const DropBand = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li className="dropdown-time">
          <NavLink to="/shop">TIMELINE</NavLink>
          <div className="overlay-left"></div>
        </li>
        <li className="dropdown-history">
          <NavLink to="/shop">HISTORY</NavLink>
          <div className="overlay-right"></div>
        </li>
      </ul>
    </div>
  );
};

export default DropBand;
