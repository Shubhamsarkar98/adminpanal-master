import React from 'react'
import { Link } from "react-router-dom"
import "./Header.scss"
const Header = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/contactUs"> Contact us</Link></li>
                <li><Link to="/student">User</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;