import React from "react";
import MainPage from "../Sneakers/mainpage.json";
import "../DownSections/downSection.css";
function DownSection() {
  return (
    <div className="down-section">
      <a className="down-section-logo">ПОПУЛЯРНОЕ</a>
      <div className="menu-container">
        {MainPage.map((item, index) => (
          <div key={index} className="sneaker-card">
            <div>
              {" "}
              <img src={item.image}></img>
              <a>{item.name}</a>
              <a>{item.price}</a>
              <button onClick={() => handleButtonClick(index, item)}>
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownSection;
