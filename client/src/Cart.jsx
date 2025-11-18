import React from "react";
import './Cart.css'

function Cart() {
    return (
        sessionStorage.getItem("cart") ? (
            <div className="cart-body">
                <h2>Your Shopping Cart</h2>
                <div className="cart-items">
                    {JSON.parse(sessionStorage.getItem("cart")).map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={`products/${item.image}`} alt={item.product_name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.product_name}</h3>
                                <p className="item-price">Price: ${item.price * item.quantity}</p>
                                <p className="item-quantity">Quantity: {item.quantity}</p>
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
            </div>
        )
    );
}

export default Cart;