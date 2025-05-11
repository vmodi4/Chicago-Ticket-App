import { Link } from "react-router-dom";
import "../css/NavBar.css"; 


function NavBar({cartItems}) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Chi-Event App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/cart" className="nav-link">
                Cart(
                {cartItems.length > 0 && (<span className="cart-count">{(cartItems.length)}</span>)}
                )
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
