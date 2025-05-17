// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <em>Garage Hot Sales!</em>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sales" onClick={closeMenu}>
              Shop Now
            </Link>
          </li>
          <li>
            <Link to="/signin" onClick={closeMenu}>
              Sign in
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={closeMenu}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
