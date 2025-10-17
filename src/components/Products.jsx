import React from "react";

function Products() {
    const [products, setProducts] = React.useState([]);
    const [type, setType] = React.useState("");
    const [order, setOrder] = React.useState("");
    React.useEffect(() => {
        async function fetchProducts() {
            let url = "http://localhost:3000/products";
            if (type) url += `/${type}`;
            if (order && order === "ascending") {
                url = "http://localhost:3000/products/ascending";
            } else if (order && order === "descending") {
                url = "http://localhost:3000/products/descending";
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
        <div>
            <div>
                <button onClick={() => { setOrder(""), setType("") }}>All</button>
                <button onClick={() => { setOrder(""), setType("carryOn") }}>Carry Ons</button>
                <button onClick={() => { setOrder(""), setType("checked") }}>Checked Bags</button>
                <button onClick={() => { setOrder(""), setType("accessory") }}>Accessories</button>
                <button onClick={() => { setOrder(""), setType("bag") }}>Small bags</button>
                <button onClick={() => { setOrder(""), setType("duffle") }}>Duffles</button>
            </div>

            <div>
                <button onClick={() => setOrder("ascending")}>Lowest To Highest Price</button>
                <button onClick={() => setOrder("descending")}>Highest To Lowest Price</button>
            </div>

            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.product_name}</h2>
                    <p>${product.price}</p>
                    <img src={`/products/${product.image}`} alt={product.alt} />
                </div>
            ))}
        </div>
    );
}

export default Products;