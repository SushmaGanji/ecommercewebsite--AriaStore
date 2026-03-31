import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify';

export const CartContext= createContext(null);
const CartProvider = ({children}) => {
    const[cartItem, setCartItem] =useState([])
  const addToCart = (product) => {
    const ItemInCart= cartItem.find((item)=> item.id==product.id)
    if(ItemInCart)
    {
      // increase quantity if already in cart
      const updatedCart= cartItem.map((item)=>item.id===product.id ? {...item, quantity: item.quantity+1}:item)
      setCartItem(updatedCart)
    }
    else
    {
  setCartItem((prev) => {
    const updated = [...prev, {...product, quantity:1 }];
    toast.success("Product is Added to cart")
    return updated;
  });
    }

};
const updateQuantity = (productId, action) => {
  setCartItem(prev =>
    prev
      .map(item => {
        if (item.id === productId) {
          let newUnit = item.quantity;

          if (action === "increase") {
            newUnit = newUnit + 1;
            toast.success("Quantity of product increased")
          } 
          else if (action === "decrease") {
            newUnit = newUnit - 1;
            toast.warn("Quantity of product decreased")
          }

          return newUnit > 0 ? { ...item, quantity: newUnit } : null;
        }
        return item;
      })
      .filter(item => item !== null)
  );
};
const deleteItem=(productId)=>{
  setCartItem(cartItem.filter(item=>item.id!==productId
  ))
  toast.error("Product in cart Deleted")
}
  return (
    <CartContext.Provider value={{cartItem, setCartItem, addToCart, updateQuantity, deleteItem}}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart= ()=>useContext(CartContext);

export default CartProvider
