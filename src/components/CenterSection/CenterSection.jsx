import React from "react";
import "../CenterSection/centersection.css";
import loop from "../images/loop.png";
function CenterSection() {
  return (
    <div className="centersection">
      <div className="centersection-search">
        <input placeholder="ПОИСК"></input>
        <button className="searchBt">
          <img src={loop}></img>
        </button>
      </div>
    </div>
  );
}

export default CenterSection;
