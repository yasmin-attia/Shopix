import React from "react";
import NavBar from "./components/Nav-bar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
export default function App() {
  return (
    <>
      {/* navbar */}
      <NavBar />
      {/* routes */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={Login} />
        <Route path="/Product" Component={Product} />
        <Route path="/Register" Component={Register} />
      </Routes>
    </>
  );
}
