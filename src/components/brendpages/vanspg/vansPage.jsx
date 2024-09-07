import React from "react";
import vans from "../../Sneakers/vans.json";
import "../vanspg/vanspage.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../../hoocks/use-localstorage";
import loop from "../../images/loop.png";
import { useNavigate } from "react-router-dom";
function vansPage() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");
  const navigate = useNavigate();
  return (
    <div>
      <div className="centersection-search">
        <input placeholder={t("find")}></input>
        <button className="searchBt">
          <img src={loop}></img>
        </button>
      </div>

      <div className="backBtn">
        <button onClick={() => navigate("/brands")}>ВЕРНУТЬСЯ</button>
      </div>

      <div className="menu-container">
        {vans.map((item, index) => (
          <div key={index} className="sneaker-cardvans">
            <div>
              {" "}
              <img src={item.image}></img>
              <a id="namevans">
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
        ))}
      </div>
    </div>
  );
}

export default vansPage;
