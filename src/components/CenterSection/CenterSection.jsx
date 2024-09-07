import React from "react";
import "../CenterSection/centersection.css";
import loop from "../images/loop.png";
import faq from "../images/faq.png";
import brends from "../images/brand.svg";
import about from "../images/about.png";
import logostep from "../images/stepup.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hoocks/use-localstorage";
import i18n from "../../i18n";
function CenterSection() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "arm");

  const navigate = useNavigate();
  const handleButtonClick = (name) => {
    if (name == "brands") {
      navigate("/brands");
    } else if (name == "telegram") {
      const tg = window.Telegram.WebApp;
      let url = "https://t.me/StepUpPoizon";
      tg.openTelegramLink(url);
    } else if (name == "faq") {
      const tg = window.Telegram.WebApp;
      let url =
        "https://telegra.ph/Otvety-na-chasto-zadavaemye-voprosy-09-03-4";
      tg.openLink(url);
    } else if (name == "about") {
      const tg = window.Telegram.WebApp;
      let url = "https://telegra.ph/O-nas-09-03-4";
      tg.openLink(url);
    }
  };
  return (
    <div className="centersection">
      <div className="centersection-search">
        <h1>STEP UP</h1>
      </div>

      <div className="centersection-down">
        <div className="centersection-down_left">
          <div className="faqBt">
            <button onClick={() => handleButtonClick("faq")}>
              <img src={faq}></img>
            </button>
            <a>{t("questions")}</a>
          </div>
          <div className="aboutBt">
            <button onClick={() => handleButtonClick("about")}>
              <img src={about}></img>
            </button>
            <a> {t("about")}</a>
          </div>
        </div>

        <div className="centersection-down_right">
          <div className="centersection-down_right-brands">
            <button onClick={() => handleButtonClick("brands")}>
              <img src={brends}></img>
            </button>

            <a>
              {t("allbrend")
                .split("\n")
                .map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < t("allbrend").split("\n").length - 1 && <br />}
                  </span>
                ))}
            </a>
          </div>

          <div className="centersection-down_right-teleg">
            <button onClick={() => handleButtonClick("telegram")}>
              <img src={logostep}></img>
            </button>
            <a>
              {" "}
              {t("tg")
                .split("\n")
                .map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < t("tg").split("\n").length - 1 && <br />}
                  </span>
                ))}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterSection;
