import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {

const [products, setProducts] = useState([]);


const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
 setProducts(response.data.products);
 console.log(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
useEffect(() => {
  fetchProducts();
}, []);

  return (
    <>
      <h1 className="hed">product</h1>

    {products.map((product) => (
      <div className="cart" key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    ))}

    </>
  );
}
