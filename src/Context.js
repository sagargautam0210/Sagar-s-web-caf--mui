import React, { createContext, useState } from 'react';

//CartContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to store items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart by index
  const removeCart = (itemIndex) => {
    setCartItems((prevItems) => {
      // Removving the item at the given index
      return [
        ...prevItems.slice(0, itemIndex),
        ...prevItems.slice(itemIndex + 1),
      ];
    });
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;