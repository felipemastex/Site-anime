import React from "react";
import Logo from "../../assets/logo@3x.png";

import { Link } from "react-router-dom";

import "./style.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={Logo} alt="img" />
          <h1>Cadastro</h1>
          <p>Faça parte do nosso time</p>

          <Link to="/" className="signStyleR">
            Voltar
          </Link>
        </section>
        <form className="form">
          <input placeholder="Nome" className="inputStyleR" />
          <br />
          <input type="email" placeholder="email" className="inputStyleR" />
          <br />
          <input type="passWord" placeholder="senha" className="inputStyleR" />

          <button type="submit" className="buttonStyle">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
