import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";




function Navbar() {

    const boxRef = useRef(null);

    function toggle() {
        if (boxRef.current.style.maxHeight === "0px") {
            boxRef.current.style.maxHeight = "200px";
        } else if (boxRef.current.style.maxHeight === "200px") {
            boxRef.current.style.maxHeight = "0px";
        }
    }

    return (
        <nav role="navigation">
            <div className="nav-logo">
                <img alt="West travel Logo" src="/wtLogo.jpeg" />
                <div className="logo-title">West Travel</div>
            </div>

            <ul ref={boxRef} style={{
                maxHeight: "0px",
                overflow: "hidden",
                transition: "0.5s ease"
            }} className={'menu-items'}>
                <li>
                    <NavLink to="/" aria-label="return home" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop" aria-label="shop for luxury luggage" className={({ isActive }) => (isActive ? "active" : "")}>Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" aria-label="go to the shopping cart" className={({ isActive }) => (isActive ? "active" : "")}>
                        <FontAwesomeIcon className="cart" icon={faCartShopping} /></NavLink>
                </li>
                <li>
                    <NavLink to="/contact" aria-label="go to the contact us page" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
                </li>
            </ul>

            <button
                className="menu-icon" aria-label="Toggle menu" onClick={toggle}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}
export default Navbar;