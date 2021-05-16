import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.jpg'

export default function Header() {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" width='30' height='30'/>
            </div>
            <div>
                <ul>
                    <li><Link to="/" className="links">Home</Link></li>
                    <li><Link to="/about" className="links">About</Link></li>
                    <li><Link to="/portfolio" className="links">Porfolio</Link></li>
                    <li><Link to="/login" className="links">Login</Link></li>                    
                </ul>
            </div>
        </header>
    )
}
