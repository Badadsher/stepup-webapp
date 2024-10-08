import React, { useState } from "react";
import nike from "../../Sneakers/nike.json";
import "../nikepg/nikepage.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../../hoocks/use-localstorage";
import loop from "../../images/loop.png";
import i18n from "../../../i18n.js";
import { useNavigate } from "react-router-dom";
import {
  dramForYuan,
  dramForRub,
  yuanForEur,
  eurForRub,
} from "../../../Value.js";
import ScrollToTopButton from "../../UpButton/UpButton.jsx";
function nikePage() {
  const priceMaker = (price) => {
    if (price < 1500) {
      let y = (price + price * 0.03) * dramForYuan;
      let z = y + y * 0.35 + 13000;
      return Math.floor(z);
    } else if (price >= 1500) {
      let poshlRazn = price - 1500;
      let poshl = poshlRazn * 0.15 * eurForRub + 500;
      let finalposhl =
        (poshl + (poshlRazn * 0.15 * eurForRub + 500) * 0.05) / dramForRub;
      return Math.floor(
        price * dramForYuan +
          13000 +
          price * 0.45 +
          (price * 3) / 100 +
          finalposhl
      );
    }
  };
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredNike = nike.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );
  const tg = window.Telegram.WebApp.initDataUnsafe.user;

  const handleButtonClick = (data) => {
    if (i18n.language === "ru") {
      let message = "Ваш заказ принят!";
      window.Telegram.WebApp.showAlert(message);
    } else if (i18n.language === "en") {
      let message = "Your order is accepted!";
      window.Telegram.WebApp.showAlert(message);
    } else {
      let message = "Ձեր պատվերն ընդունված է";
      window.Telegram.WebApp.showAlert(message);
    }
    // Отправка данных на сервер
    fetch("https://stepupback.ru/web-data", {
      // mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input1: data,
        input2: tg.username,
        input3: tg.id,
        input4: i18n.language.toString(),
      }),
    });
  };
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
        {filteredNike.length > 0 ? (
          filteredNike.map((item, index) => (
            <div key={index} className="sneaker-cardnikecd">
              <div>
                <img src={item.image} alt={item.name} />
                <a id="nikecd">
                  {item.name.split("\n").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < item.name.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </a>
                <a className="price">{priceMaker(item.price)}֏</a>
                <button onClick={() => handleButtonClick(item.link)}>
                  {t("buying")}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>{t("notefound")}</p>
        )}
      </div>
      <ScrollToTopButton className="upperBtn"></ScrollToTopButton>
    </div>
  );
}

export default nikePage;
