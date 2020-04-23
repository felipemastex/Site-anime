import React from "react";

import "./style.css";

import destaque from "../../assets/fairy.jpg";
export default function ImgD() {
  return (
    <div className="ImgDStyle">
      <a href="https://www.dropbox.com/home?preview=01+-+Dominando+React!.mp4">
        <img src={destaque} alt="img" />
      </a>
    </div>
  );
}
