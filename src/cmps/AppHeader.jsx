import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="app-header full">
      <section className="header-container">
        <h1>Denis's Toy Shop</h1>
        <nav className="app-nav">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/toy" onClick={closeMenu}>Toys</NavLink>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
        </nav>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <div className={`dropdown ${menuOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/toy" onClick={closeMenu}>Toys</NavLink>
            <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
          </div>
        )}
      </section>
    </header>
  )
}
