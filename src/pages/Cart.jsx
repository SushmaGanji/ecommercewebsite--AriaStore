import React from 'react'
import { useCart } from '../context/CartProvider'
import {Trash, NotebookText,Scooter, Handbag} from 'lucide-react'
import { useUser } from '@clerk/react'
import emptycart from '../assets/emptycart.png'
import { useNavigate } from 'react-router-dom'
const Cart = ({location, getLocation}) => {
  const navigate= useNavigate();
  console.log(location)
  const {cartItem, updateQuantity,deleteItem}= useCart();
  const {user}= useUser()
  console.log(user)
  const totalPrice= cartItem.reduce((total,item)=>total+item.price,0);
 
  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5'>
      {
        cartItem.length>0? <div>
<h1 className='font-bold text-2xl'>My cart  ({cartItem.length})</h1>
<div>
  <div className='mt-10'>
    {cartItem.map((item,index)=>{
      return <div key={index} className='bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3'>
<div className='flex items-center gap-4'>
<img src={item.thumbnail} alt={item.title} className='w-20 h-20 rounded-md'></img>
<div>
<h1 className='w-[300px] line-clamp-2'>{item.title}</h1>
<p className='text-red-500 font-semibold text-lg'>${item.price}</p>
</div>
</div>
<div className='bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl'>
<button className='cursor-pointer'  onClick={() => updateQuantity(item.id, "decrease")}>-</button>
<span>{item.quantity}</span>
<button  className='cursor-pointer'  onClick={() => updateQuantity(item.id, "increase")} >+</button>
</div>
<div className='hover:bg-red-200 transition-all rounded-full p-3 shadow-2xl'>
  <Trash className='text-red-500' size={30} onClick={()=>deleteItem(item.id)}/>
</div>
      </div>
    })}

  </div>
  <div className='grid grid-cols-2 gap-20'>
<div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
<h1 className=' text-gray-800 font-bold text-xl'>Delivery Info</h1>
<div className='flex flex-col space-y-1'>
<label htmlFor=''>Full Name</label>
<input type='text' placeholder='Enter Your Name...' className='p-2 rounded-md' value={user.fullName}/>
</div>
<div className='flex flex-col space-y-1'>
<label htmlFor=''>Add Address</label>
<input type='text' placeholder='Enter Your Address...' className='p-2 rounded-md' value={location.county}/>
</div>
<div className='flex w-full gap-5'>
<div className='flex flex-col space-y-1 w-full'>
  <label htmlFor=''>State</label>
<input type='text' placeholder='Enter Your State...' className='p-2 rounded-md w-full' value={location.state}/>

</div>
<div className='flex flex-col space-y-1 w-full'>
  <label htmlFor=''>PostCode</label>
<input type='text' placeholder='Enter Your PostCode...' className='p-2 rounded-md w-full' value={location.postcode}/>

</div>
</div>
<div className='flex w-full gap-5'>
<div className='flex flex-col space-y-1 w-full'>
  <label htmlFor=''>Country</label>
<input type='text' placeholder='Enter Your Country...' className='p-2 rounded-md w-full' value={location.country}/>

</div>
<div className='flex flex-col space-y-1 w-full'>
  <label htmlFor=''>Phone no</label>
<input type='text' placeholder='Enter Your Number...' className='p-2 rounded-md w-full'/>

</div>
</div>
<button className="bg-red-500 px-4 py-1 text-md font-semibold text-white rounded-lg mt-5">Submit</button>
<div className='flex items-center justify-center w-full text-gray-700'>
  ----------OR----------
</div>
<div className='flex justify-center'>
     <button onClick={getLocation} className='border-2 ml-7 border-red-500 cursor-pointer px-3 py-1 hover:bg-red-400 rounded-lg text-white bg-red-500 text-lg'>Detect Location</button>


</div>
</div>

<div className='bg-white  border-gray-100 shadow-xl h-max rounded-md p-7 mt-4 space-y-2'>
  <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
  <div className='flex items-center justify-between'>
  <h1 className='flex gap-1 items-center text-gray-700'><span><NotebookText/></span>Items Total</h1>
<p>${totalPrice}</p>
</div>
<div className='flex items-center justify-between'>
   <h1 className='flex gap-1 items-center text-gray-700'><span><Scooter/></span>Delivery Charge</h1>

   <p><span className='line-through'>$25</span> <span className='text-red-500 uppercase'>Free</span></p>
</div>
<div className='flex items-center justify-between'>
  <h1 className='flex gap-1 items-center text-gray-700'><span><Handbag/></span>Handling Charge</h1>

   <p className='text-red-500 font-bold'>$5</p>
</div>
<hr className='text-gray-200 mt-2'/>
<div className='flex items-center justify-between'>
   <h1 className='text-xl font-bold'>Grand total</h1>
 
   <p className='text-lg font-semibold'> ${totalPrice + 5}</p>
</div>
<div>
    <h1 className='text-gray-700 font-semibold mb-3 mt-7'>Apply Promo Code</h1>
 <div className='flex gap-3 '>
    <input type='text' placeholder='Enter code' className='w-full p-2 rounded-md'/>
     <button className="bg-white border border-gray-200 px-4 py-1 text-md font-bold text-black rounded-md hover:bg-red-400 hover:text-white">Apply</button>
   </div>
</div>
  <button className="bg-red-500 px-3 py-2 text-md font-semibold text-white rounded-lg mt-5 w-full ">Proceed to CheckOut</button>

</div>
 
  </div>


</div>
        </div> 
        :<div className='flex flex-col gap-3 justify-center items-center h-[600px]'>
          <h1 className='text-red-500/80 font-bold text-5xl text-muted'>Oh no! Your cart is Empty</h1>
          <img src= {emptycart} className='w-[400px]'></img>
          <button onClick={()=>navigate('/products')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer'>Continue shopping</button>
        </div>
      }
      
    </div>
  )
}

export default Cart
