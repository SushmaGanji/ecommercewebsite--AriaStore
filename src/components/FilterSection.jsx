import React from 'react'
import { getData } from '../context/DataProvider'

const FilterSection = ({ search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, handleChangeSearch, handleChangeCategory, handleChangeBrand, handleChangePriceRange, handleReset}) => {
    const { categoryOnlyData, brandOnlyData } = getData();
    return (
        <div className='bg-gray-100 mt-10 p-4 rounded-md h-max'>
            <input
                type='text'
                placeholder='Search...'
                value={search}
                className='bg-white p-2 rounded-md border-gray-400 border-2'
                onChange={handleChangeSearch} />
            {/* category only data */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    categoryOnlyData?.map((item, index) => {
                        return <div key={index} className='flex gap-2'>
                            <input type='checkbox' name={item} checked={category===item} value={item} onChange={handleChangeCategory}/>
                            <button className='cursor-pointer uppercase'>{item}</button>
                        </div>
                    })
                }

            </div>
            {/* brand data */}
            <h1 className='mt-5 font-semibold text-xl'>Brand</h1>
            <select name='id' value={brand} className='bg-white p-1 w-full rounded-md border-gray-200 border-2'>

                {brandOnlyData.map((item, index) => {
                    return <option key={index} value={item} name={item} onChange={handleChangeBrand}>{item}</option>
                })}

            </select>
            {/* price range */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>
                Price Range
            </h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor=''> Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type='range' name='' id='' value={priceRange[1]} min="0" max="5000" onChange={handleChangePriceRange}/>
            </div>

            <button className='bg-red-500 text-white px-3 py-1 border rounded-md mt-5 cursor-pointer text-xl'
            onClick={handleReset}
            >Reset Filters</button>

        </div>
    )
}

export default FilterSection
