import React, { useContext } from "react";

import { NavLink, Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

// DropDowns
import DropdownTour from "./dropdowns/DropdownTour";
import DropNews from "./dropdowns/DropNews";
import DropBand from "./dropdowns/DropBand";
import Music from "./dropdowns/Music";
import Media from "./dropdowns/Media";
import Shop from "./dropdowns/DropShop";
import Fans from "./dropdowns/Fans";
// Svg files
import TourSvg from "./hover-svg/TourSvg";
import NewsSvg from "./hover-svg/NewsSvg";
import BandSvg from "./hover-svg/BandSvg";
import MusicSvg from "./hover-svg/MusicSvg";
import MediaSvg from "./hover-svg/MediaSvg";
import FansSvg from "./hover-svg/FansSvg";
import ShopSvg from "./hover-svg/ShopSvg";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Logo from "../assets/sass/components/bg/white-metal.png";

import visa from "../assets/sass/components/bg/type-visa.svg";
import master from "../assets/sass/components/bg/type-mastercard.svg";

import amex from "../assets/sass/components/bg/type-amex.svg";
import paypal from "../assets/sass/components/bg/type-paypal.svg";
import appleplay from "../assets/sass/components/bg/type-applepay.svg";



import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { Context } from "../utils/MainContext";

import { useEffect } from "react";
const Header = ({ background, linkColor, iconColor, position }) => {
 
  
  // Local states
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart, setCart, removeFromCart } = useContext(Context);
  useEffect(() => {
    calcTotalPrice();
  }, [cart]);

  const calcTotalPrice = () => {
    const prices = cart.map((item) => item.quantity * item.price);
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(total);
  };
  useEffect(() => {
    const cartCount = () => {
      const sum = cart.map((item) => item.quantity);
      let totalCount = sum.reduce((acc, curr) => acc + curr, 0);
      setCount(totalCount);
    };
    cartCount();
  }, [cart]);

  const headerStyle = {
    backgroundColor: background || "transparent",
    positions: position || "absolute",
  };
  const linkStyle = {
    color: linkColor || "white", // Apply the same text color to the links
    transition: "color 0.2s",
    "&:hover": {
      color: "red", // Change the link color on hover
    },
  };
  const onLinkHover = {
    color: "red", // Change the link color on hover
  };
  const iconStyle = {
    backgroundColor: iconColor || "white",
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="menu">
            <input id="toggle" type="checkbox"></input>

            <label htmlFor="toggle" className="hamburger">
              <div className="top-bun" style={iconStyle}></div>
              <div className="meat" style={iconStyle}></div>
              <div className="bottom-bun" style={iconStyle}></div>
            </label>

            <div className="nav">
              <div className="nav-wrapper">
                <nav className="nav-menu">
                  <div className="container">
                    <div className="row">
                      <div className="row-left">
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>TOUR</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>UPCOMING DATES / </NavLink>
                            </li>

                            <li>
                              <NavLink>PAST DATES</NavLink>
                            </li>
                          </ul>
                        </div>

                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>NEWS</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>NEWS / </NavLink>
                            </li>

                            <li>
                              <NavLink>IN THE PRESS /</NavLink>
                            </li>
                            <li>
                              <NavLink>...AND ON TOP OF THAT</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>BAND</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>TIMELINE / </NavLink>
                            </li>

                            <li>
                              <NavLink>HISTORY</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>MUSIC</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>RELEASES / </NavLink>
                            </li>

                            <li>
                              <NavLink>SONGS & LYRICS</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>MEDIA</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>VIDEOS / </NavLink>
                            </li>

                            <li>
                              <NavLink>PHOTOS</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="row-right">
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>FANS</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>NEWS / </NavLink>
                            </li>

                            <li>
                              <NavLink>SO WHAT! /</NavLink>
                            </li>
                            <li>
                              <NavLink>CONTESTS /</NavLink>
                            </li>
                            <li>
                              <NavLink>VIDEOS /</NavLink>
                            </li>
                            <li>
                              <NavLink>PHOTOS </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink to="/shop">SHOP</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink to="/shop">NEW & FEATURED / </NavLink>
                            </li>

                            <li>
                              <NavLink to="/shop"> APPAREL /</NavLink>
                            </li>
                            <li>
                              <NavLink to="/shop">SALE /</NavLink>
                            </li>
                            <li>
                              <NavLink to="/shop">ACCESSORIES /</NavLink>
                            </li>
                            <li>
                              <NavLink to="/shop">COLLECTIONS </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-link">
                          <div className="row-head">
                            <NavLink>ACCOUNT</NavLink>
                          </div>
                          <ul>
                            <li>
                              <NavLink>LOGIN / </NavLink>
                            </li>

                            <li>
                              <NavLink>REGISTER </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-link">
                          <div className="row-head">
                            <p>SOCIAL</p>
                          </div>
                          <ul className="social-links">
                            <li>
                              <Link to="#">
                                <BsInstagram />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <BsYoutube />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <BsFacebook />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <SiTiktok />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <FaThreads />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <FaXTwitter />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <FaHeadphones />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  TOUR
                </NavLink>
                <TourSvg />
                <DropdownTour />
              </li>
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  NEWS
                </NavLink>
                <NewsSvg />
                <DropNews />
              </li>
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  BAND
                </NavLink>
                <BandSvg />
                <DropBand />
              </li>
              <li className="metal-link">
                <NavLink to="/" style={linkStyle}>
                  <img src={Logo} alt="Logo" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  MUSIC
                </NavLink>
                <MusicSvg />
                <Music />
              </li>
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  MEDIA
                </NavLink>
                <MediaSvg />
                <Media />
              </li>
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  FANS
                </NavLink>
                <FansSvg />
                <Fans />
              </li>
              <li className="nav-item">
                <NavLink to="/shop" style={linkStyle}>
                  SHOP
                </NavLink>
                <ShopSvg />
                <Shop />
              </li>
            </ul>
          </nav>
          <div className="user-area">
            <div className="user">
              <NavLink to="/profile" style={linkStyle}>
                <FiUser />
              </NavLink>
            </div>
           <div className="cart" onClick={() => setCartIsOpen(!cartIsOpen)} style={linkStyle}>
              <span className="count">{count}</span>
              <IoBagOutline />
            </div>
          </div>
        </div>
      </div>
      <div className={`cartBox ${cartIsOpen && "isOpen"}`}>
        <div className="cartHead">
          <h2>YOUR CART {count} </h2>
          <GrClose className="close" onClick={() => setCartIsOpen(false)} />
        </div>
        <ul className="cartList">
          <div className="empty">
            {cart.length === 0 && <p>YOUR SHOPPING CART IS EMPTY</p>}
          </div>
          {cart.map((item) => (
            <li className="cartItem" key={item.id}>
              <div className="carImg">
                <img
                  src={`${process.env.REACT_APP_IMAGE}${item.productImage}`}
                  alt="car-img"
                />
              </div>
              <div className="carInfo">
                <div className="nums">
                  <p className="carTitle">{item.name}</p>
                  <p className="carPrice"> {item.price}$</p>
                </div>
                <div className="flex-end">
                  <p className="quantity">Quantity:{item.quantity} </p>
                  <div className="remove">
                    <p onClick={() => removeFromCart(item.id)}>Remove</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-data">
          <div className="data-head">
            <h2>SUBTOTAL</h2>
            <h4> {totalPrice}$</h4>
          </div>
          <div className="data-mid">
            <Link to="/shop" className="white">
              KEEP SHOPPING
            </Link>
            {cart.length !== 0 && (
              <Link
                to="/cart"
                className="black"
                onClick={() => setCartIsOpen(false)}
              >
                VIEW CART
              </Link>
            )}
          </div>
          <div className="data-end">
            <div className="text">
              <p>WE ACCEPT:</p>
            </div>
            <div className="cards">
              <img src={visa} alt="visa" />
              <img src={master} alt="master" />
              
              <img src={amex} alt="amex" />
              <img src={paypal} alt="paypal" />
              <img src={appleplay} alt="appleplay" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${cartIsOpen && "isOpen"}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
