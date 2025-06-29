import React, { useState } from 'react';
import { CartDataContext } from '../../Context/Context';

const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const addToCart = (id, image, title, price, category) => {
    setCartData(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { id, image, title, price, category, quantity: 1 }
        ];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCartData(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return {
            ...item,
            quantity: newQuantity >= 1 ? newQuantity : 1
          };
        }
        return item;
      });
    });
  };

  const removeItem = (id) => {
    setCartData(prevCart => prevCart.filter(item => item.id !== id));
  };

  const itemCount = cartData.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cartData,
    addToCart,
    updateQuantity,
    removeItem,
    itemCount
  };

  return (
    <CartDataContext.Provider value={value}>
      {children}
    </CartDataContext.Provider>
  );
};

export default CartDataProvider;
