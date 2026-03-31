import axios from 'axios'
import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const DataContext= createContext(null)
const DataProvider = ({children}) => {
    const [data, setData]= useState([])
    // fetch the products from api
    const fetchAllProducts= async ()=>{
        try{
        const res= await axios.get("https://dummyjson.com/products?limit=100")

        const productData= res.data.products
        // const productData= res.data

        setData(productData)

        }
        catch(error)
        {
            console.log(error)
        }
    }
     const getUniqueCategory=(data, property)=>{
    
         let newCategory=   data?.map((item)=>
            
            {
             return item[property]
            
            })
         newCategory= ["All", ...new Set(newCategory)]
         
    return newCategory
        }
    
        const categoryOnlyData= getUniqueCategory(data, "category")
        const brandOnlyData= getUniqueCategory(data,"brand" )
  return (     
   <DataContext.Provider value={{data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData}}>
    {children}
   </DataContext.Provider>
  )
}

export default DataProvider


export const getData=()=>{
 return    useContext(DataContext);
}