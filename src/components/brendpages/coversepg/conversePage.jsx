import React from "react";
import converse from "../../Sneakers/converse.json";
import "../coversepg/conversepage.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../../hoocks/use-localstorage";
import loop from "../../images/loop.png";
import { useNavigate } from "react-router-dom";
import {
  dramForYuan,
  dramForRub,
  yuanForEur,
  eurForRub,
} from "../../../Value.js";
function conversePage() {
  const priceMaker = (price) => {
    if (price < 300) {
      return Math.floor(price * dramForYuan + 23000 + (price * 3) / 100);
    } else if (price >= 300 && price < 500) {
      return Math.floor(price * dramForYuan + 28000 + (price * 3) / 100);
    } else if (price >= 500 && price < 850) {
      return Math.floor(price * dramForYuan + 33000 + (price * 3) / 100);
    } else if (price >= 850 && price < 1500) {
      return Math.floor(price * dramForYuan + 38000 + (price * 3) / 100);
    } else if (price >= 1500) {
      let poshlRazn = price - 1500;
      let poshl = poshlRazn * 0.15 * eurForRub + 500;
      let finalposhl = poshl + (poshlRazn * 0.15 * eurForRub + 500) * 0.05;
      return Math.floor(
        price * dramForYuan + 38000 + (price * 3) / 100 + finalposhl
      );
    }
  };
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");
  const navigate = useNavigate();
  return (
    <div>
      <div className="centersection-search">
        <input placeholder={t("find")}></input>
      </div>

      <div className="backBtn">
        <button onClick={() => navigate("/brands")}>ВЕРНУТЬСЯ</button>
      </div>

      <div className="menu-container">
        {converse.map((item, index) => (
          <div key={index} className="sneaker-cardconv">
            <div>
              {" "}
              <img src={item.image}></img>
              <a id="nameconv">
                {item.name.split("\n").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < item.name.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </a>
              <a className="price">{priceMaker(item.price)}֏</a>
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

export default conversePage;
