import React from "react";

import "./style.css";

import img1 from "../../assets/jojo.jpg";
import img2 from "../../assets/black.jpg";
import img3 from "../../assets/nanatsu.jpg";
import img4 from "../../assets/naruto.jpg";

export default function Imglanc() {
  return (
    <div className="containerLancamento">
      <div className="galeryContainer">
        <a href="http://www.google.com">
          <img src={img1} alt="img" />
          <div>jojo stardust crusaders</div>
        </a>
      </div>
      <div className="galeryContainer">
        <a href="http://www.google.com">
          <img src={img2} alt="img" />
          <div>Black clover</div>
        </a>
      </div>
      <div className="galeryContainer">
        <a href="http://www.google.com">
          <img src={img3} alt="img" />
          <div>nanatsu no taizai kamigami no gekirin dasddsdsd asd aad sa</div>
        </a>
      </div>
      <div className="galeryContainer">
        <a href="http://www.google.com">
          <img src={img4} alt="img" />
          <div>naruto shippuden</div>
        </a>
      </div>
    </div>
  );
}
