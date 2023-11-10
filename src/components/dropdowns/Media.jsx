import React from "react";
import { NavLink } from "react-router-dom";



const Media = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li className="dropdown-videos">
          <div className="overlay-left"></div>
          <NavLink to="/shop">VIDEOS</NavLink>
        </li>
        <li className="dropdown-photos">
          <div className="overlay-right"></div>
          <NavLink to="/shop">PHOTOS</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Media;
