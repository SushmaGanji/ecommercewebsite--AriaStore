import { UserButton, useUser } from '@clerk/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {UserRound} from 'lucide-react'
const ResponsiveMenu = ({openNav, setOpenNav}) => {
    const {user}= useUser()
  return (
    <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col 
    justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
      <div>
        <div className='flex items-center justify-start gap-3'>
{
    user ? <UserButton size={50}/> : <UserRound size={20}/>
}
        </div>
        <div>
            <h1>Hello, {user?. firstName}</h1>
            <h1 className='text-sm text-slate-500'>Premium user</h1>
        </div>
      </div>
      <nav className=''>
<ul className='flex flex-col gap-7 text-2xl font-semibold'>
 <Link to={'/'} className= "cursor-pointer" onClick={()=>setOpenNav(false)}><li>Home</li></Link>
  <Link to={'/products'} className= "cursor-pointer" onClick={()=>setOpenNav(false)}><li>Products</li></Link>
 <Link to={'/about'} className= "cursor-pointer" onClick={()=>setOpenNav(false)}><li>About</li></Link>
 <Link to={'/contact'} className= "cursor-pointer" onClick={()=>setOpenNav(false)}><li>Contact</li></Link>

</ul>
      </nav>
    </div>
  )
}

export default ResponsiveMenu
