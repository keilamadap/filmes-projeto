import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="tmdb-icon.svg" className="logo-tmdb" alt="logo"></img>
      <div className="links-top">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
