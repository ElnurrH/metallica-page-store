import React from "react";

import { NavLink } from "react-router-dom";

const DropNews = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li className="dropdown-content-news">
          <NavLink to="/shop">NEWS</NavLink>
          <div className="overlay-left"></div>
        </li>
        <li className="dropdown-content-press">
          <NavLink to="/shop">IN THE PRESS</NavLink>
          <div className="overlay-center"></div>
        </li>
        <li className="dropdown-content-top">
          <div className="overlay-right"></div>
          <NavLink to="/shop">...ON THE TOP OF THAT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropNews;
