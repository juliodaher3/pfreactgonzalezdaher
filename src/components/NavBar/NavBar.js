import React from "react";
import "./NavBar.css";

import Shop from "../Shop/Shop";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <li>
          <h1 style={{ color: "yellow" }}>Chinpokomon</h1>
        </li>
        <li>
          <a href="www.google.com">Inicio</a>
        </li>
        <li>
          <a href="www.google.com">Comprar</a>
        </li>
        <li>
          <a href="www.google.com">Corona real chinpoko</a>
        </li>
        <li>
          <Shop />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
