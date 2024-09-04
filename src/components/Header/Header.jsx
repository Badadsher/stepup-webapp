import React, { useState } from "react";
import "../Header/header.css";
import armenIcon from "../images/armenia.png";
import tgIcon from "../images/tg.png";
import Popup from "../PopupLanguage/Language";
function Header() {
  const [toggleState, toggleSetState] = useState(false);
  const onHandle = (movement) => {
    if (movement == "openTg") {
      const tg = window.Telegram.WebApp;
      let url = "https://t.me/StepUp_Poizon";
      tg.openTelegramLink(url);
    }
  };
  const toggleLanguagesClick = () => {
    if (toggleState) {
      toggleSetState(false);
      console.log(toggleState);
    } else {
      toggleSetState(true);
      console.log(toggleState);
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <button className="moderbt" onClick={() => onHandle("openTg")}>
          <img src={tgIcon}></img>
          <a>
            Если не нашли <br />
            нужный товар
          </a>
        </button>
      </div>

      <div className="header-right">
        <img src={armenIcon} onClick={toggleLanguagesClick}></img>
      </div>

      <Popup active={toggleState} setActive={toggleSetState}></Popup>
    </div>
  );
}

export default Header;
