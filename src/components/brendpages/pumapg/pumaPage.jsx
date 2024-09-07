import React, { useState } from "react";
import puma from "../../Sneakers/puma.json";
import "../pumapg/pumapage.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../../hoocks/use-localstorage";
import loop from "../../images/loop.png";
import { useNavigate } from "react-router-dom";
function pumaPage() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredPuma = puma.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );
  return (
    <div>
      <div className="centersection-search">
        <input
          onChange={handleSearchChange}
          placeholder={t("find")}
          value={searchTerm}
        ></input>
      </div>

      <div className="backBtn">
        <button onClick={() => navigate("/brands")}>ВЕРНУТЬСЯ</button>
      </div>

      <div className="menu-container">
        {filteredPuma.length > 0 ? (
          filteredPuma.map((item, index) => (
            <div key={index} className="sneaker-card">
              <div>
                <img src={item.image} alt={item.name} />
                <a>
                  {item.name.split("\n").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < item.name.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </a>
                <a className="price">{item.price}</a>
                <button onClick={() => handleButtonClick(index, item)}>
                  {t("buying")}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>{t("не найдено")}</p>
        )}
      </div>
    </div>
  );
}

export default pumaPage;
