import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

// import { UserMsg } from './UserMsg.jsx'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'


export function AppHeader() {
    const dispatch = useDispatch()
    // const user = useSelector(storeState => storeState.userModule.loggedInUser)

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Toy App</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                </nav>
            </section>
        </header>
    )
}
