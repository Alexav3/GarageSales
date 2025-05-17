// src/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Garage Hot Sales! | All Rights
        Reserved
      </p>
    </footer>
  );
}

export default Footer;
