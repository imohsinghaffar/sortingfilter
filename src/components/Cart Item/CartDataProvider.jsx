import React, { useState } from 'react';
import { CartDataContext } from '../../Context/Context';

const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);


  const addToCart = (id, image, title, price, category) => {
    setCartData(prevCart => [
      ...prevCart,
      { id, image, title, price, category }
    ]);
  };

  const value = {
    cartData,
    addToCart,
  };

  return (
    <CartDataContext.Provider value={value}>
      {children}
    </CartDataContext.Provider>
  );
};

export default CartDataProvider;
