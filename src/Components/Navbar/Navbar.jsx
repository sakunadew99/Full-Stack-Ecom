import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_item from '../Assets/cart_icon.png';
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const {getTotalCartItems} = useContext(ShopContext);

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("shop")}>
                    <Link to="/" className={menu === "shop" ? "active" : ""}>Shop</Link>
                </li>
                <li onClick={() => handleMenuClick("mens")}>
                    <Link to="/mens" className={menu === "mens" ? "active" : ""}>Mens</Link>
                </li>
                <li onClick={() => handleMenuClick("womens")}>
                    <Link to="/womens" className={menu === "womens" ? "active" : ""}>Womens</Link>
                </li>
                <li onClick={() => handleMenuClick("kids")}>
                    <Link to="/kids" className={menu === "kids" ? "active" : ""}>Kids</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
                <Link to="/cart" className="cart-link">
                    <img src={cart_item} alt="Cart" />
                    <div className="nav-cart-count">{getTotalCartItems}</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
