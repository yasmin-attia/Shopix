import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/Nav-bar.css";
import imag from "../assets/OIP.png";
export default function Profile() {
  return (
    <>
      {/* header */}
      <div id="header">
        <h1>MyAccount</h1>
        <Button as={Link} to="/" className="btn">
          Home
        </Button>
      </div>
      {/* body */}
      <div id="body" className="d-flex justify-content-around">
        <div id="tx">
          <h3>HELLO User</h3>
          <p>
            This is your profile page.You can see the progress you have made
            with your work and manage your data and orders
          </p>
          <Button className="btn">Edit your profile</Button>
        </div>
        <img src={imag}/>
      </div>
    </>
  );
}
