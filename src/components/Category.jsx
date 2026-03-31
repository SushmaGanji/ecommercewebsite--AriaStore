import React, { useEffect } from 'react'
import { getData } from '../context/DataProvider'
import { useNavigate } from 'react-router-dom';

const Category = () => {
const navigate= useNavigate();
    const {categoryOnlyData}= getData();
    
  return (
   <div className='bg-[#101829]'>
    <div className='max-w-7xl mx-auto grid grid-cols-4  items-center justify-around py-7 gap-10'>
{
    categoryOnlyData?.map((item,index)=>
    {
        return <div key={index}> 
<button onClick={()=>navigate(`/category/${item}`)} className='bg-red-500  border rounded-lg cursor-pointer px-8  py-2 text-white text-xl border-none whitespace-nowrap '>{item}</button>
        </div>
    })
}
    </div>

   </div>
  )
}

export default Category
