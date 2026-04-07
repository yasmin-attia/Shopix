import React from "react";
import image from "../assets/OIP1.png";
import "../components/Nav-bar.css";
import NavBar from "../components/Nav-bar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Home() {
  return (
    <>
      {/* big Banner image */}
      <div id="banner">
        <div id="text">
          <h1>Welcome To Our Online Store</h1>
          <p>Shope The Best Products at Great Prices</p>
          <Button as={Link} to="/Product">
            Shop now
          </Button>
        </div>
        <img src={image} id="image" />
      </div>
      {/* footer */}
      <footer>
        <h1>SHOPIX</h1>
        <div>
          <h2>Contact</h2>
          <p>#01122333333</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div >
            <i className="fa-brands fa-facebook me-4"></i>
            <i className="fa-brands fa-twitter me-4"></i>
            <i className="fa-brands fa-google "></i>
          </div>
        </div>
      </footer>
    </>
  );
}
