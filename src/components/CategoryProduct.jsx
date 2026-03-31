import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../assets/Loading.gif'
import { useNavigate, useParams } from 'react-router-dom'
import {ChevronLeft} from 'lucide-react'
import ProductListView from './ProductListView';
const CategoryProduct = () => {
    const[searchData, setSearchData] = useState([])
    const navigate= useNavigate();
    const params= useParams();
    const category= params.category
    const getFilterData= async ()=>{
        try{
 const res= await axios.get(`https://dummyjson.com/products/category/${category}`)
 const data= res.data.products
 setSearchData(data);
        }
        catch(e)
        {
            console.log(e)
        }
    }
    useEffect(()=>{
        getFilterData();
        window.scrollTo(0,0);
    },[])
  return (
    <div>
     {
        searchData.length>0? (<div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
            <button className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center' onClick={()=>navigate('/')}><ChevronLeft/>Back</button>
            {
                searchData.map((product, index)=>{
                    return <ProductListView key={index} product={product}/>
                })
            }
        </div>):
        (  <div className='flex flex-col items-center justify-center h-[400px]'>
                      <img src={Loading} alt="loading" className="w-60 h-60 border-none rounded-full" />
                      <p className='mt-15 text-xl font-bold italic text-red-500'>Please be patient...! Your Items are being Loaded</p>
                    </div>)
     }
    </div>
  )
}

export default CategoryProduct
