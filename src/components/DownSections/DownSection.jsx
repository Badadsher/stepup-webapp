import React from "react";
import MainPage from "../Sneakers/mainpage.json";
import "../DownSections/downSection.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hoocks/use-localstorage";
import i18n from "../../i18n";
import { dramForYuan, dramForRub, yuanForEur, eurForRub } from "../../Value.js";
function DownSection() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");

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
      let finalposhl =
        (poshl + (poshlRazn * 0.15 * eurForRub + 500) * 0.05) / dramForRub;
      return Math.floor(
        price * dramForYuan + 38000 + (price * 3) / 100 + finalposhl
      );
    }
  };

  return (
    <div className="down-section">
      <a className="down-section-logo">{t("popular")}</a>
      <div className="menu-container">
        {MainPage.map((item, index) => (
          <div key={index} className="sneaker-card">
            <div>
              {" "}
              <img src={item.image}></img>
              <a>
                {item.name.split("\n").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < item.name.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </a>
              <a>{priceMaker(item.price)}֏</a>
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

export default DownSection;
