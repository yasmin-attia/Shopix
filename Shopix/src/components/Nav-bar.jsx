import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import img from "../assets/1162499.png";
import "./Nav-bar.css";
export default function NavBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className="d-flex">
            <img src={img} />
            <h1>Shopix</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
