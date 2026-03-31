import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { useCart } from '../context/CartProvider'
import {Menu} from 'lucide-react'
import { CircleX } from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu'
const Navbar = ({ location, getLocation }) => {
  const { cartItem } = useCart();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openNav, setOpenNav]= useState(false);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }
 

  return (
    <div className='bg-white py-3 shadow-2xl  px-4 md:px-0'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* logo section */}
        <div className='flex gap-7 items-center'>
          <Link to={'/'}>
            <h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>A</span>riaStore</h1></Link>
          <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
            <MapPin className='text-red-500' />
            <span className='font-semibold '>{location ? <div className='-space-y-2'>
              <p>{location.county}</p>
              <p> {location.state_district}</p>

            </div> : "Add Address"}</span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {
            openDropdown ? <div className='w-[270px] h-max shadow-2xl z-50 bg-white fixed top-18 lg:left-80 left-40 border-2 p-4 border-gray-100 rounded-md'>
              <h1 className='font-semibold mb-4 text-2xl flex items-center justify-between'>Change Location <span onClick={toggleDropdown}><CgClose></CgClose></span>

              </h1>
              <button onClick={getLocation} className='border-2 ml-7 border-red-500 cursor-pointer px-3 py-1 hover:bg-red-400 rounded-lg text-white bg-red-500 text-lg'>Detect Location</button>
            </div> : null
          }


        </div>

        {/* menu section */}

        <nav className='flex gap-7 items-center'>
          <ul className='md:flex  gap-7 items-center text-xl font-semibold hidden'>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer `}><li>Home</li></NavLink>
            <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer `}><li>Products</li></NavLink>
            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer `}><li>About</li></NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer `}> <li>Contact</li></NavLink>
          </ul>

          <Link to={'./cart'} className='relative'><IoCartOutline className='w-7 h-7 ' />
            <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white '>{cartItem.length}</span></Link>
          <div className='hidden md:block'>
            <Show when="signed-out">
              <SignInButton className=" bg-red-500 border rounded-md cursor-pointer px-3 py-1  text-white" />

            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
          {
            openNav ? <Menu className='h-7 w-7 md:hidden' onClick={()=>setOpenNav(false)}/> : <CircleX className='h-7 w-7 md:hidden' onClick={()=>setOpenNav(true)}/>
          }
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
    </div>
  )
}

export default Navbar
