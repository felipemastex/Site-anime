import React from "react";

import "./style.css";

import Logo from "../../assets/logo@3x.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <header>
        <img src={Logo} alt="img" />
        <ul>
          <li>
            <a href="wwww.google.com">Animes</a>
          </li>
          <li>
            <a href="wwww.google.com">Calendario</a>
          </li>
          <li>
            <a href="wwww.google.com">Sobre</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
