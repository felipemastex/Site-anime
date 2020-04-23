import React from "react";
import "./style.css";
import "../../global.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo@3x.png";

export default function Logon() {
  return (
    <div className="container">
      <div className="containerColor">
        <div className="containerLogo">
          <img src={Logo} alt="logo" className="logoStyle" />
        </div>

        <div className="formStyle">
          <form>
            <h1 className="logonText">Faça seu login</h1>

            <input placeholder="Digite seu ID" className="inputText" />
            <button type="submit" className="buttonStyle">
              Entrar
            </button>
            <br />
            <Link to="/registro" className="signStyle">
              Não tenho cadastro
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
