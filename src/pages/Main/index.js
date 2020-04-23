import React from "react";
import "./style.css";

import Heade from "../../components/Header";
import ImgD from "../../components/ImgD";
import Imglanc from "../../components/ImgLanc";
import ImgLast from "../../components/ImgLast";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

export default function Main() {
  return (
    <div className="containerM">
      <header>
        <Heade />
      </header>
      <div className="color">
        <div className="allContainer">
          <nav>
            <ImgD />
          </nav>

          <section>
            <SideBar />
            <div>
              <h2>Animes da primavera</h2>
            </div>

            <div className="containerLancamento">
              <Imglanc />
            </div>

            <div className="lastAnimes">
              <h2>Ultimos epsodios</h2>

              <ImgLast />
              <ImgLast />
              <ImgLast />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
