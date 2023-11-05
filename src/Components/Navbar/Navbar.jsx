import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_item from '../Assets/cart_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("Home")}>
                    <Link style={{textDecoration:'none'}} to="/">Home</Link>
                    {menu === "Home" && <hr />}
                </li>
                <li onClick={() => handleMenuClick("Men")}>
                    <Link style={{textDecoration:'none'}} to="/Men">Men</Link>
                    {menu === "Men" && <hr />}
                </li>
                <li onClick={() => handleMenuClick("Women")}>
                    <Link style={{textDecoration:'none'}} to="/Women">Women</Link>
                    {menu === "Women" && <hr />}
                </li>
                <li onClick={() => handleMenuClick("Kids")}>
                    <Link style={{textDecoration:'none'}} to="/Kids">Kids</Link>
                    {menu === "Kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration:'none'}} to="/login">
                    <button>Login</button>
                </Link>
                <Link style={{textDecoration:'none'}}  to="/Cart">
                    <img src={cart_item} alt="" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
