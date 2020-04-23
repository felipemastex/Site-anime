import React from "react";

import "./style.css";
import Img1 from "../../assets/jojo.jpg";
import Img2 from "../../assets/black.jpg";
import Img3 from "../../assets/nanatsu.jpg";

export default function SideBar() {
  return (
    <div className="sideBarContainer">
      <h3>Top Animes mais assistidos</h3>
      <div className="sideBarImg">
        <img src={Img1} alt="img" />
        <div>Jojo stardust crusaders</div>
        <img src={Img2} alt="img" />
        <div>Black clover</div>
        <img src={Img3} alt="img" />
        <div>Nanatsu no Taisai</div>
      </div>
    </div>
  );
}
