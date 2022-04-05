import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    
    const history = useNavigate()

    const handleLogout = () => {
        clearUser();
        history('/');
    }
    
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/myCollection ">My Collection</Link>
                </li>
                : null}
             {isAuthenticated
                ? <li className="navbar__item">
                <Link className="navbar__link" to="">Wish List</Link>
            </li>
                : null}
             {isAuthenticated
                ? <li className="navbar__item">
                <Link className="navbar__link" to="">Kop Or Drop</Link>
            </li>
                : null}
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
        </ul>
    )
}