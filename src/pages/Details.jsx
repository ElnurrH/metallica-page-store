import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import No from "../assets/images/badge-exclusion_small.png";
import { Context } from "../utils/MainContext";
import Header from "../components/Header";

const Details = () => {
  const { productID } = useParams();


 
  //Global States
  const { addToCart } = useContext(Context);

  const [data, setData] = useState({});
  const { cart, setCart } = useContext(Context);

 

  useEffect(() => {
    getSingleData();
  }, []);


  const getSingleData = async () => {
    await axios
      .get(`${process.env.REACT_APP_SINGLE_DATA}/${productID}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Header linkColor="black" iconColor="black" position="static" />
    <section className="details">
      <div className="container">
        <div className="row">
          <div className="product-row">
            <img
              src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
              alt={data.name}
            />
          </div>
          <div className="data-row">
            <ul className="link-row">
              <li>
                <Link to="/">HOME     &#62; </Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
            </ul>
            <div className="badge">
              <img src={No} alt="No" />
              <p>NEW - NO DISCOUNTS</p>
            </div>
            <h1>{data.name}</h1>
            <p>{data.details}</p>
            <p className="price">${data.price}</p>
            <div className="data-btn">
              {/* <div className="counter">
                <span className="counter-btn">-</span>
                <span>{data.quantity}</span>
                <span className="counter-btn" >+</span>
              </div> */}
              <button className="add-to-cart" onClick={()=>addToCart(data) }>ADD TO CART</button>
            </div>
            
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Details;
