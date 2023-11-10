import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utils/MainContext";
import { useState } from "react";
import Header from "../components/Header";
const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(Context);
  useEffect(() => {
    calcTotalPrice();
  }, [cart]);

  const [totalPrice, setTotalPrice] = useState(0);
  const increment = (id) => {
    const existing = cart.find((data) => data.id === id);
    if (existing) {
      let increasedCart = cart.filter((product) => {
        if (product.id === existing.id) {
          return { ...existing, quantity: existing.quantity++ };
        } else {
          return product;
        }
      });
      setCart(increasedCart);
    }
  };

  const decrement = (id) => {
    const existing = cart.find((data) => data.id === id);
    if (existing) {
      let decreasedCart = cart.filter((product) => {
        if (product.id === existing.id && product.quantity > 1) {
          return { ...existing, quantity: existing.quantity-- };
        } else {
          return product;
        }
      });
      setCart(decreasedCart);
    }
  };

  const removeAll = () => {
    setCart([]);
  };


  const calcTotalPrice = () => {
    const prices = cart.map((item) => item.quantity * item.price);
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(total);
  };
  return (
    <>
      <Header linkColor="black" iconColor="black" position="relative" />
      <div className="cart-section">
        <div className="container">
          <div className="row">
            <h2 className="title">YOUR CART</h2>
            <ul className="cartList">
              
              {cart.map((item) => (
                <li className="cartItem" key={item.id}>
                  <p className="lineNumber">{item.index}</p>
                  <div className="carImg">
                    <img
                      src={`${process.env.REACT_APP_IMAGE}${item.productImage}`}
                      alt="car-img"
                    />
                  </div>
                  <h4 className="carName">
                    <Link to={`/details/${item.id}`}>{item.name}</Link>
                  </h4>
                  <p className="carDetails">{item.details}</p>
                  <div className="counter">
                    <span
                      className="counterBtn "
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      className="counterBtn "
                      onClick={() => increment(item.id)}
                    >
                      +
                    </span>
                  </div>
                  <span className="carPrice">${item.price}</span>
                  <span
                    className="removeCar"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <div className="cartInfo">
              <h3>
                Total price: <span>${totalPrice}</span>
              </h3>
              <p className="clear" onClick={removeAll}>
                Clear cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
