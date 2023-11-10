import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  
  const addToCart = (data) => {
    const existingProduct = cart.find((item) => item.id === data.id);
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === existingProduct.id) {
          return { ...existingProduct, quantity: existingProduct.quantity + 1 };
        } else {
          return product;
        }
      });
      setCart(updatedCart);
    } else {
      
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

 


  const globalStates = {
    cart,
    setCart,
    //functions
    addToCart,
    removeFromCart,
   
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
