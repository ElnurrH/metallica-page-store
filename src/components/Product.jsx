import React from "react";

import { Link } from "react-router-dom";

import No from "../assets/images/badge-exclusion_small.png";
const Product = ({ data }) => {
  return (
    <div className="product-card">
      <div className="img-box">
        <img
          src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
          alt={data.name}
        />
      </div>
      <div className="product-info">
        <div className="span black">
          <img src={No} alt="No" /> <p>NEW - NO DISCOUNTS</p>
        </div>
        <Link to={`/details/${data.id}`} className="black">
          {data.name}
        </Link>
        <p className="black">${data.price}</p>
      </div>
    </div>
  );
};

export default Product;
