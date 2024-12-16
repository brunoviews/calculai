import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Banner from "../Banner/Banner";
import SignUpButtons from "../SignUpButtons/SignUp";


function Navbar({ links = [], logoText = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Banner />
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="./logo.png"
              alt="Digitaly Logo"
              className="logo-image"
            />
          </Link>

        </div>
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>

          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </nav>
        <SignUpButtons/>
        <div className="navbar-toggle" onClick={toogleMenu}>
          &#9776;
        </div>

      </header>
    </motion.div>
  );
}

export default Navbar;
