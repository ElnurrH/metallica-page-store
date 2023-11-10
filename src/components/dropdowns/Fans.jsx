import React from "react";
import { Link } from "react-router-dom";

const Fans = () => {
  return (
    <div className="fans-dropdown">
      <div className="overlay"></div>
      <div className="container">
        <ul className="link-row">
          <li className="drop-items">
            <Link to="/shop">NEWS</Link>
          </li>
          <li className="drop-items">
            <Link to="/shop">SO WHAT!</Link>
          </li>
          <li className="drop-items">
            <Link to="/shop">CONTESTS</Link>
          </li>
          <li className="drop-items">
            <Link to="/shop">VIDEOS</Link>
          </li>
          <li className="drop-items">
            <Link to="/shop">PHOTOS</Link>
          </li>
          <li className="drop-items">
            <Link to="/shop">FORUMS</Link>
          </li>
          <li className="drop-items">
            <Link to="/shop">LOCAL CHAPTERS</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Fans;
