import React from "react"
import './Products.css'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
function Products() {
    const [products, setProducts] = useState([]);
    const [type, setType] = useState("");
    const [order, setOrder] = useState("");
    const [cart, setCart] = useState(
        sessionStorage.getItem("cart")
            ? JSON.parse(sessionStorage.getItem("cart"))
            : []
    );
    useEffect(() => {
        async function fetchProducts() {
            let url = "https://ecommercev2-1-backend.onrender.com/products";
            if (type) url += `/${type}`;
            if (order && order === "ascending") {
                url += "/ascending";
            } else if (order && order === "descending") {
                url += "/descending";
            }
            try {
                const response = await fetch(url);
                console.log(response)
                const data = await response.json();
                setProducts(data);
                console.log(data);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        }

        fetchProducts();
    }, [type, order]);

    function updateCart(newCart) {
        const sanitized = newCart.filter(item => typeof item === "object" && item !== null); // filter out non-object entries
        setCart(sanitized);
        sessionStorage.setItem("cart", JSON.stringify(sanitized));
        console.log("Cart:", cart);
    }


    return (
        <div className="body">
            <div className="filter-buttons">
                <button className="buttons-style" onClick={() => { setOrder(""), setType("") }}>All</button>
                <button className="buttons-style" onClick={() => { setOrder(""), setType("Carry-On") }}>Carry Ons</button>
                <button className="buttons-style" onClick={() => { setOrder(""), setType("Checked") }}>Checked Bags</button>
                <button className="buttons-style" onClick={() => { setOrder(""), setType("Accessory") }}>Accessories</button>
                <button className="buttons-style" onClick={() => { setOrder(""), setType("Bag") }}>Small bags</button>
                <button className="buttons-style" onClick={() => { setOrder(""), setType("Duffle") }}>Duffles</button>
            </div>

            <div className="price-buttons">
                <button className="priceBtn-style" onClick={() => setOrder("ascending")}>Lowest To Highest Price</button>
                <button className="priceBtn-style" onClick={() => setOrder("descending")}>Highest To Lowest Price</button>
            </div>

            <div className="productSection">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="productBox"
                    >
                        <div className="prod-img" style={{
                            backgroundSize: 'contain',
                            backgroundImage: `url(/products/${product.hoverImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}>
                            <img alt={product.alt} src={`products/${product.image}`}></img>
                        </div>

                        {/* <Button variant="outline-dark" onClick={() => {
                            if (cart.length === 0) {
                                const newCart = [{ ...product, quantity: 1 }];
                                updateCart(newCart);
                                return;
                            } else {
                                const newCart = cart.map(item => item.id).includes(product.id)
                                    ? [...cart, cart[cart.findIndex(item => item.id === product.id)].quantity += 1]
                                    : [...cart, { ...product, quantity: 1 }];
                                updateCart(newCart);
                            }
                        }}>Add to Cart</Button> */}
                        <Button variant="outline-dark" onClick={() => {
                            if (cart.length === 0) {
                                const newCart = [{ ...product, quantity: 1 }];
                                updateCart(newCart);
                                return;
                            } else {
                                const newCart = cart.map(item => item.id).includes(product.id)
                                    ? [...cart, cart[cart.findIndex(item => item.id === product.id)].quantity += 1]
                                    : [...cart, { ...product, quantity: 1 }];
                                updateCart(newCart);
                            }
                        }}>Add to Cart</Button>
                        <div className="productName">{product.product_name}</div>
                        <div className="price">${product.price}
                            <del className="pastPrice">${product.past_price}</del>
                        </div>
                        <div className="productDescription">{product.description}</div>
                    </div>
                ))}
            </div>


        </div >
    );
}

export default Products;