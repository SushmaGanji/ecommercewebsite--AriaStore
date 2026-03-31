import React, { useEffect } from 'react'
import { getData } from '../context/DataProvider'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartProvider';

const ProductCard = ({product}) => {
  const {addToCart, cartItem}= useCart();
  const navigate= useNavigate();
  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer mt-3 hover:scale-105 hover:shadow-2xl transition-all p-2 h-full flex flex-col'>
      <img src={product.thumbnail} className='bg-gray-100 aspect-square' 
      onClick={()=>navigate(`/products/${product.id}`)}/>
      <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
      <p className='my-1 test-lg text-gray-800 font-bold'>${product.price}</p>
      <div className='mt-auto'>
      <button
      onClick={()=> {
        addToCart(product)}}
       className='bg-red-500 w-full border rounded-lg cursor-pointer  px-4 py-2 text-white text-xl border-none flex gap-2 items-center justify-center font-semibold'><IoCartOutline/>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard
