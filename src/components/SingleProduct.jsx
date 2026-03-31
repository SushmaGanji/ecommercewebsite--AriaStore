import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../assets/Loading.gif'
import axios from 'axios';
import Breadcrums from './Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartProvider';

const SingleProduct = () => {
    const {addToCart}= useCart();
    const [singleProduct, setSingleProduct] = useState("");
    const params = useParams();

    const getSingleProduct = async () => {
        try {
            const res = await axios(`https://dummyjson.com/products/${params.id}`)
            const product = res.data;
            setSingleProduct(product)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getSingleProduct();
    }, [])
    const discountedPrice = Math.round((singleProduct.price - 5) * 100) / 100;
    return (
        <div className=' w-full h-[700px]'>
            {
                singleProduct ? <div className='px-4 pb-4 md:px-0'>
                    <Breadcrums title={singleProduct.title} />
                    <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-2  gap-10'>
                        {/* product image */}
                        <div className='w-full'>
                            <img src={singleProduct.thumbnail} className='rounded-2xl w-full object-cover'></img>
                        </div>

                        {/* product details */}

                        <div className='flex flex-col gap-6 mt-15 '>
                            <h1 className='md:text-3xl font-bold text-gray-800'>{singleProduct.title}</h1>
                           <div className='text-gray-700'>
  {singleProduct.brand?.toUpperCase() || "NO BRAND"} /
  {singleProduct.category?.toUpperCase() || "NO CATEGORY"} /
  {singleProduct.warrantyInformation?.toUpperCase() || "NO WARRANTY"}
</div>
                            <div className='text-2xl font-bold  flex items-center gap-5'> <span className='text-red-500'>${discountedPrice} </span><span className='line-through'>${singleProduct.price}</span>
                                <button className="bg-red-500 px-4 py-1 text-white rounded-lg">{singleProduct.discountPercentage}% discount</button>

                            </div>
                            <p className='text-gray-600 text-xl'>{singleProduct.description}</p>

                    
                        {/* Quantity selector */}

                        <div className='flex items-center gap-4'>
                            <label htmlFor='' className='text-md font-bold  text-gray-700'>Quantity:</label>
                        <input type='number' min={1} value={1} className='border w-20 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'/>
                        </div>
                        <div className='flex gap-4 mt-4'>
                                  <button
                                  onClick={()=>addToCart(singleProduct)}
                                  className='bg-red-500  border rounded-lg cursor-pointer  px-4 py-2 text-white text-xl border-none flex gap-2 items-center justify-center font-semibold'><IoCartOutline/>Add to Cart</button>
                            
                        </div>
    </div>
                    </div>
                </div>

                    : (<div className='flex flex-col items-center justify-center h-screen'>
                        <img src={Loading} alt="loading" className="w-60 h-60 border-none rounded-full" />
                        <p className='mt-15 text-xl font-bold italic text-red-500'>Please be patient...! Your Items are being Loaded</p>
                    </div>)
            }
        </div>
    )
}

export default SingleProduct
