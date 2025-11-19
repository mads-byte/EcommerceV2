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
                        <div className="productName">{product.product_name}</div>
                        <div className="price">${product.price}
                            <del className="pastPrice">${product.past_price}</del>
                        </div>
                        <div className="productDescription">{product.description}</div>
                        <Button variant="outline-dark" onClick={(e) => {
                            e.target.textContent = `Added`;
                            setTimeout(() => {
                                e.target.textContent = ` Add to Cart`;
                            }, 500);
                            setCart(prevCart => {
                                const exists = prevCart.find(item => item.id === product.id);

                                let updated;
                                if (exists) {
                                    updated = prevCart.map(item =>
                                        item.id === product.id
                                            ? { ...item, quantity: item.quantity + 1 }
                                            : item
                                    );
                                } else {
                                    updated = [...prevCart, { ...product, quantity: 1 }];
                                }

                                sessionStorage.setItem("cart", JSON.stringify(updated));
                                console.log("Cart:", sessionStorage.getItem("cart"));
                                return updated;
                            });
                        }}>Add to Cart</Button>
                    </div>
                ))}
            </div>


        </div >
    );
}

export default Products;