import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     
        <ul className='nvbar'>
       
            <li><NavLink to = '/'  className='navbarlink'>  Home </NavLink></li>
            <li><NavLink to = '/about'  className='navbarlink'> About </NavLink></li>
            <li><NavLink to = '/contact'  className='navbarlink'> Contact </NavLink></li>
           
        </ul>
    </div>
  )
}

export default Navbar