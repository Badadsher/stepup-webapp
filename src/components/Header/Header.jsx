import React, { useState } from "react";
import "../Header/header.css";
import armenIcon from "../images/armenia.png";
import ruIcon from "../images/popup/russia.png";
import enIcon from "../images/popup/usa.png";
import tgIcon from "../images/tg.png";
import Popup from "../PopupLanguage/Language";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hoocks/use-localstorage";
import i18n from "../../i18n";
function Header() {
  const { t } = useTranslation();

  function whichLang() {
    if (language === "arm") {
      return armenIcon;
    } else if (language === "ru") {
      return ruIcon;
    } else {
      return enIcon;
    }
  }

  let [langStateIcon, setLangIcon] = useState(whichLang());

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
    } else {
      toggleSetState(true);
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <button className="moderbt" onClick={() => onHandle("openTg")}>
          <img src={tgIcon}></img>
          <a>
            {/* Если не нашли <br />
            нужный товар */}
            {t("ifnotfound")}
          </a>
        </button>
      </div>

      <div className="header-right">
        <img src={langStateIcon} onClick={toggleLanguagesClick}></img>
      </div>

      <Popup
        ruIcon={ruIcon}
        enIcon={enIcon}
        armenIcon={armenIcon}
        langIcon={langStateIcon}
        setLangIcon={setLangIcon}
        active={toggleState}
        setActive={toggleSetState}
      ></Popup>
    </div>
  );
}

export default Header;
