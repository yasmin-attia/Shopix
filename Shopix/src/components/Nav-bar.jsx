import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import img from "../assets/1162499.png";
import "./Nav-bar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="white" data-bs-theme="white" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand className="d-flex">
            <img id="icon" src={img} />
            <h1>Shopix</h1>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/Product">
                    Products
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div>
                <Button className="btn-light " as={Link} to="/Login">
                  Login
                </Button>
                <Button className="btn-light" as={Link} to="/Register">
                  Register
                </Button>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
