import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h1>Site Name</h1>
        </div>
        <div className="toggle-buttons">
            <button className="toggle-btn">
                <i className="icon">&#9776;</i>
            </button>
            <button className="toggle-btn">
                <i className="icon">&#x1F50D;</i>
            </button>
        </div>
    </nav>

  )
}

export default Nav