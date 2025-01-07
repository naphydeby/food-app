import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart((prevCart) => [...prevCart, meal]);
  };

  const removeFromCart = (idMeal) => {
    setCart((prevCart) => prevCart.filter((meal) => meal.idMeal !== idMeal));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;





