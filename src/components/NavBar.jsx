import { Link } from "react-router-dom"

import "../css/global.css"
import "../css/navbar.css"
function NavBar(){
    return 
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Machine App</Link>

            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/" className="nav-link">Favorites</Link>
            </div>
        </nav>
}

export default NavBar