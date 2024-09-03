import React from "react";
import "../CenterSection/centersection.css";
import loop from "../images/loop.png";
import faq from "../images/faq.png";
import brends from "../images/brends.png";
import about from "../images/about.png";
import logostep from "../images/logostepsv.svg";
import { useNavigate } from "react-router-dom";

function CenterSection() {
  const navigate = useNavigate();
  const handleButtonClick = (name) => {
    if (name == "brands") {
      navigate("/brands");
    } else if (name == "telegram") {
    } else if ("faq") {
      const tg = window.Telegram.WebApp;
      let url =
        "https://telegra.ph/Otvety-na-chasto-zadavaemye-voprosy-09-03-4";
      tg.openTelegramLink(url);
    } else if ("about") {
      const tg = window.Telegram.WebApp;
      let url = "https://telegra.ph/O-nas-09-03-4";
      tg.openTelegramLink(url);
    }
  };
  return (
    <div className="centersection">
      <div className="centersection-search">
        <input placeholder="ПОИСК"></input>
        <button className="searchBt">
          <img src={loop}></img>
        </button>
      </div>

      <div className="centersection-down">
        <div className="centersection-down_left">
          <div className="faqBt">
            <button onClick={() => handleButtonClick("faq")}>
              <img src={faq}></img>
            </button>
            <a>
              ЧАСТЫЕ <br /> ВОПРОСЫ
            </a>
          </div>
          <div className="aboutBt">
            <button onClick={() => handleButtonClick("about")}>
              <img src={about}></img>
            </button>
            <a>О НАС</a>
          </div>
        </div>

        <div className="centersection-down_right">
          <button onClick={() => handleButtonClick("brands")}>
            <img src={brends}></img>
            <a>ВСЕ БРЕНДЫ</a>
          </button>
          <button onClick={() => handleButtonClick("telegram")}>
            <img src={logostep}></img>
            <a>НАШ ТЕЛЕГРАМ</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CenterSection;
