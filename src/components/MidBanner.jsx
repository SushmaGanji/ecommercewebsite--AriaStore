import React from 'react'
import imagebanner from '../assets/imagebanner.jpg'
const MidBanner = () => {
  return (
    <div className='bg-gray-100 md:py-24'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]' 
      style={{backgroundImage: `url(${imagebanner})`, backgroundPosition:"center", backgroundAttachment:"fixed"}}>
<div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
<div className='text-center text-white px-4'>
<h1 className='text-3xl text-white md:text-5xl lg:text-6xl font-bold mb-4'>
       Next-Gen Styling is in Your Hands

</h1>
    <p className='text-lg md:text-xl mb-6'>Discover the latest styling with unbeatable prices and free shipping on all orders</p>
 
<button className="bg-red-500 border rounded-lg px-4 py-3 text-white text-xl cursor-pointer mt-2">Shop Now</button>

</div>

</div>
      </div>
    </div>
  )
}

export default MidBanner
