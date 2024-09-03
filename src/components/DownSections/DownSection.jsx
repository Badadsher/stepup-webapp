import React from "react";
import NikeData from "../Sneakers/nike.json";
import "../DownSections/downSection.css";
function DownSection() {
  return (
    <div className="down-section">
      <a className="down-section-logo">ПОПУЛЯРНОЕ</a>
      <div className="menu-container">
        {NikeData.map((item, index) => (
          <div key={index} className="sneaker-card">
            <img src={item.image}></img>
            <a>{item.name}</a>
            <a>{item.price}</a>
            <button onClick={() => handleButtonClick(index, item)}>
              ЗАКАЗАТЬ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownSection;
