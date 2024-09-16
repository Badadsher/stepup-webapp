import React, { useEffect, useState } from "react";
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
  const tg = window.Telegram.WebApp.initDataUnsafe.user;

  const handleButtonClick = (data) => {
    let message = "Ваш заказ принят!";
    window.Telegram.WebApp.showAlert(message);
    // Отправка данных на сервер
    fetch("http://localhost:8080/stepup/checker.php", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input1: data,
        input2: tg.username,
        input3: tg.id,
      }),
    })
      .then((response) => response.text()) // Используем text() вместо json()
      .then((data) => {
        try {
          // Попытаемся разобрать данные как JSON
          const jsonData = JSON.parse(data);
          console.log("Ответ от сервера:", jsonData);
        } catch (error) {
          // Если разбор JSON не удался, выведем данные как текст
          console.error("Ошибка при разборе JSON:", error);
          console.log("Текст ответа:", data);
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных:", error);
      });
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
              <button onClick={() => handleButtonClick(item.link)}>
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
