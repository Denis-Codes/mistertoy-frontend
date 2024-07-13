import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function AppHeader() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="app-header full">
            <section className="header-container">
                <h1>Denis's Toy Shop</h1>
                <nav className="app-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/toy">Toys</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </nav>
                <div className="hamburger" onClick={toggleDropdown}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`dropdown ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={toggleDropdown}>Home</NavLink>
                    <NavLink to="/about" onClick={toggleDropdown}>About</NavLink>
                    <NavLink to="/toy" onClick={toggleDropdown}>Toys</NavLink>
                    <NavLink to="/dashboard" onClick={toggleDropdown}>Dashboard</NavLink>
                </div>
            </section>
        </header>
    )
}
