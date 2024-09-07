import React, { useState } from "react";
import vans from "../../Sneakers/vans.json";
import "../vanspg/vanspage.css";
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
function vansPage() {
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredVans = vans.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const tg = window.Telegram.WebApp.initDataUnsafe.user;

  const handleButtonClick = (data) => {
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

        window.Telegram.WebApp.close();
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных:", error);
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
        {filteredVans.length > 0 ? (
          filteredVans.map((item, index) => (
            <div key={index} className="sneaker-cardvans">
              <div>
                <img src={item.image} alt={item.name} />
                <a id="namevans">
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
    </div>
  );
}

export default vansPage;
