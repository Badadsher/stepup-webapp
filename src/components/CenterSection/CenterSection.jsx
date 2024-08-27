import React from "react";
import "../CenterSection/centersection.css";
import loop from "../images/loop.png";
import faq from "../images/faq.png";
import brends from "../images/brends.png";
import about from "../images/about.png";
import logostep from "../images/logostepsv.svg";

function CenterSection() {
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
            <button>
              <img src={faq}></img>
            </button>
            <a>
              ЧАСТЫЕ <br /> ВОПРОСЫ
            </a>
          </div>
          <div className="aboutBt">
            <button>
              <img src={about}></img>
            </button>
            <a>О НАС</a>
          </div>
        </div>

        <div className="centersection-down_right">
          <button>
            <img src={brends}></img>
            <a>ВСЕ БРЕНДЫ</a>
          </button>
          <button>
            <img src={logostep}></img>
            <a>НАШ ТЕЛЕГРАМ</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CenterSection;
