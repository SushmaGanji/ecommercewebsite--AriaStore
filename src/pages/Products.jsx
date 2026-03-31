import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataProvider'
import FilterSection from '../components/FilterSection';
import Loading from '../assets/Loading.gif'
import ProductCard from '../components/ProductCard';
import notfound from '../assets/productnotfound.webp'
const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000])
  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0,0)
  }, [])

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleChangeBrand = (e) => {
    setBrand(e.target.value)
  }
  const handleChangePriceRange=(e)=>{
    setPriceRange([priceRange[0], Number(e.target.value)])
  }
  const handleReset=()=>{
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPriceRange([0,5000])
  }

  const filteredData= data.filter((item)=>
  item.title.toLowerCase().includes(search.toLowerCase()) &&
  (category=="All" || item.category==category) && 
  (brand=="All" || item.brand==brand) &&
  (item.price>= priceRange[0] &&  item.price<= priceRange[1])
  )
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>

              <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand}
                priceRange={priceRange} setPriceRange={setPriceRange} handleChangeSearch={handleChangeSearch} handleChangeCategory={handleChangeCategory} 
                handleChangeBrand={handleChangeBrand} handleChangePriceRange={handleChangePriceRange}  handleReset={handleReset}/>
             <div className='w-full'>
             {
              filteredData.length>0 ? (<div className='flex flex-col justify-center items-center'>
  <div className='grid grid-cols-4 gap-7 mt-10'>
                {
                  filteredData?.map((product, index) => {
                    return <ProductCard key={index} product={product} />
                  })
                }
              </div>
              </div>):(
                <div className='flex justify-center items-center  md:h-[600px] md:w-[900px] mt-10'>
                  <img src={notfound}></img>
                  </div>
              )
             }
             </div>
            
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center h-[400px]'>
              <img src={Loading} alt="loading" className="w-60 h-60 border-none rounded-full" />
              <p className='mt-15 text-xl font-bold italic text-red-500'>Please be patient...! Your Items are being Loaded</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
