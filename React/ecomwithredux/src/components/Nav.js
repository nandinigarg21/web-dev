import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div>
        <img src='' alt=''></img>
        <span><NavLink to="/" >ecomzy</NavLink></span>
        <span><NavLink to="/cart">cart</NavLink></span>
        <img src='' alt=''></img>
      </div>
    </div>
  )
}

export default Nav
