import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className='navbar'>
        <div className='navbar-brand'>
           <Link to={"/"}>Movie App</Link>
        </div>
        <div>
            <Link to={"/"} className='nav-link'>Home</Link>
            <Link to={"/favouriates"} className='nav-link'>Favouriates</Link>
        </div>
     </nav>
  )
}

export default Navbar
