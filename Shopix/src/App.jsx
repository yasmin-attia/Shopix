import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="hed align-items-center text-center ">product</h1>

        <div className="row g-3 ">
          {products.map((product) => (
            <div
              className="product-card col-lg-3 col-md-4 col-sm-6 mb-2  border border-dark rounded-3 
              
              "
              key={product.id}
            >
              <div className="card-hight h-50 p-3 d-flex flex-column align-items-center text-center">
                <div className="img">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="card-body">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    className=" btn btn-dark  "
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
