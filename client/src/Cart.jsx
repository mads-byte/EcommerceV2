import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Cart.css'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
    const [cart, setCart] = useState(
        sessionStorage.getItem("cart")
            ? JSON.parse(sessionStorage.getItem("cart"))
            : []
    );

    useEffect(() => {
        setCart(
            sessionStorage.getItem("cart")
                ? JSON.parse(sessionStorage.getItem("cart"))
                : []
        );
    }, []);
    return (
        sessionStorage.getItem("cart") ? (
            <div className="cart-body">
                <h2>Your Shopping Cart</h2>
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={`products/${item.image}`} alt={item.product_name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h4>{item.product_name}</h4>
                                <p className="item-price">Price: ${item.price * item.quantity}</p>
                                <p className="item-quantity">
                                    <button
                                        onClick={() => {
                                            const updatedCart = cart.map((cartItem, i) =>
                                                i === index
                                                    ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
                                                    : cartItem
                                            );
                                            setCart(updatedCart);
                                            sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                        }}
                                        className="btn btn-outline-secondary btn-sm mx-2"
                                    >
                                        -
                                    </button>
                                    Quantity: {item.quantity}
                                    <button
                                        onClick={() => {
                                            const updatedCart = cart.map((cartItem, i) =>
                                                i === index
                                                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                                    : cartItem
                                            );
                                            setCart(updatedCart);
                                            sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                        }}
                                        className="btn btn-outline-secondary btn-sm mx-2"
                                    >

                                        +
                                    </button>
                                    <button
                                        className="btn btn-outline-danger btn-sm mx-2"
                                        onClick={() => {
                                            const updatedCart = cart.filter((_, i) => i !== index);
                                            setCart(updatedCart);
                                            if (updatedCart.length === 0) {
                                                sessionStorage.removeItem("cart");
                                            } else {
                                                sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                            }
                                        }}
                                        aria-label="Remove item from cart"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    Taxes: $
                    {(
                        JSON.parse(sessionStorage.getItem("cart"))
                            .reduce((total, item) => total + item.price * item.quantity, 0) * 0.06
                    ).toFixed(2)}
                </div>
                <div>
                    Shipping: $12.99
                </div>
                <h3 className="cart-total">
                    Total: $
                    {(JSON.parse(sessionStorage.getItem("cart"))
                        .reduce((total, item) => total + item.price * item.quantity, 0)
                        + (
                            JSON.parse(sessionStorage.getItem("cart"))
                                .reduce((total, item) => total + item.price * item.quantity, 0) * 0.06 + 12.99
                        )).toFixed(2)}
                </h3>
            </div>
        ) : (
            <div className="cart-body">
                <h2>Your Shopping Cart is Empty</h2>
                <div>
                    <NavLink to="/shop" aria-label="go to the shopping cart" className={({ isActive }) => (isActive ? "active" : "")}>
                        Start Shopping!
                    </NavLink>
                </div>
            </div>
        )
    );
}

export default Cart;