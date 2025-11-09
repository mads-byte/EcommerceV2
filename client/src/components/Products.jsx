import React from "react"
import './Products.css'
function Products() {
    const [products, setProducts] = React.useState([]);
    const [type, setType] = React.useState("");
    const [order, setOrder] = React.useState("");
    React.useEffect(() => {
        async function fetchProducts() {
            let url = "http://localhost:3000/products";
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
                    </div>
                ))}
            </div>


        </div >
    );
}

export default Products;