//Utility
import React from 'react'
import { Link } from "react-router"

//Components

//Styling
import './Navbar.css'

const Navbar = (): React.JSX.Element => {
    let currentUser = {}
  return (
    <div id="Navbar">
        { currentUser ? 
        <p>logged In</p>
        : 
        <p>not</p>}
        <div>
        <Link className="NavbarLink" to="/signup">Sign Up</Link>
        <Link className="NavbarLink" to="/login">Login</Link>
        </div>
        
    </div>
  )
}

export default Navbar
