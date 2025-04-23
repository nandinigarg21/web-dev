import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from "../logo.png"


const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <div > 
        <nav className='flex  justify-between items-center h-20 max-w-6xl mx-auto'>
          <NavLink to="/">
          <div className='w-40 ml-5'>
          <img src={logo} className='h-14' alt='Logo'/>
          </div>
          </NavLink>
            
            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
              <NavLink to="/">
              <p className=' text-2xl hover:text-green-400 cursor-pointer duration-300 transition-all ease-in ' 
              >Home</p>
              </NavLink>

                <NavLink to={"/cart"}>
                <div className='relative'>
                <FaCartShopping className='text-2xl' />
                {
                  cart.length > 0 &&
                  <span
                  className='absolute -top-1 -right-2 bg-green-600 text-x5 w-5 h-5 
                  flex justify-center items-center animate-bounce rounded-full text-white:'
                  
                  >{cart.length}</span>
                }
                
                </div>
                </NavLink>
            </div>
            
        </nav>
      
    </div>
  )
}

export default Navbar
