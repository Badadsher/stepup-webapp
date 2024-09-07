import React from "react";
import MainPage from "../Sneakers/mainpage.json";
import "../DownSections/downSection.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hoocks/use-localstorage";
import i18n from "../../i18n";
function DownSection() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");

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
              <a>{item.price}</a>
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
